// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7z8TTS8D5IgYh01_pJ-E8mezvuGEd4h8",
  authDomain: "netflixclone-bca67.firebaseapp.com",
  projectId: "netflixclone-bca67",
  storageBucket: "netflixclone-bca67.appspot.com",
  messagingSenderId: "218857612117",
  appId: "1:218857612117:web:5cc8d505587252e7d985dc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
