import { RedisClient } from "redis"
import { REDIS_EVENTS } from "unwind-feed-server/events"
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
    do {
        //@ts-ignore
        const scanResult = await scanAsync(cursor, 'COUNT', '100')
        cursor = scanResult[0]
        const keys = scanResult[1]
        if (keys.length > 0) {
            keys.forEach(async (key) => {
                const lastCursorsStr = await getAsync(key)
                const parsedCursors = lastCursorsStr?.split(',')
                parsedCursors?.forEach(async (cursor, index) => {
                    if (!cursor) return
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

                    let updatedCursors;
                    switch (index) {
                        case 0:
                            const posts = await prisma.post.findMany({
                                cursor: {
                                    cursor
                                },
                                skip: 1,
                                where: {
                                    OR: [
                                        {
                                            userId: { in: [...following.map(user => user.uid), key] }
                                        },
                                        {
                                            challengeId: { in: [...challengeFollowing.map(challenge => challenge.id)] }
                                        }
                                    ]

                                }
                            })
                            if(posts?.length > 0) {
                                const postData = { userId: key, posts }
                                publisher.publish(REDIS_EVENTS.feed, JSON.stringify(postData))
                                updatedCursors = [...parsedCursors]
                                updatedCursors[0] = posts[posts.length - 1]?.cursor
                                setAsync(key, updatedCursors.join(','))
                            }
                            break;
                        case 1:
                            const challenges = await prisma.challenge.findMany({
                                skip: 1 ,
                                cursor: {
                                    cursor,
                    
                                },
                                where: {
                                    OR: [
                                        {
                                            userId: { in: [...following.map(user => user.uid), key]}
                                        }
                                    ]
                                }
                            })
                            if(challenges?.length > 0 ) {
                                const challengeData = { userId: key, challenges}
                                publisher.publish(REDIS_EVENTS.feed, JSON.stringify(challengeData))
                                updatedCursors = [...parsedCursors]
                                updatedCursors[1] = challenges[challenges.length - 1]?.cursor
                                setAsync(key, updatedCursors.join(','))
                            }
                            
                            break;
                    }
                })
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
    }, 5 * 60 * 1000)
}


