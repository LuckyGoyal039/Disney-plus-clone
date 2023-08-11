import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDj3SMJoyRi4tOsoTvsd0uKY6SSH1rwKKE",
  authDomain: "disneyplus-clone-ae086.firebaseapp.com",
  projectId: "disneyplus-clone-ae086",
  storageBucket: "disneyplus-clone-ae086.appspot.com",
  messagingSenderId: "269912177715",
  appId: "1:269912177715:web:8b07353a8a9d530e033746",
  measurementId: "G-649F13R90W"
};

const app = initializeApp(firebaseConfig);

// const db=getDatabase(app);
const auth=getAuth(app);
const storage=getStorage(app);

export { auth, storage}; 