import { ContextInterface, ParentInterface } from "unwind-server/types";
import { createPaginationOptions } from "unwind-server/utils/helpers";
import { PaginationInterface } from "./types";

export const creator = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.cruise.findUnique({
        where: {
            id: parent.id
        }
    }).creator()
}

export const comments = async (parent: ParentInterface, args: PaginationInterface<any>, context: ContextInterface) => {
    const { before, filters } = args
    const opts = createPaginationOptions(args)
    const comments = await context.prisma.comment.findMany({
        ...opts,
        where: {
            ...(filters && filters),
            cruiseId: {
                equals : parent.id
            }
        }
    })
    const endCursor = comments[comments.length - 1]?.cursor
    const startCursor = comments[0]?.cursor
    const count = await context.prisma.comment.count({
        ...{...opts, skip: 1, cursor: {cursor: endCursor}},
        where: {
            ...(filters && filters),
            cruiseId:{
                equals: parent.id
            }
        }
    })

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

export const followers = async (parent: ParentInterface, args: PaginationInterface<any>, context: ContextInterface) => {
    const { before, filters } = args
    const opts = createPaginationOptions(args)
    const users = await context.prisma.user.findMany({
        ...opts,
        where: {
            ...(filters && filters),
            cruiseFollowing: {
                some: {
                    id: {equals: parent.id} 
                }
            }
        }
    })
    const endCursor = users[users.length - 1]?.cursor
    const startCursor = users[0]?.cursor
    const count = await context.prisma.user.count({
        ...{...opts, skip: 1, cursor: {cursor: endCursor}},
        where: {
            ...(filters && filters),
            cruiseFollowing: {
                some: {
                    id: {equals: parent.id}
                }
            }
        }
    })

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

export const posts = async (parent: ParentInterface, args: PaginationInterface<any>, context: ContextInterface) => {
    const { before, filters } = args
    const opts = createPaginationOptions(args)
    const posts = await context.prisma.post.findMany({
        ...opts,
        where: {
            ...(filters && filters),
            cruiseId: {
                equals : parent.id
            }
        }
    })
    const endCursor = posts[posts.length - 1]?.cursor
    const startCursor = posts[0]?.cursor
    const count = await context.prisma.post.count({
        ...{...opts, skip: 1, cursor: {cursor: endCursor}},
        where: {
            ...(filters && filters),
            cruiseId:{
                equals: parent.id
            }
        }
    })

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