import firebase from 'firebase/compat/app'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import 'firebase/compat/firestore'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
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
export const signInWithGoogle = () => signInWithPopup(auth, provider)
export default db
