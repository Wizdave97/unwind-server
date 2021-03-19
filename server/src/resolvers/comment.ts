import { ParentInterface, ContextInterface } from "unwind-server/types"

export const user = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.comment.findUnique({
        where: {
            id: parent.id
        }
    }).user()
}

export const post = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.comment.findUnique({
        where: {
            id: parent.id
        }
    }).post()
}


export const challenge = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.comment.findUnique({
        where: {
            id: parent.id
        }
    }).challenge()
}