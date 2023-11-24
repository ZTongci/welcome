// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY2e5os9G7Xmv15BXxoCUPeWoz-63qNl0",
  authDomain: "welcome-3d1ab.firebaseapp.com",
  projectId: "welcome-3d1ab",
  storageBucket: "welcome-3d1ab.appspot.com",
  messagingSenderId: "768655656435",
  appId: "1:768655656435:web:b803debd4cd36e056cfe86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;