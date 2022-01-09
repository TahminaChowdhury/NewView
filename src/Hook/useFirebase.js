import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    // Auth Providers
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
         
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    return {
        signInWithGoogle
    };
};

export default useFirebase;