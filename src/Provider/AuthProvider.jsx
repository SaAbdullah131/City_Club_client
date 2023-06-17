import React, { createContext, useState,useEffect } from 'react';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,updateProfile,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import app from '../Authentication/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);

    // create user 
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // sign 
    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    // log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // login in google 
    const logInWithGoogle = ()=> {
        setLoading(true);
        return signInWithPopup(auth,provider)
    }
    // observer 
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
             setUser(currentUser);
             if(currentUser) {
                axios.post('https://summer-camp-school-server-inky.vercel.app/jwt',{
                email:currentUser.email
            })
            .then(data=>{
                localStorage.setItem('access_token',data.data.token)
                setLoading(false);
            })
            } else {
                localStorage.removeItem('access_token')
            }     
         })
         return ()=>{
             return unsubscribe();
         }
     },[]);

     // update user info 

     const updateUserInfo = (name,photo) => {
        setLoading(false);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        logInWithGoogle,
        updateUserInfo
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;