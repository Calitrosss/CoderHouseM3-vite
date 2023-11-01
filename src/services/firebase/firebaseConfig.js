import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9BZPUQUjqIz70sgnh0Xj_iu-gE9iV9Io",
  authDomain: "coderhousem3.firebaseapp.com",
  projectId: "coderhousem3",
  storageBucket: "coderhousem3.appspot.com",
  messagingSenderId: "1068074333784",
  appId: "1:1068074333784:web:a6092971c6e7bc3d20bc2d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const itemCollection = "items";
export const categoryCollection = "categories";
export const orderCollection = "orders";
