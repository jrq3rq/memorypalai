import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6ptKiSZPTUSyyXlE6VeQ37uEs43k2GPw",
  authDomain: "react-bootstrap-blog-80c6a.firebaseapp.com",
  databaseURL: "https://react-bootstrap-blog-80c6a.firebaseio.com",
  projectId: "react-bootstrap-blog-80c6a",
  storageBucket: "react-bootstrap-blog-80c6a.appspot.com",
  messagingSenderId: "1075480623161",
  appId: "1:1075480623161:web:868f5b322031dd8bd7b5e8",
  measurementId: "G-2TS6YDLM4M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// after enabling google auth on firebase
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
