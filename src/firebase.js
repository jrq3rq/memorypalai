import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY-HowiuB4ZBgWVszJSoHcsHpTaqa5Hsw",
  authDomain: "memorypalai-beta.firebaseapp.com",
  projectId: "memorypalai-beta",
  storageBucket: "memorypalai-beta.appspot.com",
  messagingSenderId: "833711655364",
  appId: "1:833711655364:web:e78b119a1de8fbbe8bfc91",
  measurementId: "G-6CCT4P10EQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// after enabling google auth on firebase
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
