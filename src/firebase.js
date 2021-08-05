import firebase from 'firebase'

const firebaseapp=firebase.initializeApp({
    apiKey: "AIzaSyC3R_wAY9K4P4SmwFzIsy77X14l_1Wt1lg",
    authDomain: "firechat-c0518.firebaseapp.com",
    projectId: "firechat-c0518",
    storageBucket: "firechat-c0518.appspot.com",
    messagingSenderId: "1085473703570",
    appId: "1:1085473703570:web:f45ef9686533c9f68e084b"
})

const db=firebaseapp.firestore()
const auth=firebase.auth()

export {db,auth}
