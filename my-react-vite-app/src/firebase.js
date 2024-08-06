import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAQY2-GxpUXxB-GBHU3Kf8O3Pb25xIOdbA",
    authDomain: "medcart-development.firebaseapp.com",
    projectId: "medcart-development",
    storageBucket: "medcart-development.appspot.com",
    messagingSenderId: "337963893359",
    appId: "1:337963893359:web:3b421157b42e65e93f439a"
  };

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app
