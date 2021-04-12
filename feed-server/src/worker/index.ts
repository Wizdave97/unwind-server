import { RedisClient } from "redis"
import { REDIS_EVENTS } from "unwind-feed-server/events"
import { getUsersThatReactedToPost, PostWithComments } from "unwind-feed-server/lib/helpers"
import { PrismaClient } from "unwind-feed-server/prisma/src/generated/client"
import { promisify } from 'util'



const worker = async ({prisma, setAsync, scanAsync, getAsync, publisher}: { 
    prisma: PrismaClient, 
    publisher: RedisClient,
    scanAsync: () => Promise<[string, string[]]>,
    getAsync: (arg1: string) => Promise<string | null>,
    setAsync: (arg1: string, arg2: string) => Promise<unknown> 
    }) => {

    let cursor = '0'
    const visited = new Set<string>()
    do {
        //@ts-ignore
        const scanResult = await scanAsync(cursor, 'COUNT', '100')
        cursor = scanResult[0]
        const keys = scanResult[1]
        if (keys.length > 0) {
            keys.forEach(async (key) => {
                if(visited.has(key)) return
                visited.add(key)
                const msg = await getAsync(key)
                const parsedCursors = msg ? JSON.parse(msg) : {}
                const { postCursor } = parsedCursors
                if(!postCursor) return
                const following = await prisma.user.findUnique({
                    where: {
                        uid: key
                    }
                }).following()
                const challengeFollowing = await prisma.user.findUnique({
                    where: {
                        uid: key
                    }
                }).challengeFollowing()
                const posts = await prisma.post.findMany({
                    cursor: {
                        cursor : postCursor
                    },
                    take: 20,
                    skip: 1,
                    where: {
                        OR: [
                            {
                                userId: { in: [...following.map(user => user.uid), key] }
                            },
                            {
                                challengeId: { in: [...challengeFollowing.map(challenge => challenge.id)] }
                            },
                            {
                                likedBy: {hasSome: [...following.map(user => user.uid), key]}
                            },
                            {
                                comments: { some: { userId: { equals: key}}}
                            }
                        ]

                    },
                    include: {
                        comments: true
                    }
                })

                
                const updatedCursors = {
                    postCursor: posts?.length > 0 ? posts[posts.length - 1]?.cursor : postCursor,
                    userId: key
                }
                if(updatedCursors.postCursor !== postCursor) {
                    setAsync(key, JSON.stringify(updatedCursors))
                }
                if(posts?.length  === 0) return
                posts.forEach(post => {
                    const reactedUsers = getUsersThatReactedToPost(following, post as PostWithComments)
                    return { ...post, reactedUsers}
                })
                const data = { posts, userId: key}
                publisher.publish(REDIS_EVENTS.feed, JSON.stringify(data))
                
            })
        }
    } while (cursor !== '0')

}
export const initWorker = (prisma: PrismaClient, redisClient: RedisClient) => {
    const scanAsync = promisify(redisClient.scan).bind(redisClient)
    const getAsync = promisify(redisClient.get).bind(redisClient)
    const setAsync = promisify(redisClient.set).bind(redisClient)
    const publisher = redisClient.duplicate()
    setInterval(() => {
        worker({scanAsync, getAsync, setAsync, prisma, publisher})
    }, 10000)
}


