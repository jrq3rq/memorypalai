import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARCVsW0N89K_RSLkGXVd_1Wl0FuK3MRxc",
  authDomain: "familiai.firebaseapp.com",
  projectId: "familiai",
  storageBucket: "familiai.appspot.com",
  messagingSenderId: "239186273450",
  appId: "1:239186273450:web:bebe4966f366cff5f25cd3",
  measurementId: "G-9VZR1DDFXB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// after enabling google auth on firebase
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
