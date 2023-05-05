import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProviders = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [chefID, setChefID] = useState(1)

     /* ------- Email password Login System Code-------------- */
    const createEmailPassUser = ( email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }
  /* ------- Email password signin System Code-------------- */
    const signInUserWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

      /* ------- Google Login System Code-------------- */
    const loginRegisterWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
  /* ------- Github Login System Code-------------- */
    const loginRegisterWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }

  /* -------Logout System Code-------------- */
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

      /* ------- User Status monitoring system code-------------- */
    useEffect( () => {
       const unSubscribe =  onAuthStateChanged( auth , loggedUser => {
          setUser(loggedUser)
          setLoading(false);
        })

        return () => {
             unSubscribe();
        }
    }, [])

    
    const authInfo = {
        user,
        loading,
        chefID,
        createEmailPassUser,
        signInUserWithEmail,
        loginRegisterWithGoogle,
        loginRegisterWithGitHub, 
        logOut,
        setChefID
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;