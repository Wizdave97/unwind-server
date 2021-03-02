import { ContextInterface, ParentInterface } from "unwind-server/types";
import { createPaginationOptions } from "unwind-server/utils/helpers";
import { PaginationInterface } from "./types";


export const user = async (parent: ParentInterface, args:any, context: ContextInterface) => {
    return await context.prisma.post
    .findUnique({
        where: {
            id: parent.id
        }
    }).user()
}

export const comments = async (parent: ParentInterface, args:PaginationInterface<any>, context: ContextInterface) => {
    const { before, filters } = args
    const opts = createPaginationOptions(args)
    const comments = await context.prisma.comment.findMany({
        ...opts,
        where: {
            ...(filters && filters),
            postId: {
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
            postId:{
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