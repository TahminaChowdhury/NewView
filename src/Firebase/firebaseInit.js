import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const firebaseInit = () => {
    const app = initializeApp(firebaseConfig);
};

export default firebaseInit;