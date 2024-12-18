import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.M_authDomain,
  projectId: import.meta.env.M_projectId,
  storageBucket: import.meta.env.M_storageBucket,
  messagingSenderId: import.meta.env.M_messagingSenderId,
  appId: import.meta.env.M_appId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
