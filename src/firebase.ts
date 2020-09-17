import * as firebase from 'firebase'

const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyDH68eCZgE89EUIk1UU8VF8NB9CRCay0Sw',
    authDomain: 'justjoinitclone.firebaseapp.com',
    databaseURL: 'https://justjoinitclone.firebaseio.com',
    projectId: 'justjoinitclone',
    storageBucket: 'justjoinitclone.appspot.com',
    messagingSenderId: '492983205269',
    appId: '1:492983205269:web:5549cadd8ffdc9a9418a9c',
}

firebase.initializeApp(FIREBASE_CONFIG)
// @ts-ignore
const database = firebase.database()
export default database
