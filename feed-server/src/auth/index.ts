import admin from 'firebase-admin'
import { Socket } from 'socket.io';

const  serviceAccount = require("../../serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "ecommerce-bot-e6961.appspot.com"
});

const verifyToken = async (idToken: string) => {
    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken)
        if(decodedToken.uid) return decodedToken
        return null
    }
     catch(err) {
        return null
     }
}

export const onAuth = async (socket: Socket, next: any) => {
    // if(!socket.handshake.auth.token) next(new Error('Invalid auth token'))
    // else {
    //     const decodedToken = await verifyToken(socket.handshake.auth.token)
    //     if(!decodedToken) next(new Error('Invalid auth token'))
    //     socket.handshake.auth.decodedToken = decodedToken
    //     next()
    // }

    socket.handshake.auth.decodedToken = {
        uid: 'melindamay'
    }
    next()
}