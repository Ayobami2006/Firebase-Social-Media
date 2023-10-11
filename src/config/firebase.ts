// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaw6vK3YZ9x-ShnfYTCqz431_C2XR-L8o",
  authDomain: "react-course-3490f.firebaseapp.com",
  projectId: "react-course-3490f",
  storageBucket: "react-course-3490f.appspot.com",
  messagingSenderId: "776917086115",
  appId: "1:776917086115:web:40bca9042f1a091b72f416",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
