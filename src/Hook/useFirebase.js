import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
import firebaseInit from '../Firebase/firebaseInit';

firebaseInit();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    // auth
    const auth = getAuth();

    // providers
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // signin with email and password
    const signupWithEmailAndPassword = (name ,email, password, navigate, location) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)

        .then((result) => {
            const newUser = {email, displayName: name};
            setUser(newUser);
            
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
            
              }).catch((error) => {
                
              });

              const { from } = location.state || { from: { pathname: "/" }};

            navigate(from, { replace: true });
              setError('');
        })
        .catch((error) => {

            setError(error.message);

        }).finally(() => setLoading(false));
    };


    // sign in with email and password
    const loginWithEmailAndPassword = (email, password, location , navigate) => {

        setLoading(true);

        signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);

            const { from } = location.state || { from: { pathname: "/" }};

            navigate(from, { replace: true });
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        }).finally(() => setLoading(false));
    }

    // log in with google 
    const loginWithGoogle = (location , navigate) => {
        
        setLoading(true);

        signInWithPopup(auth, googleProvider)

        .then((result) => {
            const user = result.user;
            setUser(user);

            saveUserToDb(user.displayName, user.email, "PUT");
            const { from } = location.state || { from: { pathname: "/" }};

            navigate(from, { replace: true });
            setError("")

        }).catch((error) => {

            setError(error.message);

        }).finally(() => setLoading(false));
    };

    // login with facebook
    const loginWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {


            })
            .catch((error) => {
                
            });
    }

    const saveUserToDb = (displayName, email, method) => {
        const user = {displayName, email}
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {"content-type": "application/json"},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    // logout
    const logout = () => {
        signOut(auth).then(() => {
            
          }).catch((error) => {
            
          });
    }

    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
              setUser({});
            }
            setLoading(false);
          });
    },[])

    return{
        user,
        error,
        loading,
        signupWithEmailAndPassword,
        loginWithEmailAndPassword,
        loginWithGoogle,
        loginWithFacebook,
        logout
    };
};

export default useFirebase;