import { Post, User, Comment } from "unwind-feed-server/prisma/src/generated/client"

export interface PostWithComments extends Post {
    comments: Comment[]
}
export const getUsersThatReactedToPost = (following: User[], post: PostWithComments) => {
    const followingUIDs = following.map(user => user.uid)
    const reactedUserIds = new Set()
    followingUIDs.forEach(id => {
        if(post.likedBy.indexOf(id) > -1) reactedUserIds.add(id)
        if(post.comments.findIndex(o => o.userId === id)) reactedUserIds.add(id)
    })

    const reactedUsers = following.filter(({uid}) => reactedUserIds.has(uid))

    return reactedUsers
}