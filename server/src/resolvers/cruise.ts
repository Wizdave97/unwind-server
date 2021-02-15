import { ContextInterface, ParentInterface } from "unwind-server/types";

export const creator = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.cruise.findUnique({
        where: {
            id: parent.id
        }
    }).creator()
}

export const comments = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.cruise.findUnique({
        where: {
            id: parent.id
        }
    }).comments()
}

export const followers = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.cruise.findUnique({
        where: {
            id: parent.id
        }
    }).followers()
}

export const posts = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.cruise.findUnique({
        where: {
            id: parent.id
        }
    }).posts()
}