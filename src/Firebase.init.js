// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDX5GVxPQSv_NKzihL6wVN4F6yC4Q7aC4",
    authDomain: "famous-footwear-warehouse.firebaseapp.com",
    projectId: "famous-footwear-warehouse",
    storageBucket: "famous-footwear-warehouse.appspot.com",
    messagingSenderId: "529377098942",
    appId: "1:529377098942:web:f7b8de5e8d828a904f72ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;