import { useState } from "react";
import { getUserData } from "../config/firebase";
import { signupWithEmailAndPassword, signinWithGoogle, loginWithEmailAndPassword, addUser } from "../config/firebase";
import { FirebaseContext } from "./FirebaseContext";

export const FirebaseProvider = ({ children }) => {
const [userId, setUserId] = useState(null);
  return (
    <FirebaseContext.Provider value={{ signupWithEmailAndPassword, signinWithGoogle, loginWithEmailAndPassword, addUser, getUserData, userId, setUserId }}>
      {children}
    </FirebaseContext.Provider>
  );
};