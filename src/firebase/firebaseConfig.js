import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX_Ub5JsSQMKL_vyhGXukIX9PxhRHbsfk",
  authDomain: "resume-master83.firebaseapp.com",
  databaseURL: "https://resume-master83-default-rtdb.firebaseio.com",
  projectId: "resume-master83",
  storageBucket: "resume-master83.appspot.com",
  messagingSenderId: "977510313153",
  appId: "1:977510313153:web:28175c1dd0209508e07840"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

export const db=getFirestore(app);