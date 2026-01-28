import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";

export const FirebaseContext = createContext();

// custom context
export const useFirebase = () => useContext(FirebaseContext);


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
const db = getDatabase(app);
const googleProvider = new GoogleAuthProvider();


export const FirebaseProvider = ({ children }) => {

  const signupWithEmailAndPassword = ((email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  })

  const signinWithGoogle = ()=>{
    return signInWithPopup(auth, googleProvider);
  }

  const loginWithEmailAndPassword = (email, password)=> {
    return signInWithEmailAndPassword(auth, email, password);
  }
  const addUser = ((key, data) =>{
    set(ref(db, key), data);
  });

  return (
    <FirebaseContext.Provider value={{signupWithEmailAndPassword, addUser, signinWithGoogle, loginWithEmailAndPassword}}>
      {children}
    </FirebaseContext.Provider>
  )
}

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