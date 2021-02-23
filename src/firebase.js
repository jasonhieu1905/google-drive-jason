import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDDj_8x3kQsipyfW2Ow7SuE7CMtuNrVVPM",
  authDomain: "drive-authentication-c078d.firebaseapp.com",
  databaseURL: "https://drive-authentication-c078d-default-rtdb.firebaseio.com",
  projectId: "drive-authentication-c078d",
  storageBucket: "drive-authentication-c078d.appspot.com",
  messagingSenderId: "540640725996",
  appId: "1:540640725996:web:18b52404abccfe45d5cec9"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = app.storage()

export const auth = app.auth()
export default app