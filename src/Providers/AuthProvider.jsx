import PropTypes from 'prop-types';
import { createContext } from "react";
import auth from './../FireBase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    // add googleAuth as a provider
    const provider = new GoogleAuthProvider();

    const googleLogIn = () => {
        return signInWithPopup(auth, provider)
    }
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        googleLogIn,
        registerUser,
        logInUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;