import { getStorage, ref } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBGFxIkGsuYkclB0pN4BhPYBpc4P4PSVmI",
    authDomain: "khassbazar.firebaseapp.com",
    projectId: "khassbazar",
    storageBucket: "khassbazar.appspot.com",
    messagingSenderId: "524088617362",
    appId: "1:524088617362:web:2d23fead21dec11dda794b",
    measurementId: "G-15656KKL90"
  };
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db=getFirestore(app);