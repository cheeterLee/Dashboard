import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAKuqwv2iMcUWFYoyvfKh5JY1vkyhFio7w",
    authDomain: "cheeter-s-dashboard.firebaseapp.com",
    projectId: "cheeter-s-dashboard",
    storageBucket: "cheeter-s-dashboard.appspot.com",
    messagingSenderId: "408594015282",
    appId: "1:408594015282:web:9cc5244ddb0b007833082b"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFireStore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFireStore, projectAuth, projectStorage, timestamp }