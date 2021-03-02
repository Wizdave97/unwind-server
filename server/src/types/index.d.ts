import { PrismaClient } from "unwind-server/prisma/src/generated/client";
import express from 'express'

export interface ContextInterface extends  express.Request {
    prisma: PrismaClient,
    uid: string
}

export type ParentInterface = {
    [key: string]: any
}

export type Partial<T> = {
    [P in keyof T]?: T[P];
}