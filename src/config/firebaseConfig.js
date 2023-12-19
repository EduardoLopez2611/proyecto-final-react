import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyApPDUddFiYxvuNro4LuoYNhV8wzZHGbBo",
        authDomain: "coder-60995-84ac3.firebaseapp.com",
        projectId: "coder-60995-84ac3",
        storageBucket: "coder-60995-84ac3.appspot.com",
        messagingSenderId: "283912443048",
        appId: "1:283912443048:web:6ac94a9bc26329f37f1e9d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 

