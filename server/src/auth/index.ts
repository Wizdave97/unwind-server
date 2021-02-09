import admin from 'firebase-admin'

const  serviceAccount = require("../../serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "ecommerce-bot-e6961.appspot.com"
});

export const verifyToken = async (idToken: string) => {
    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken)
        if(decodedToken.uid) return decodedToken
        return null
    }
     catch(err) {
        return null
     }
}