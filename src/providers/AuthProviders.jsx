import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [chefID, setChefID] = useState(1)

    
    const createEmailPassUser = ( email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUserWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect( () => {
       const unSubscribe =  onAuthStateChanged( auth , loggedUser => {
          console.log('logged in user inside auth state observer', loggedUser)
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