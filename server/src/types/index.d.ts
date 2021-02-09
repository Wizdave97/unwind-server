import { PrismaClient } from "unwind-server/prisma/src/generated/client";

export type ContextInterface = {
    prisma: PrismaClient,
    decodedToken:  {[key: string]: any} | null
}

export type ParentInterface = {
    [key: string]: any
}

export type Partial<T> = {
    [P in keyof T]?: T[P];
}