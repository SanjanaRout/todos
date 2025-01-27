import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQZAaBx1m_wW5dAFx8F6cv-gSz-3EHtwk",
    authDomain: "todo-s-814b1.firebaseapp.com",
    projectId: "todo-s-814b1",
    storageBucket: "todo-s-814b1.firebasestorage.app",
    messagingSenderId: "707803845330",
    appId: "1:707803845330:web:326a7f7b124b302c98d30b"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const db = getFirestore(app);
