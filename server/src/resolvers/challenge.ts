import { ParentInterface, ContextInterface } from "unwind-server/types"

export const creator = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.challenge.findUnique({
        where: {
            id: parent.id
        }
    }).creator()
}

export const comments = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.challenge.findUnique({
        where: {
            id: parent.id
        }
    }).comments()
}

export const followers = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.challenge.findUnique({
        where: {
            id: parent.id
        }
    }).followers()
}