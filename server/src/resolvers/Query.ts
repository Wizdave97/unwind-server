import { ApolloError } from "apollo-server-express"
import { ContextInterface, ParentInterface } from "unwind-server/types"
import { AppLockStatus, createPaginationOptions, resolveTimezoneAndPeeks } from "unwind-server/utils/helpers"
import { ChallengeInputFilter, CommentInputFilter, PaginationInterface, PostInputFilter, UserInputFilter } from "./types"

export const posts = async (parent: ParentInterface, args: PaginationInterface<PostInputFilter>, context: ContextInterface) => {
    
    const { before, filters } = args
    const opts = createPaginationOptions(args)
    const posts = await context.prisma.post.findMany({
        ...opts,
        where: {
            ...(filters && filters)
        }
    })
    const endCursor = posts[posts.length - 1]?.cursor
    const startCursor = posts[0]?.cursor
    const count = posts?.length > 0 ? await context.prisma.post.count({
        ...{...opts, skip: 1, cursor: {cursor: endCursor}},
        where: {
            ...(filters && filters)
        }
    }) : 0
    const edges = posts.map((post) => ({
        cursor: post?.cursor,
        node: post
    }))

    return {
        pageInfo: {
            startCursor,
            endCursor,
            hasNextPage: count > 0 ? true :  false,
            hasPreviousPage: before ? count > 0: false
        },
        edges
    }
}


export const comments = async (parent: ParentInterface, args: PaginationInterface<CommentInputFilter>, context: ContextInterface) => {
    
    const { before, filters } = args
    const opts = createPaginationOptions(args)
    const comments = await context.prisma.comment.findMany({
        ...opts,
        where: {
            ...(filters && filters)
        }
    })
    const endCursor = comments[comments.length - 1]?.cursor
    const startCursor = comments[0]?.cursor
    const count = comments?.length > 0 ? await context.prisma.comment.count({
        ...{...opts, skip: 1, cursor: {cursor: endCursor}},
        where: {
            ...(filters && filters)
        }
    }) : 0

    const edges = comments.map((comment) => ({
        cursor: comment?.cursor,
        node: comment
    }))

    return {
        pageInfo: {
            startCursor,
            endCursor,
            hasNextPage: count > 0 ? true :  false,
            hasPreviousPage: before ? count > 0: false
        },
        edges
    }
}

export const challenges = async (parent: ParentInterface, args: PaginationInterface<ChallengeInputFilter>, context: ContextInterface) => {
    
    const { before, filters } = args
    const opts = createPaginationOptions(args)
    const challenges = await context.prisma.challenge.findMany({
        ...opts,
        where: {
            ...(filters && filters)
        }
    })
    const endCursor = challenges[challenges.length - 1]?.cursor
    const startCursor = challenges[0]?.cursor
    const count = challenges?.length > 0 ? await context.prisma.challenge.count({
        ...{...opts, skip: 1, cursor: {cursor: endCursor}},
        where: {
            ...(filters && filters)
        }
    }) : 0

    const edges = challenges.map((challenge) => ({
        cursor: challenge?.cursor,
        node: challenge
    }))

    return {
        pageInfo: {
            startCursor,
            endCursor,
            hasNextPage: count > 0 ? true :  false,
            hasPreviousPage: before ? count > 0: false
        },
        edges
    }
}

export const users = async (parent: ParentInterface, args: PaginationInterface<UserInputFilter>, context: ContextInterface) => {
    
    const { before, filters } = args
    const opts = createPaginationOptions(args)
    const users = await context.prisma.user.findMany({
        ...opts,
        where: {
            ...(filters && filters)
        }
    })
    const endCursor = users[users.length - 1]?.cursor
    const startCursor = users[0]?.cursor
    const count = users?.length > 0 ? await context.prisma.user.count({
        ...{...opts, skip: 1, cursor: {cursor: endCursor}},
        where: {
            ...(filters && filters)
        }
    }) : 0
    const edges = users.map((user) => ({
        cursor: user?.cursor,
        node: user
    }))

    return {
        pageInfo: {
            startCursor,
            endCursor,
            hasNextPage: count > 0 ? true :  false,
            hasPreviousPage: before ? count > 0: false
        },
        edges
    }
}

export const user = async (parent: ParentInterface, args: { id: string}, context: ContextInterface) => {
    const {  prisma  } =  context
    
    return await prisma.user.findUnique({
        where: {
            uid: args.id
        }
    })
}

export const post = async (parent: ParentInterface, { id }: { id: number}, context: ContextInterface) => {
    const {  prisma  } =  context
    
    return await prisma.post.findUnique({
        where: {
            id
        }
    })
}


export const challenge = async (parent: ParentInterface, { id }: { id: number}, context: ContextInterface) => {
    const {  prisma  } =  context
    
    return await prisma.challenge.findUnique({
        where: {
            id
        }
    })
}

export const fetchAppLockStatus = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    const { headers: { timezone }, prisma, uid } =  context
    const status = await resolveTimezoneAndPeeks({ timezone: timezone as string, uid, prisma})
    return { status }
}