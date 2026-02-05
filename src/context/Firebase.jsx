import { useAuth } from "../config/firebase";
import { signupWithEmailAndPassword, signinWithGoogle, loginWithEmailAndPassword, addUser } from "../config/firebase";
import { FirebaseContext } from "./FirebaseContext";

export const FirebaseProvider = ({ children }) => {
  const { user, loading } = useAuth();

  return (
    <FirebaseContext.Provider value={{ signupWithEmailAndPassword, signinWithGoogle, loginWithEmailAndPassword, addUser }}>
      {children}
    </FirebaseContext.Provider>
  );
};