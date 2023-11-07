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
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
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
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      //issue token
      if (currentUser) {
        axios
          .post("http://localhost:5000/auth/jwt", loggedUser, {
            withCredentials: true,
          })
          .then()
          .catch((error) => console.log(error));
      }
      //remove token
      else {
        axios
          .post("http://localhost:5000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));
      }
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
