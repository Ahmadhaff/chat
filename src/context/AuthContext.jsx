/* eslint-disable react/prop-types */
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import {createContext, useState , useContext, useEffect, } from "react";
import { auth } from "../firebase";




const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser , setCurrentUser] = useState(null);
    
    const [loading , setLoading] = useState(true);


    // Sigin With GOOGLE 

    const SigninWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth , provider)
    }

    const logout = ()=> signOut(auth)
    const value = {
        currentUser ,
        setCurrentUser,
        SigninWithGoogle,
        logout,
        
    }

    useEffect (() => {
        const unsubscribe = onAuthStateChanged(auth , (user)=> {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    })
        return (
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        )
    
}

export const UserAuth = () => {
    return useContext(AuthContext)
}