import { AuthenticationError, UserInputError } from "apollo-server";
import { ContextInterface, ParentInterface, Partial } from "unwind-server/types";
import { CreateChallengeArgs, CreateCommentArgs, CreateCruiseArgs, CreatePostArgs, CreateReactionArgs, CreateUserArgs, EntityType, ReactionType, UpdateUserArgs } from "./types";


export const createUser = async (parent: ParentInterface, { input }: { input: CreateUserArgs }, context: ContextInterface) => {
    const { decodedToken, prisma } = context
    //if(!decodedToken) throw new AuthenticationError('User not authenticated')
    const errors: Partial<CreateUserArgs> = {}
    const { email, lastName, firstName, uid } = input
    if (email.length > 255) errors.email = 'Too many characters'
    if (firstName.length > 255) errors.firstName = 'Too many characters'
    if (lastName.length > 255) errors.lastName = 'Too many characters'
    if (uid.length > 255) errors.uid = 'Too many characters'

    if (Object.keys(errors).length >= 1) throw new UserInputError('Invalid input supplied', errors)

    const user = await prisma.user.create({
        data: {
            firstName,
            lastName,
            email,
            uid
        }
    })
    return user

}

export const updateUser = async (
    parent: ParentInterface,
    { input }: { input: UpdateUserArgs },
    context: ContextInterface) => {
    const { decodedToken, prisma } = context
    if (!decodedToken) throw new AuthenticationError('User not authenticated')
    const errors: Partial<UpdateUserArgs> = {}
    const { lastName, firstName, userName, imgUrl, uid } = input
    if (firstName && firstName.length > 255) errors.firstName = 'Too many characters'
    if (lastName && lastName.length > 255) errors.lastName = 'Too many characters'
    if (userName && userName.length > 255) errors.userName = 'Too many characters'
    if (imgUrl && !imgUrl.startsWith('https://')) errors.userName = 'Incorrect url'

    if (Object.keys(errors).length >= 1) throw new UserInputError('Invalid input supplied', errors)

    const user = await prisma.user.update({
        where: {
            uid
        },
        data: {
            ...(firstName && { firstName }),
            ...(lastName && { lastName }),
            ...(imgUrl && { imgUrl }),
            ...(userName && { userName })
        }
    })
    return user
}

export const createPost = async (parent: ParentInterface, { input }: { input: CreatePostArgs }, context: ContextInterface) => {
    const { prisma, decodedToken } = context
    //if(!decodedToken) throw new AuthenticationError('User not authenticated')
    const errors: { [key: string]: string } = {}
    const { attachmentType, content, uid, location, fileAttachment } = input
    if (location && (!location.lat || !location.long)) errors.location = 'Location is not specified corectly'

    let hashtags = content?.match(/#\w*/gi)
    const reaction = { hot: 0, kisses: 0, hearts: 0 }
    const post = await prisma.post.create({
        data: {
            user: {connect : {uid : uid}},
            attachmentType,
            attachmentUrl: fileAttachment.url,
            attachmentMeta: fileAttachment,
            ...(content && { content }),
            ...(hashtags && { hashtags }),
            reaction
        }
    })
    return post
}

export const createCruise = async (parent: ParentInterface, { input }: { input: CreateCruiseArgs }, context: ContextInterface) => {
    const { prisma, decodedToken } = context
    //if(!decodedToken) throw new AuthenticationError('User not authenticated')
    const errors: { [key: string]: string } = {}
    const { attachmentType, slogan, uid, fileAttachment } = input

    let hashtags = slogan?.match(/#\w*/gi)
    const reaction = { hot: 0, kisses: 0, hearts: 0 }
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

    return cruise
}

export const createChallenge = async (parent: ParentInterface, { input }: { input: CreateChallengeArgs }, context: ContextInterface) => {
    const { prisma, decodedToken } = context
    //if(!decodedToken) throw new AuthenticationError('User not authenticated')
    const errors: { [key: string]: string } = {}
    const { attachmentType, challenge, uid, fileAttachment, start, end } = input

    let hashtags = challenge?.match(/#\w*/gi)
    const reaction = { hot: 0, kisses: 0, hearts: 0 }
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

    return newChallenge
}

export const createComment = async (parent: ParentInterface, { input }: { input: CreateCommentArgs }, context: ContextInterface) => {
    const { prisma, decodedToken } = context
    //if(!decodedToken) throw new AuthenticationError('User not authenticated')
    const { attachmentType, comment, uid, fileAttachment, entityId, entityType } = input

    let hashtags = comment?.match(/#\w*/gi)
    const reaction = { hot: 0, kisses: 0, hearts: 0 }
    const newComment = await prisma.comment.create({
        data: {
            user: { connect: { uid: uid } },
            comment,
            ...(attachmentType && { attachmentType: attachmentType }),
            ...( fileAttachment && {attachmentUrl: fileAttachment.url, attachmentMeta: fileAttachment}),
            ...(hashtags && { hashtags }),
            reaction,
            entityType,
            entityId
        }
    })

    return newComment
}

export const createReaction = async (parent: ParentInterface, { input }: { input: CreateReactionArgs }, context: ContextInterface) => {
    const { prisma, decodedToken } = context
    //if(!decodedToken) throw new AuthenticationError('User not authenticated')
    const { reactionType, entityType, entityId,uid} = input
    let entity
    if(entityType === EntityType.POST) {
        entity =  await prisma.post.findUnique({
            where: {
                id: entityId
            }
        })
        if(entity && reactionType === ReactionType.HEARTS) {
            if(!entity.hearts.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.post.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        hearts: [...entity.hearts, uid],
                        reaction: { ...reaction, hearts: reaction.hearts + 1}
                    }
                })
                return post.reaction
            }
        }
        if(entity && reactionType === ReactionType.KISSES) {
            if(!entity.kisses.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.post.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        kisses: [...entity.kisses, uid],
                        reaction: { ...reaction, kisses: reaction.kisses + 1}
                    }
                })
                return post.reaction
            }
        }
        if(entity && reactionType === ReactionType.HOT) {
            if(!entity.hot.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.post.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        hot: [...entity.hot, uid],
                        reaction: { ...reaction, hot: reaction.hot + 1}
                    }
                })
                return post.reaction
            }
        }
        
    }
    if(entityType === EntityType.CRUISE) {
        entity =  await prisma.cruise.findUnique({
            where: {
                id: entityId
            }
        })
        if(entity && reactionType === ReactionType.KISSES) {
            if(!entity.kisses.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.cruise.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        kisses: [...entity.kisses, uid],
                        reaction: { ...reaction, kisses: reaction.kisses + 1}
                    }
                })
                return post.reaction
            }
        }
        if(entity && reactionType === ReactionType.HEARTS) {
            if(!entity.hearts.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.cruise.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        hearts: [...entity.hearts, uid],
                        reaction: { ...reaction, hearts: reaction.hearts + 1}
                    }
                })
                return post.reaction
            }
        }
        if(entity && reactionType === ReactionType.HOT) {
            if(!entity.hot.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.cruise.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        hot: [...entity.hot, uid],
                        reaction: { ...reaction, hot: reaction.hot + 1}
                    }
                })
                return post.reaction
            }
        }
    }
    if(entityType === EntityType.CHALLENGE) {
        entity =  await prisma.challenge.findUnique({
            where: {
                id: entityId
            }
        })
        if(entity && reactionType === ReactionType.KISSES) {
            if(!entity.kisses.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.challenge.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        kisses: [...entity.kisses, uid],
                        reaction: { ...reaction, kisses: reaction.kisses + 1}
                    }
                })
                return post.reaction
            }
        }
        if(entity && reactionType === ReactionType.HEARTS) {
            if(!entity.hearts.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.challenge.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        hearts: [...entity.hearts, uid],
                        reaction: { ...reaction, hearts: reaction.hearts + 1}
                    }
                })
                return post.reaction
            }
        }
        if(entity && reactionType === ReactionType.HOT) {
            if(!entity.hot.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.challenge.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        hot: [...entity.hot, uid],
                        reaction: { ...reaction, hot: reaction.hot + 1}
                    }
                })
                return post.reaction
            }
        }
    }
    return entity?.reaction
    
}

export const deleteReaction = async (parent: ParentInterface, { input }: { input: CreateReactionArgs }, context: ContextInterface) => {
    const { prisma, decodedToken } = context
    //if(!decodedToken) throw new AuthenticationError('User not authenticated')
    const { reactionType, entityType, entityId,uid} = input
    let entity
    if(entityType === EntityType.POST) {
        entity =  await prisma.post.findUnique({
            where: {
                id: entityId
            }
        })
        if(entity && reactionType === ReactionType.HEARTS) {
            if(entity.hearts.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.post.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        hearts: entity.hearts.filter(id => id !== uid),
                        reaction: { ...reaction, hearts: reaction.hearts - 1}
                    }
                })
                return post.reaction
            }
        }
        if(entity && reactionType === ReactionType.KISSES) {
            if(entity.kisses.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.post.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        kisses: entity.kisses.filter(id => id !== uid),
                        reaction: { ...reaction, kisses: reaction.kisses - 1}
                    }
                })
                return post.reaction
            }
        }
        if(entity && reactionType === ReactionType.HOT) {
            if(entity.hot.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.post.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        hot: entity.hot.filter(id => id !== uid),
                        reaction: { ...reaction, hot: reaction.hot - 1}
                    }
                })
                return post.reaction
            }
        }
        
    }
    if(entityType === EntityType.CRUISE) {
        entity =  await prisma.cruise.findUnique({
            where: {
                id: entityId
            }
        })
        if(entity && reactionType === ReactionType.KISSES) {
            if(entity.kisses.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.cruise.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        kisses: entity.kisses.filter(id => id !== uid),
                        reaction: { ...reaction, kisses: reaction.kisses - 1}
                    }
                })
                return post.reaction
            }
        }
        if(entity && reactionType === ReactionType.HEARTS) {
            if(entity.hearts.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.cruise.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        hearts: entity.hearts.filter(id => id !== uid),
                        reaction: { ...reaction, hearts: reaction.hearts - 1}
                    }
                })
                return post.reaction
            }
        }
        if(entity && reactionType === ReactionType.HOT) {
            if(entity.hot.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.cruise.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        hot: entity.hot.filter(id => id !== uid),
                        reaction: { ...reaction, hot: reaction.hot - 1}
                    }
                })
                return post.reaction
            }
        }
    }
    if(entityType === EntityType.CHALLENGE) {
        entity =  await prisma.challenge.findUnique({
            where: {
                id: entityId
            }
        })
        if(entity && reactionType === ReactionType.KISSES) {
            if(entity.kisses.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.challenge.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        kisses: entity.kisses.filter(id => id !== uid),
                        reaction: { ...reaction, kisses: reaction.kisses - 1}
                    }
                })
                return post.reaction
            }
        }
        if(entity && reactionType === ReactionType.HEARTS) {
            if(entity.hearts.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.challenge.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        hearts: entity.hearts.filter(id => id !== uid),
                        reaction: { ...reaction, hearts: reaction.hearts - 1}
                    }
                })
                return post.reaction
            }
        }
        if(entity && reactionType === ReactionType.HOT) {
            if(entity.hot.includes(uid)) {
                const reaction = entity.reaction as JsonValue
                const post = await prisma.challenge.update({
                    where:{
                        id: entity.id
                    },
                    data: {
                        hot: entity.hot.filter(id => id !== uid),
                        reaction: { ...reaction, hot: reaction.hot - 1}
                    }
                })
                return post.reaction
            }
        }
    }
    return entity?.reaction
}