import { ParentInterface, ContextInterface } from "unwind-server/types";

export const cruises = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.user.findUnique({
        where: {
            userId: parent.userId
        }
    }).cruises()
}

export const challenges = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.user.findUnique({
        where: {
            userId: parent.userId
        }
    }).challenges()
}

export const challengeFollowing = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.user.findUnique({
        where: {
            userId: parent.userId
        }
    }).challengeFollowing()
}

export const cruiseFollowing = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.user.findUnique({
        where: {
            userId: parent.userId
        }
    }).cruiseFollowing()
}

export const followers = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.user.findUnique({
        where: {
            userId: parent.userId
        }
    }).followers()
}

export const following = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.user.findUnique({
        where: {
            userId: parent.userId
        }
    }).following()
}

export const posts = async (parent: ParentInterface, args: any, context: ContextInterface) => {
    return await context.prisma.user.findUnique({
        where: {
            userId: parent.userId
        }
    }).posts()
}

