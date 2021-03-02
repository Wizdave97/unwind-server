import { ApolloError, UserInputError } from "apollo-server-express";
import { ContextInterface, ParentInterface, Partial } from "unwind-server/types";
import { AppLockStatus, resolveTimezoneAndPeeks } from "unwind-server/utils/helpers";
import { CreateChallengeArgs, CreateCommentArgs, CreateCruiseArgs, CreatePostArgs, CreateReactionArgs, CreateUserArgs, EntityType, FollowEntityArgs, ReactionType, UpdateUserArgs, UserFollowArgs } from "./types";


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
    const { lastName, firstName, userName, imgUrl, uid, bio } = input
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
                ...(bio && { bio })
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
    const { headers: { timezone }, prisma, uid: loggedInUser } = context
    const status = await resolveTimezoneAndPeeks({ timezone: timezone as string, uid: loggedInUser, prisma })
    if (status === AppLockStatus.LOCKED) return new ApolloError('AppLock: Timezone not yet unlocked')
    const { attachmentType, content, uid, location, fileAttachment } = input

    let hashtags = content?.match(/#\w*/gi)
    const reaction = { hot: 0, kisses: 0, hearts: 0 }
    try {
        const post = await prisma.post.create({
            data: {
                user: { connect: { uid: uid } },
                attachmentType,
                attachmentUrl: fileAttachment.url,
                attachmentMeta: fileAttachment,
                ...(content && { content }),
                ...(hashtags && { hashtags }),
                reaction
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

export const createCruise = async (parent: ParentInterface, { input }: { input: CreateCruiseArgs }, context: ContextInterface) => {
    const { headers: { timezone }, prisma, uid: loggedInUser } = context
    const status = await resolveTimezoneAndPeeks({ timezone: timezone as string, uid: loggedInUser, prisma })
    if (status === AppLockStatus.LOCKED) return new ApolloError('AppLock: Timezone not yet unlocked')
    const { attachmentType, slogan, uid, fileAttachment } = input

    let hashtags = slogan?.match(/#\w*/gi)
    const reaction = { hot: 0, kisses: 0, hearts: 0 }
    try {
        const cruise = await prisma.cruise.create({
            data: {
                creator: { connect: { uid: uid } },
                slogan,
                attachmentType: attachmentType,
                attachmentUrl: fileAttachment.url,
                attachmentMeta: fileAttachment,
                ...(hashtags && { hashtags }),
                reaction
            }
        })

        return {
            code: '200',
            success: true,
            message: 'Cruise created successfully',
            cruise
        }
    }
    catch {
        return {
            code: '500',
            success: false,
            message: 'Error while creating cruise',
        }
    }

}

export const createChallenge = async (parent: ParentInterface, { input }: { input: CreateChallengeArgs }, context: ContextInterface) => {
    const { headers: { timezone }, prisma, uid: loggedInUser } = context
    const status = await resolveTimezoneAndPeeks({ timezone: timezone as string, uid: loggedInUser, prisma })
    if (status === AppLockStatus.LOCKED) return new ApolloError('AppLock: Timezone not yet unlocked')
    const { attachmentType, challenge, uid, fileAttachment, start, end } = input

    let hashtags = challenge?.match(/#\w*/gi)
    const reaction = { hot: 0, kisses: 0, hearts: 0 }
    try {
        const newChallenge = await prisma.challenge.create({
            data: {
                creator: { connect: { uid: uid } },
                challenge,
                attachmentType: attachmentType,
                attachmentUrl: fileAttachment.url,
                attachmentMeta: fileAttachment,
                ...(hashtags && { hashtags }),
                reaction,
                start,
                end
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
    const { headers: { timezone }, prisma, uid: loggedInUser } = context
    const status = await resolveTimezoneAndPeeks({ timezone: timezone as string, uid: loggedInUser, prisma })
    if (status === AppLockStatus.LOCKED) return new ApolloError('AppLock: Timezone not yet unlocked')
    const { attachmentType, comment, uid, fileAttachment, entityId, entityType } = input

    let hashtags = comment?.match(/#\w*/gi)
    const reaction = { hot: 0, kisses: 0, hearts: 0 }
    try {
        const newComment = await prisma.comment.create({
            data: {
                user: { connect: { uid: uid } },
                comment,
                ...(attachmentType && { attachmentType: attachmentType }),
                ...(fileAttachment && { attachmentUrl: fileAttachment.url, attachmentMeta: fileAttachment }),
                ...(hashtags && { hashtags }),
                reaction,
                entityType,
                entityId,
                ...(entityType === EntityType.CHALLENGE && { challenge: { connect: { id: entityId } } }),
                ...(entityType === EntityType.POST && { post: { connect: { id: entityId } } }),
                ...(entityType === EntityType.CRUISE && { cruise: { connect: { id: entityId } } }),
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
    const { headers: { timezone }, prisma, uid: loggedInUser } = context
    const status = await resolveTimezoneAndPeeks({ timezone: timezone as string, uid: loggedInUser, prisma })
    if (status === AppLockStatus.LOCKED) return new ApolloError('AppLock: Timezone not yet unlocked')
    const { reactionType, entityType, entityId, uid } = input
    let entity
    try {
        if (entityType === EntityType.POST) {
            entity = await prisma.post.findUnique({
                where: {
                    id: entityId
                }
            })
            if (entity && reactionType === ReactionType.HEARTS) {
                if (!entity.hearts.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.post.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            hearts: [...entity.hearts, uid],
                            reaction: { ...reaction, hearts: reaction.hearts + 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction created sucessfully',
                        reaction: post.reaction
                    }
                }
            }
            if (entity && reactionType === ReactionType.KISSES) {
                if (!entity.kisses.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.post.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            kisses: [...entity.kisses, uid],
                            reaction: { ...reaction, kisses: reaction.kisses + 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction created sucessfully',
                        reaction: post.reaction
                    }
                }
            }
            if (entity && reactionType === ReactionType.HOT) {
                if (!entity.hot.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.post.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            hot: [...entity.hot, uid],
                            reaction: { ...reaction, hot: reaction.hot + 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction created sucessfully',
                        reaction: post.reaction
                    }
                }
            }

        }
        if (entityType === EntityType.CRUISE) {
            entity = await prisma.cruise.findUnique({
                where: {
                    id: entityId
                }
            })
            if (entity && reactionType === ReactionType.KISSES) {
                if (!entity.kisses.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.cruise.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            kisses: [...entity.kisses, uid],
                            reaction: { ...reaction, kisses: reaction.kisses + 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction created sucessfully',
                        reaction: post.reaction
                    }
                }
            }
            if (entity && reactionType === ReactionType.HEARTS) {
                if (!entity.hearts.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.cruise.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            hearts: [...entity.hearts, uid],
                            reaction: { ...reaction, hearts: reaction.hearts + 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction created sucessfully',
                        reaction: post.reaction
                    }
                }
            }
            if (entity && reactionType === ReactionType.HOT) {
                if (!entity.hot.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.cruise.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            hot: [...entity.hot, uid],
                            reaction: { ...reaction, hot: reaction.hot + 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction created sucessfully',
                        reaction: post.reaction
                    }
                }
            }
        }
        if (entityType === EntityType.CHALLENGE) {
            entity = await prisma.challenge.findUnique({
                where: {
                    id: entityId
                }
            })
            if (entity && reactionType === ReactionType.KISSES) {
                if (!entity.kisses.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.challenge.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            kisses: [...entity.kisses, uid],
                            reaction: { ...reaction, kisses: reaction.kisses + 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction created sucessfully',
                        reaction: post.reaction
                    }
                }
            }
            if (entity && reactionType === ReactionType.HEARTS) {
                if (!entity.hearts.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.challenge.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            hearts: [...entity.hearts, uid],
                            reaction: { ...reaction, hearts: reaction.hearts + 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction created sucessfully',
                        reaction: post.reaction
                    }
                }
            }
            if (entity && reactionType === ReactionType.HOT) {
                if (!entity.hot.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.challenge.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            hot: [...entity.hot, uid],
                            reaction: { ...reaction, hot: reaction.hot + 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction created sucessfully',
                        reaction: post.reaction
                    }
                }
            }
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
    const { headers: { timezone }, prisma, uid: loggedInUser } = context
    const status = await resolveTimezoneAndPeeks({ timezone: timezone as string, uid: loggedInUser, prisma })
    if (status === AppLockStatus.LOCKED) return new ApolloError('AppLock: Timezone not yet unlocked')
    const { reactionType, entityType, entityId, uid } = input
    let entity
    try {
        if (entityType === EntityType.POST) {
            entity = await prisma.post.findUnique({
                where: {
                    id: entityId
                }
            })
            if (entity && reactionType === ReactionType.HEARTS) {
                if (entity.hearts.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.post.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            hearts: entity.hearts.filter(id => id !== uid),
                            reaction: { ...reaction, hearts: reaction.hearts - 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction removed sucessfully',
                        reaction: post.reaction
                    }
                }
            }
            if (entity && reactionType === ReactionType.KISSES) {
                if (entity.kisses.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.post.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            kisses: entity.kisses.filter(id => id !== uid),
                            reaction: { ...reaction, kisses: reaction.kisses - 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction removed sucessfully',
                        reaction: post.reaction
                    }
                }
            }
            if (entity && reactionType === ReactionType.HOT) {
                if (entity.hot.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.post.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            hot: entity.hot.filter(id => id !== uid),
                            reaction: { ...reaction, hot: reaction.hot - 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction removed sucessfully',
                        reaction: post.reaction
                    }
                }
            }

        }
        if (entityType === EntityType.CRUISE) {
            entity = await prisma.cruise.findUnique({
                where: {
                    id: entityId
                }
            })
            if (entity && reactionType === ReactionType.KISSES) {
                if (entity.kisses.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.cruise.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            kisses: entity.kisses.filter(id => id !== uid),
                            reaction: { ...reaction, kisses: reaction.kisses - 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction removed sucessfully',
                        reaction: post.reaction
                    }
                }
            }
            if (entity && reactionType === ReactionType.HEARTS) {
                if (entity.hearts.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.cruise.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            hearts: entity.hearts.filter(id => id !== uid),
                            reaction: { ...reaction, hearts: reaction.hearts - 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction removed sucessfully',
                        reaction: post.reaction
                    }
                }
            }
            if (entity && reactionType === ReactionType.HOT) {
                if (entity.hot.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.cruise.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            hot: entity.hot.filter(id => id !== uid),
                            reaction: { ...reaction, hot: reaction.hot - 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction removed sucessfully',
                        reaction: post.reaction
                    }
                }
            }
        }
        if (entityType === EntityType.CHALLENGE) {
            entity = await prisma.challenge.findUnique({
                where: {
                    id: entityId
                }
            })
            if (entity && reactionType === ReactionType.KISSES) {
                if (entity.kisses.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.challenge.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            kisses: entity.kisses.filter(id => id !== uid),
                            reaction: { ...reaction, kisses: reaction.kisses - 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction removed sucessfully',
                        reaction: post.reaction
                    }
                }
            }
            if (entity && reactionType === ReactionType.HEARTS) {
                if (entity.hearts.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.challenge.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            hearts: entity.hearts.filter(id => id !== uid),
                            reaction: { ...reaction, hearts: reaction.hearts - 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction removed sucessfully',
                        reaction: post.reaction
                    }
                }
            }
            if (entity && reactionType === ReactionType.HOT) {
                if (entity.hot.includes(uid)) {
                    const reaction = entity.reaction as JsonValue
                    const post = await prisma.challenge.update({
                        where: {
                            id: entity.id
                        },
                        data: {
                            hot: entity.hot.filter(id => id !== uid),
                            reaction: { ...reaction, hot: reaction.hot - 1 }
                        }
                    })
                    return {
                        code: "200",
                        success: true,
                        message: 'Reaction removed sucessfully',
                        reaction: post.reaction
                    }
                }
            }
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
    const { headers: { timezone }, prisma, uid: loggedInUser } = context
    const status = await resolveTimezoneAndPeeks({ timezone: timezone as string, uid: loggedInUser, prisma })
    if (status === AppLockStatus.LOCKED) return new ApolloError('AppLock: Timezone not yet unlocked')
    const { id, entityType, uid } = input
    try {
        if (entityType === EntityType.CRUISE) {
            await prisma.cruise.update({
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
    const { headers: { timezone }, prisma, uid: loggedInUser } = context
    const status = await resolveTimezoneAndPeeks({ timezone: timezone as string, uid: loggedInUser, prisma })
    if (status === AppLockStatus.LOCKED) return new ApolloError('AppLock: Timezone not yet unlocked')
    const { id, entityType, uid } = input
    try {
        if (entityType === EntityType.CRUISE) {
            await prisma.cruise.update({
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
    const { headers: { timezone }, prisma, uid: loggedInUser } = context
    const status = await resolveTimezoneAndPeeks({ timezone: timezone as string, uid: loggedInUser, prisma })
    if (status === AppLockStatus.LOCKED) return new ApolloError('AppLock: Timezone not yet unlocked')
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
    const { headers: { timezone }, prisma, uid: loggedInUser } = context
    const status = await resolveTimezoneAndPeeks({ timezone: timezone as string, uid: loggedInUser, prisma })
    if (status === AppLockStatus.LOCKED) return new ApolloError('AppLock: Timezone not yet unlocked')
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