// for backend
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBnLVGda08gABM7Jrg7RNNXmJUoxevoG6g",
  authDomain: "clone-ab122.firebaseapp.com",
  projectId: "clone-ab122",
  storageBucket: "clone-ab122.appspot.com",
  messagingSenderId: "420122558421",
  appId: "1:420122558421:web:f04e27cf588304627bc75c",
  measurementId: "G-8H0QREBYS4"
};

// for backend
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };
