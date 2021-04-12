import { UserInputError } from "apollo-server-express";
import { ContextInterface, ParentInterface, Partial } from "unwind-server/types";
import { getNextUTCHours } from "unwind-server/utils/helpers";
import { CreateChallengeArgs, CreateCommentArgs, CreatePostArgs, CreateReactionArgs, CreateUserArgs, EntityType, FollowEntityArgs, PostOrigin, UpdateUserArgs, UserFollowArgs } from "./types";


export const createUser = async (parent: ParentInterface, { input }: { input: CreateUserArgs }, context: ContextInterface) => {
    const { prisma } = context
    const errors: Partial<CreateUserArgs> = {}
    const { email, lastName, firstName, uid } = input
    if (email.length > 255) errors.email = 'Too many characters'
    if (firstName.length > 255) errors.firstName = 'Too many characters'
    if (lastName.length > 255) errors.lastName = 'Too many characters'
    if (uid.length > 255) errors.uid = 'Too many characters'

    if (Object.keys(errors).length >= 1) throw new UserInputError('Invalid input supplied', errors)
    try {
        const user = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                uid
            }
        })
        return {
            code: '200',
            success: true,
            message: 'User created successfully',
            user
        }
    }
    catch {
        return {
            code: '500',
            success: false,
            message: 'Error creating user',
        }
    }

}

export const updateUser = async (
    parent: ParentInterface,
    { input }: { input: UpdateUserArgs },
    context: ContextInterface) => {
    const { prisma } = context
    const errors: Partial<UpdateUserArgs> = {}
    const { lastName, firstName, userName, imgUrl, uid, bio, cruise } = input
    if (firstName && firstName.length > 255) errors.firstName = 'Too many characters'
    if (lastName && lastName.length > 255) errors.lastName = 'Too many characters'
    if (userName && userName.length > 255) errors.userName = 'Too many characters'
    if (imgUrl && !imgUrl.startsWith('https://')) errors.userName = 'Incorrect url'

    if (Object.keys(errors).length >= 1) throw new UserInputError('Invalid input supplied', errors)
    try {
        const user = await prisma.user.update({
            where: {
                uid
            },
            data: {
                ...(firstName && { firstName }),
                ...(lastName && { lastName }),
                ...(imgUrl && { imgUrl }),
                ...(userName && { userName }),
                ...(bio && { bio }),
                ...(cruise && { cruise })
            }
        })
        return {
            code: '200',
            success: true,
            message: 'User updated successfully',
            user
        }
    }
    catch {
        return {
            code: '500',
            success: false,
            message: 'Error updating user',
        }
    }

}

export const createPost = async (parent: ParentInterface, { input }: { input: CreatePostArgs }, context: ContextInterface) => {
    const {  prisma  } = context
    
    const { attachmentType, content, uid, location, fileAttachment, challengeId } = input

    let hashtags = content?.toLowerCase().match(/#\w*/gi)
    
    try {
        const post = await prisma.post.create({
            data: {
                user: { connect: { uid: uid } },
                attachmentType: attachmentType ?? null,
                attachmentUrl: fileAttachment?.url ?? null,
                attachmentMeta: fileAttachment ?? null,
                content,
                ...(hashtags && { hashtags }),
                ...(challengeId && { challenge : { connect :{ id: challengeId} }})
            }
        })
        return {
            code: '200',
            success: true,
            message: 'Post created successfully',
            post
        }
    }
    catch {
        return {
            code: '500',
            success: false,
            message: 'Error while creating post',
        }
    }

}


export const createChallenge = async (parent: ParentInterface, { input }: { input: CreateChallengeArgs }, context: ContextInterface) => {
    const {  prisma  } = context
    
    const { attachmentType, challenge, uid, fileAttachment, start, end } = input

    let hashtags = challenge?.toLowerCase().match(/#\w*/gi)
    
    try {
        const newChallenge = await prisma.challenge.create({
            data: {
                user: { connect: { uid: uid } },
                challenge,
                attachmentType: attachmentType ?? null,
                attachmentUrl: fileAttachment?.url ?? null,
                attachmentMeta: fileAttachment ?? null,
                ...(hashtags && { hashtags }),
                start,
                end
            }
        })
        
        await prisma.post.create({
            data : {
                user: { connect : { uid: uid}},
                content: challenge,
                attachmentType: attachmentType ?? null,
                attachmentUrl: fileAttachment?.url ?? null,
                attachmentMeta: fileAttachment ?? null,
                ...(hashtags && { hashtags }),
                origin: PostOrigin.OGCHALLENGE,
                challenge: { connect: { id: newChallenge?.id }}
            }
        })

        return {
            code: '200',
            success: true,
            message: 'Challenge created successfully',
            challenge: newChallenge
        }
    }
    catch {
        return {
            code: '500',
            success: false,
            message: 'Error while creating challenge',
        }
    }

}

export const createComment = async (parent: ParentInterface, { input }: { input: CreateCommentArgs }, context: ContextInterface) => {
    const {  prisma  } = context
    
    const { attachmentType, comment, uid, fileAttachment, entityId, entityType } = input

    let hashtags = comment?.toLowerCase().match(/#\w*/gi)
    
    try {
        const newComment = await prisma.comment.create({
            data: {
                user: { connect: { uid: uid } },
                comment,
                ...(attachmentType && { attachmentType: attachmentType }),
                ...(fileAttachment && { attachmentUrl: fileAttachment.url, attachmentMeta: fileAttachment }),
                ...(hashtags && { hashtags }),
                entityType,
                entityId,
                ...(entityType === EntityType.CHALLENGE && { challenge: { connect: { id: entityId } } }),
                ...(entityType === EntityType.POST && { post: { connect: { id: entityId } } })
            }
        })

        return {
            code: '200',
            success: true,
            message: 'Comment created successfully',
            comment: newComment
        }
    }
    catch {
        return {
            code: '500',
            success: false,
            message: 'Error creating comment',
        }
    }

}

export const createReaction = async (parent: ParentInterface, { input }: { input: CreateReactionArgs }, context: ContextInterface) => {
    const {  prisma  } = context
    
    const { entityType, entityId, uid } = input
    try {
        if (entityType === EntityType.POST) {
            const post = await prisma.post.findUnique({
                where: {
                    id: entityId
                }
            })
            if(!post) throw new Error()
            await prisma.post.update({
                where: {
                    id: entityId
                },
                data : {
                    likedBy: [...post?.likedBy, uid],
                    likes: ++post.likes
                }
            })

        }
        if (entityType === EntityType.CHALLENGE) {
            const challenge = await prisma.challenge.findUnique({
                where: {
                    id: entityId
                }
            })
            if(!challenge) throw new Error()
            await prisma.challenge.update({
                where: {
                    id: entityId
                }, 
                data: {
                    likedBy: [...challenge.likedBy, uid],
                    likes: ++challenge.likes
                }
            })
        }
        if (entityType === EntityType.COMMENT) {
            const comment = await prisma.comment.findUnique({
                where: {
                    id: entityId
                }
            })
            if(!comment) throw new Error()
            await prisma.comment.update({
                where: {
                    id: entityId
                }, 
                data: {
                    likedBy: [...comment.likedBy, uid],
                    likes: ++comment.likes
                }
            })
        }
        return {
            code: "200",
            success: true,
            message: 'Reaction added successfully'
        }
    }
    catch {
        return {
            code: "500",
            success: false,
            message: 'Failed to add reaction'
        }
    }
}

export const deleteReaction = async (parent: ParentInterface, { input }: { input: CreateReactionArgs }, context: ContextInterface) => {
    const {  prisma  } = context
    
    const { entityType, entityId, uid } = input
    try {
        if (entityType === EntityType.POST) {
            const post = await prisma.post.findUnique({
                where: {
                    id: entityId
                }
            })
            if(!post) throw new Error()
            await prisma.post.update({
                where: {
                    id: entityId
                },
                data : {
                    likedBy: post.likedBy.filter(id => id !== uid),
                    likes: --post.likes
                }
            })

        }
        if (entityType === EntityType.CHALLENGE) {
            const challenge = await prisma.challenge.findUnique({
                where: {
                    id: entityId
                }
            })
            if(!challenge) throw new Error()
            await prisma.challenge.update({
                where: {
                    id: entityId
                }, 
                data: {
                    likedBy: challenge.likedBy.filter(id => id !== uid),
                    likes: --challenge.likes
                }
            })
        }
        if (entityType === EntityType.COMMENT) {
            const comment = await prisma.comment.findUnique({
                where: {
                    id: entityId
                }
            })
            if(!comment) throw new Error()
            await prisma.comment.update({
                where: {
                    id: entityId
                }, 
                data: {
                    likedBy: comment.likedBy.filter(id => id !== uid),
                    likes: --comment.likes
                }
            })
        }
        return {
            code: "200",
            success: true,
            message: 'Reaction added successfully'
        }
    }
    catch {
        return {
            code: "500",
            success: false,
            message: 'Failed to delete reaction'
        }
    }
}

export const followEntity = async (parent: ParentInterface, { input }: { input: FollowEntityArgs }, context: ContextInterface) => {
    const {  prisma  } = context
    
    const { id, entityType, uid } = input
    try {
        if (entityType === EntityType.CHALLENGE) {
            await prisma.challenge.update({
                where: {
                    id
                },
                data: {
                    followers: {
                        connect: { uid }
                    }
                }
            })
        }
        return {
            code: "200",
            success: true,
            message: 'Successfully followed entity',
            entityId: id
        }
    }
    catch {
        return {
            code: "500",
            success: false,
            message: 'Failed to follow entity'
        }
    }

}

export const unfollowEntity = async (parent: ParentInterface, { input }: { input: FollowEntityArgs }, context: ContextInterface) => {
    const { prisma } = context
    
    const { id, entityType, uid } = input
    try {

        if (entityType === EntityType.CHALLENGE) {
            await prisma.challenge.update({
                where: {
                    id
                },
                data: {
                    followers: {
                        disconnect: { uid }
                    }
                }
            }).catch(() => { })
        }
        return {
            code: "200",
            success: true,
            messaage: 'Unfollowed entity'
        }
    }
    catch {
        return {
            code: "500",
            success: false,
            message: 'Failed to unfollow entity'
        }
    }
}

export const followUser = async (parent: ParentInterface, { input }: { input: UserFollowArgs }, context: ContextInterface) => {
    const {  prisma  } = context
    
    const { currentUid, followUid } = input
    try {
        const user = await prisma.user.update({
            where: {
                uid: currentUid
            },
            data: {
                following: { connect: { uid: followUid } }
            }
        })
        await prisma.user.update({
            where: {
                uid: followUid
            },
            data: {
                followers: { connect: { uid: currentUid } }
            }
        })
        return {
            code: '200',
            success: true,
            message: 'Successfully followed user',
            user
        }
    }
    catch {
        return {
            code: '500',
            success: false,
            message: 'Error following user'
        }
    }
}

export const unfollowUser = async (parent: ParentInterface, { input }: { input: UserFollowArgs }, context: ContextInterface) => {
    const {  prisma  } = context
    
    const { currentUid, followUid } = input
    try {
        const user = await prisma.user.update({
            where: {
                uid: currentUid
            },
            data: {
                following: { disconnect: { uid: followUid } }
            }
        })
        await prisma.user.update({
            where: {
                uid: followUid
            },
            data: {
                followers: { disconnect: { uid: currentUid } }
            }
        })
        return {
            code: '200',
            success: true,
            message: 'Unfollowed user',
            user
        }
    }
    catch {
        return {
            code: '500',
            success: false,
            message: 'Error unfollowing user'
        }
    }
}

export const enablePeek = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    const { uid, prisma } = context
    const peeks = await prisma.peek.findMany({
        where: {
            userId: uid
        }
    })
    if(peeks?.length >= 1 && peeks[0].active) {
        return {
            code: '400',
            message: 'Peek already active',
            success: false
        }
    }
    if(peeks?.length >= 1) {
        await prisma.peek.update({
            where: {
                id: peeks[0].id
            },
            data: {
                expiresUTC: getNextUTCHours(),
                active: true
            }
        })
    }

    if(peeks?.length <= 0) {
        await prisma.peek.create({
            data: {
                userId: uid,
                active: true,
                expiresUTC: getNextUTCHours(),
                peeks: 1
            }
        })
    }
    return {
        code: '200',
        message: 'Peek activated',
        success: true 
    }

}