import { ParentInterface, ContextInterface } from "unwind-server/types";
import { createPaginationOptions } from "unwind-server/utils/helpers";
import { PaginationInterface } from "./types";

export const cruises = async (parent: ParentInterface, args: PaginationInterface<any>, context: ContextInterface) => {
    const { before, filters } = args
    const opts = createPaginationOptions(args)

    const cruises = await context.prisma.cruise.findMany({
        ...opts,
        where: {
            ...(filters && filters),
            creatorId: {equals: parent.uid}
        }
    })
    const endCursor = cruises[cruises.length - 1]?.cursor
    const startCursor = cruises[0]?.cursor
    const count = await context.prisma.cruise.count({
        ...{...opts, skip: 1, cursor: {cursor: endCursor}},
        where: {
            ...(filters && filters),
            creatorId: {equals: parent.uid}
        }
    })
    const edges = cruises.map((cruise) => ({
        cursor: cruise?.cursor,
        node: cruise
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

export const challenges = async (parent: ParentInterface, args: PaginationInterface<any>, context: ContextInterface) => {
    const { before, filters } = args
    const opts = createPaginationOptions(args)
    const challenges = await context.prisma.challenge.findMany({
        ...opts,
        where: {
            ...(filters && filters),
            creatorId: {equals: parent.uid}
        }
    })
    const endCursor = challenges[challenges.length - 1]?.cursor
    const startCursor = challenges[0]?.cursor
    const count = await context.prisma.challenge.count({
        ...{...opts, skip: 1, cursor: {cursor: endCursor}},
        where: {
            ...(filters && filters),
            creatorId: {equals: parent.uid}
        }
    })

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

export const challengeFollowing = async (parent: ParentInterface, args: PaginationInterface<any>, context: ContextInterface) => {
    const { before, filters } = args
    const opts = createPaginationOptions(args)
    const challenges = await context.prisma.challenge.findMany({
        ...opts,
        where: {
            ...(filters && filters),
            followers: {
                some: {
                    uid: { equals: parent.uid }
                }
            }
        }
    })
    const endCursor = challenges[challenges.length - 1]?.cursor
    const startCursor = challenges[0]?.cursor
    const count = await context.prisma.challenge.count({
        ...{...opts, skip: 1, cursor: {cursor: endCursor}},
        where: {
            ...(filters && filters),
            followers: {
                some: {
                    uid: { equals: parent.uid }
                }
            }
        }
    })

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

export const cruiseFollowing = async (parent: ParentInterface, args: PaginationInterface<any>, context: ContextInterface) => {
    const { before, filters } = args
    const opts = createPaginationOptions(args)
    const cruises = await context.prisma.cruise.findMany({
        ...opts,
        where: {
            ...(filters && filters),
            followers: {
                some: {
                    uid: { equals: parent.uid }
                }
            }
        }
    })
    const endCursor = cruises[cruises.length - 1]?.cursor
    const startCursor = cruises[0]?.cursor
    const count = await context.prisma.cruise.count({
        ...{...opts, skip: 1, cursor: {cursor: endCursor}},
        where: {
            ...(filters && filters),
            followers: {
                some: {
                    uid: { equals: parent.uid }
                }
            }
        }
    })
    const edges = cruises.map((cruise) => ({
        cursor: cruise?.cursor,
        node: cruise
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
            following: {
                some: {
                    uid: { equals: parent.uid }
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
            following: {
                some: {
                    uid: { equals: parent.uid }
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

export const following = async (parent: ParentInterface, args: PaginationInterface<any>, context: ContextInterface) => {
    const { before, filters } = args
    const opts = createPaginationOptions(args)
    const users = await context.prisma.user.findMany({
        ...opts,
        where: {
            ...(filters && filters),
            followers: {
                some: {
                    uid: { equals: parent.uid }
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
            followers: {
                some: {
                    uid: { equals: parent.uid }
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
            userId: {equals: parent.uid}
        }
    })
    const endCursor = posts[posts.length - 1]?.cursor
    const startCursor = posts[0]?.cursor
    const count = await context.prisma.post.count({
        ...{...opts, skip: 1, cursor: {cursor: endCursor}},
        where: {
            ...(filters && filters),
            userId: {equals: parent.uid}
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

