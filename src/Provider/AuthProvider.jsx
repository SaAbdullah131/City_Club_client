import React, { createContext, useState } from 'react';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import app from '../Authentication/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);

    // create user 
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // sign 
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    // login in google 
    const loginGoogle = () => {
        
    }
    const authInfo = {
        user,
        loading,
        createUser,
        loginGoogle
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;