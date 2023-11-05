import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // sign up with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign up with google
  const googleProvider = new GoogleAuthProvider();
  const signWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //update user
  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //login in with email and password
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //logout user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  //   on auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    logInUser,
    signWithGoogle,
    logOutUser,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
