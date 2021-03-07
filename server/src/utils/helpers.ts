import { PaginationInterface } from "unwind-server/resolvers/types";
import express from 'express'
import { verifyToken } from "unwind-server/auth";
import { PrismaClient } from "unwind-server/prisma/src/generated/client";
import { parse } from 'graphql'
import { ApolloError } from "apollo-server-express";


export const createPaginationOptions = (args: PaginationInterface<any>) => {
    const { first, last, after, before } = args
    let opts: any = { take: 25 }
    if (after && !before) {
        opts.take = first || 25
        opts.skip = 1
        opts.cursor = { cursor: after }
    }
    if (before && !after) {
        opts.take = last ? -last : 25
        opts.skip = 1
        opts.cursor = { cursor: before }
    }
    if (first && !after) opts.take = first
    if (last && !before) opts.take = -last
    return opts
}



export const checkAuth = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req.headers.authorization || ''
    const decodedToken = await verifyToken(token)
    if (decodedToken) {
        // @ts-ignore
        req.uid = decodedToken.uid
        next()
    }
    else {
        res.status(401)
        res.send('Unauthorized User')
        res.end()
    }
}

export enum AppLockStatus {
    LOCKED = 'LOCKED',
    UNLOCKED = 'UNLOCKED'
}

const minutesPassedBeforeSixPM = 18 * 60
const minutesPassedBeforeTwoAm = 2 * 60
export const resolveTimezoneAndPeeks = async ({ uid, prisma, timezone }: { uid: string, prisma: PrismaClient, timezone: string }): Promise<AppLockStatus> => {
    //Client timezone string delimited by :
    //For example +8:30:00

    if(!timezone || !timezone?.match(/\+*\-*\d+\:\d+\:\d+/)) throw new ApolloError('Timezone Error')
    const serverDate = new Date()
    const day = serverDate.getUTCDay()
    const time = serverDate.getUTCMinutes() + (serverDate.getUTCHours() * 60)
    const clientTimezoneArray = timezone?.split(':')
    const clientHourOffset = Number(clientTimezoneArray[0])
    const clientMinuteOffset = clientHourOffset < 0 ? (clientHourOffset * 60) - Number(clientTimezoneArray[1])
        : (clientHourOffset * 60) + Number(clientTimezoneArray[1])
    const rawMinuteOffset = time + clientMinuteOffset
    let minutesPassedFromUTC
    let clientDay
    if(rawMinuteOffset > (24 * 60)) {
        clientDay = day === 6 ? 0 : day + 1
        minutesPassedFromUTC = clientMinuteOffset - ((24 * 60) - time)
    }
    else if(rawMinuteOffset < (24 * 60) && rawMinuteOffset > 0) {
        clientDay = day
        minutesPassedFromUTC = rawMinuteOffset
    }
    else {
        clientDay = day === 0 ? 6 : day - 1
        minutesPassedFromUTC = (24 * 60) + rawMinuteOffset
    }
    if(clientDay === 0 || clientDay === 5 || clientDay === 6) {
        return AppLockStatus.UNLOCKED
    }
    else {
        if((minutesPassedFromUTC < minutesPassedBeforeTwoAm) || (minutesPassedFromUTC > minutesPassedBeforeSixPM)) return AppLockStatus.UNLOCKED
        if((minutesPassedFromUTC > minutesPassedBeforeTwoAm) || (minutesPassedFromUTC < minutesPassedBeforeSixPM)) {
            const peek = await prisma.peek.findMany({
                where: {
                    userId: uid
                }
            })
            if(peek && peek[0] && peek[0].active && (peek[0].expiresUTC as unknown as number) > time) return AppLockStatus.UNLOCKED
            return AppLockStatus.LOCKED
        }
        return AppLockStatus.LOCKED
    }
}

export const getNextUTCHours = () => {
    const serverDate = new Date()
    const utcHours = serverDate.getUTCHours()
    return (utcHours * 60) + 60
}
