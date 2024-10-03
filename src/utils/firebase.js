import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJTJyq-mBNakQofCmcM5ChvzSPxsZfPqc",
  authDomain: "elearn-8ae65.firebaseapp.com",
  projectId: "elearn-8ae65",
  storageBucket: "elearn-8ae65.appspot.com",
  messagingSenderId: "976248256990",
  appId: "1:976248256990:web:a5352e5649764a67cb454f",
  measurementId: "G-W9CPSY022P",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
