import 'module-alias/register';
import { PrismaClient } from 'unwind-feed-server/prisma/src/generated/client'
import express from 'express'
import cors from 'cors'
import http from 'http'
import { Server, Socket } from 'socket.io'
import redis from 'redis'
import { onAuth } from 'unwind-feed-server/auth'
import { promisify } from 'util'
import socketState from 'unwind-feed-server/socketState'
import { initWorker } from 'unwind-feed-server/worker'
import { REDIS_EVENTS, SOCKET_EVENTS } from './events';



const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT as  string),
    retry_strategy: () => 1000
})

redisClient.on('error', (error) => {
    console.error(error);
})

redisClient.on('connect', () =>{
    console.log('Redis Connected')
})

const subscriber = redisClient.duplicate()

const setAsync = promisify(redisClient.set).bind(redisClient)

const  prisma = new PrismaClient()

const app = express()
app.use(cors())

const httpServer  = http.createServer(app)
const io = new Server(httpServer, {
    path: '/'
})

io.use(onAuth)
io.on('connection', (socket: Socket) => {
    socketState.add(socket.handshake.auth.decodedToken.uid, socket)
    setAsync(socket.handshake.auth.decodedToken.uid, '')
    socket.on('disconnect', () => {
        socketState.remove(socket.handshake.auth.decodedToken.uid, socket)
    })
    socket.on(SOCKET_EVENTS.update_cursor, (msg) => {
        const { postCursor, challengeCursor, userId } = msg
        redisClient.set(userId, [postCursor, challengeCursor].join(','))
    })
})

httpServer.listen(3000).on('listening', () => {
    console.log('listenig on port: 3000')
    initWorker(prisma, redisClient)
})

subscriber.on('message', (channel, message) => {
    if(channel === REDIS_EVENTS.feed) {
        const parsedMessage = JSON.parse(message)
        const userId = parsedMessage.userId
        socketState.emit({id: userId, event: SOCKET_EVENTS.data, args: parsedMessage})
    }
})
subscriber.subscribe(REDIS_EVENTS.feed)