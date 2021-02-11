import { ApolloError, AuthenticationError, UserInputError } from "apollo-server";
import { ContextInterface, ParentInterface, Partial } from "unwind-server/types";
import { AttachmentType, CreateChallengeArgs, CreateCruiseArgs, CreatePostArgs, CreateUserArgs, UpdateUserArgs } from "./types";


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
    if(!decodedToken) throw new AuthenticationError('User not authenticated')
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

export const createPost = async (parent: ParentInterface, { input }: {input: CreatePostArgs}, context: ContextInterface) => {
    const { prisma, decodedToken } = context
    if(!decodedToken) throw new AuthenticationError('User not authenticated')
    const errors: {[key: string]: string} = {}
    const { attachmentType, content, uid, location, fileAttachment} = input
    if(location && (!location.lat || !location.long)) errors.location = 'Location is not specified corectly'
    
    const user = await prisma.user.findUnique({
        where: {
            uid
        }
    })
    if(!user) throw new ApolloError('Database Error: Could not find user', '500')
    let hashtags = content?.match(/#\w*/gi)
    const post = await prisma.post.create({
        data:{
            user: { connect : { userId : user?.userId! }},
            attachmentType,
            attachmentUrl: fileAttachment.url,
            attachmentMeta: fileAttachment,
            ...(content && { content }),
            ...(hashtags && { hashtags })
        }
    })
    return post
}

export const createCruise = async (parent: ParentInterface, { input }: {input: CreateCruiseArgs}, context: ContextInterface) => {
    const { prisma, decodedToken } = context
    if(!decodedToken) throw new AuthenticationError('User not authenticated')
    const errors: {[key: string]: string} = {}
    const { attachmentType, slogan, uid, fileAttachment} = input

    const user = await prisma.user.findUnique({
        where: {
            uid
        }
    })
    if(!user) throw new ApolloError('Database Error: Could not find user', '500')
    let hashtags = slogan?.match(/#\w*/gi)

    const cruise =  await prisma.cruise.create({
        data: {
            creator: {connect: {userId: user?.userId!}},
            slogan,
            attachmentType: attachmentType,
            attachmentUrl: fileAttachment.url,
            attachmentMeta: fileAttachment,
            ...(hashtags && { hashtags })
        }
    })

    return cruise
}

export const createChallenge = async (parent: ParentInterface, { input }: {input: CreateChallengeArgs}, context: ContextInterface) => {
    const { prisma, decodedToken } = context
    if(!decodedToken) throw new AuthenticationError('User not authenticated')
    const errors: {[key: string]: string} = {}
    const { attachmentType, challenge, uid, fileAttachment,start, end} = input

    const user = await prisma.user.findUnique({
        where: {
            uid
        }
    })
    if(!user) throw new ApolloError('Database Error: Could not find user', '500')
    let hashtags = challenge?.match(/#\w*/gi)

    const newChallenge =  await prisma.challenge.create({
        data: {
            creator: {connect: {userId: user?.userId!}},
            challenge,
            attachmentType: attachmentType,
            attachmentUrl: fileAttachment.url,
            attachmentMeta: fileAttachment,
            ...(hashtags && { hashtags }),
            start,
            end
        }
    })

    return newChallenge
}