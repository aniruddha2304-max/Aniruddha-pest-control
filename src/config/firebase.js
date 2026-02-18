import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { addDoc, collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: "aniruddha-pest-control",
  storageBucket: "aniruddha-pest-control.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
  databaseURL: import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_RULE
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const firestore = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

// Auth Methods
export const signupWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signinWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export const loginWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Database Methods
export const addUser = (data) => {
  return addDoc(collection(firestore, "users"), { data });
};

// Custom Hook - Use this everywhere
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe(); // Cleanup
  }, []);

  return { user, loading };
};


export const getUserData = async (uid)=>{
  const ref = doc(firestore, "users", uid);
  // const data = await getDoc(ref);
  // if (data.exists()) {
  //   // .exists() is a method in v9
  //   return data.data();
  // } else {
  //   // docSnap.data() will be undefined here
  //   console.log("No such document found for UID:", uid);
  //   return null;
  // }
  return getDoc(ref);
}