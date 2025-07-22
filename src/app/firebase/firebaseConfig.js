// firebase/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAhMT2NS7XLcgSYEdKCQJI-eaX5BQ_CB4M",
  authDomain: "fir-780a5.firebaseapp.com",
  projectId: "fir-780a5",
  storageBucket: "fir-780a5.appspot.com", // ✅ small correction
  messagingSenderId: "744705095065",
  appId: "1:744705095065:web:0d2884aad3fb28832b0f08"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore DB
const db = getFirestore(app);

// ✅ Export db so you can use in your contact form
export { db };
