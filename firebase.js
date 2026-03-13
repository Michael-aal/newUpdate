
// Your Firebase config
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwVJ909GsNFVEA6y7YHrsKfinDBZRg_QQ",
  authDomain: "qry-pti.firebaseapp.com",
  projectId: "qry-pti",
  storageBucket: "qry-pti.firebasestorage.app",
  messagingSenderId: "658803269980",
  appId: "1:658803269980:web:e770b1ff9a5ed174cde199"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Test writing to Firestore
async function testFirebase() {
  try {
    await addDoc(collection(db, "testCollection"), {
      message: "Firebase is working!",
      time: new Date()
    });
    console.log("✅ Success: Data added");
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

testFirebase();
// export default firebaseConfg