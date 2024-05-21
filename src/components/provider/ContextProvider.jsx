import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { signInWithPopup } from "firebase/auth";
import { ToastContainer } from 'react-toastify';
export const AuthContext = createContext()
const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

// create user
const signUpUser = (email,password) => {
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)
}

// sign in use 
const signInUser = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
// google login
const provider = new GoogleAuthProvider();
const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)

}

// log out user
const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}

// update user profile
const updateUserProfile = (name,photo)=> {
    return updateProfile(auth.currentUser, {
        displayName:name, photoURL:photo
      })
}

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser)
                setLoading(false)
            })
        return () => {
            return unsubscribed()
        }
    }, [])


    const authInfo = { user, setUser, loading,signUpUser,signInUser,logOut,updateUserProfile,googleLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer />
        </AuthContext.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.node
};

export default ContextProvider;


