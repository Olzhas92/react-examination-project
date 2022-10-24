// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD96bgaZ7fkeLUu5IJC2KPsSehOO17h33I",
  authDomain: "react-examination-project.firebaseapp.com",
  databaseURL: "https://react-examination-project-default-rtdb.firebaseio.com",
  projectId: "react-examination-project",
  storageBucket: "react-examination-project.appspot.com",
  messagingSenderId: "616777138737",
  appId: "1:616777138737:web:e2f041b65415ce150c4b10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
