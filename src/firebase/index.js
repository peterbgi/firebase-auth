
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrBDQfXqO0hmzm64LMXOMOqImnawNIXfI",
  authDomain: "authentication-99170.firebaseapp.com",
  projectId: "authentication-99170",
  storageBucket: "authentication-99170.appspot.com",
  messagingSenderId: "571037139046",
  appId: "1:571037139046:web:b4beda7dd62afe28e1ada7"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }