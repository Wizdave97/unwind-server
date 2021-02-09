import { ContextInterface, ParentInterface } from "unwind-server/types";

export const user = async (parent: ParentInterface, args:any, context: ContextInterface) => {
    return await context.prisma.post
    .findUnique({
        where: {
            id: parent.id
        }
    }).user()
}

export const comments = async (parent: ParentInterface, args:any, context: ContextInterface) => {
    return await context.prisma.post
    .findUnique({
        where: {
            id: parent.id
        }
    }).comments()
}