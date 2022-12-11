import firebase from 'firebase/compat/app'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getAuth,
} from 'firebase/auth'
import 'firebase/compat/firestore'
import { getRedirectResult } from 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDRW40r_y82R6oxI1So1pHHPsu0BzhHVW8',
  authDomain: 'learning-firebase-b4bed.firebaseapp.com',
  projectId: 'learning-firebase-b4bed',
  storageBucket: 'learning-firebase-b4bed.appspot.com',
  messagingSenderId: '355460846354',
  appId: '1:355460846354:web:a5472948c25fcaa9b819cb',
  measurementId: 'G-36FCK1PPRV',
}

export const createUserProfileDocument = async (userAuth, additionnalData) => {
  if (!userAuth) return

  const userRef = db.doc(`Store/${userAuth.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const createdAt = new Date()
    db.collection('Store')
      .doc(userAuth.uid)
      .set({
        name: userAuth.displayName,
        email: userAuth.email,
        uid: userAuth.uid,
        createdAt: createdAt,
        ...additionnalData,
      })
  }
}

var firebaseApp = firebase.initializeApp(config)
export const auth = getAuth(firebaseApp)
var db = firebaseApp.firestore()
const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => signInWithRedirect(auth, provider)
export default db
