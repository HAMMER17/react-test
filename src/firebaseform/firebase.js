
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB1L4yhA7KfJGP3BXYzOuimBE7LYm8tMYg",
  authDomain: "react-project-bf506.firebaseapp.com",
  databaseURL: "https://react-project-bf506-default-rtdb.firebaseio.com",
  projectId: "react-project-bf506",
  storageBucket: "react-project-bf506.appspot.com",
  messagingSenderId: "956559586657",
  appId: "1:956559586657:web:93987cb4a7abc5cc378120"
};


export const app = initializeApp(firebaseConfig);