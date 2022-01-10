import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
import firebaseInit from '../Firebase/firebaseInit';

firebaseInit();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setisLoading] = useState(true);


    // auth
    const auth = getAuth();

    // providers
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();



    // signin with email and password
    
    const signupWithEmailAndPassword = (name ,email, password, navigate) => {

        setisLoading(true);

        createUserWithEmailAndPassword(auth, email, password)

        .then((result) => {
           console.log(result.user)
            const newUser = {email, displayName: name};
            setUser(newUser);
            
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
            
              }).catch((error) => {
                
              });

              navigate.replace('/home')
              setError('');
        })
        .catch((error) => {

            setError(error.message);

        }).finally(() => setisLoading(false));
    };


    // sign in with email and password

    const loginWithEmailAndPassword = (email, password, location , history) => {

        setisLoading(true);

        signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);

            const { from } = location.state || { from: { pathname: "/" }};

            history.replace(from);
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        }).finally(() => setisLoading(false));
    }

    // log in with google 

    const loginWithGoogle = (location , history) => {
        
        setisLoading(true);

        signInWithPopup(auth, googleProvider)

        .then((result) => {
            const user = result.user;
            setUser(user);

           
            const { from } = location.state || { from: { pathname: "/" }};

            history.replace(from);
            setError("")

        }).catch((error) => {

            setError(error.message);

        }).finally(() => setisLoading(false));
    };

    // login with facebook

    const loginWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {


            })
            .catch((error) => {
                
            });
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
            setisLoading(false);
          });
    },[])

    return{
        user,
        error,
        isLoading,
        signupWithEmailAndPassword,
        loginWithEmailAndPassword,
        loginWithGoogle,
        loginWithFacebook,
        logout
    };
};

export default useFirebase;