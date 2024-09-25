import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA1uFV5agOp-9iPvPHuUjdL0Xwr7XuifqM',
  authDomain: 'desafio-firebase-40964.firebaseapp.com',
  projectId: 'desafio-firebase-40964',
  storageBucket: 'desafio-firebase-40964.appspot.com',
  messagingSenderId: '4814670335',
  appId: '1:4814670335:web:52f1621da94151baabbfca'
}

const app = initializeApp(firebaseConfig)
const $db = getFirestore(app)

export { app, $db }
