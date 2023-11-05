import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.meta.import.X_APIKEY,
  authDomain: process.meta.import.X_AUTHDOMAIN,
  projectId: process.meta.import.X_PROJECTID,
  storageBucket: process.meta.import.X_STORAGEBUCKET,
  messagingSenderId: process.meta.import.X_MESSAGINGSENDERID,
  appId: process.meta.import.X_APPID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
