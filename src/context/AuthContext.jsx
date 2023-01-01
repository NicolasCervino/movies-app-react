import { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    TwitterAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase-config";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("There is no auth provider");
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    const loginWithFacebook = () => {
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, facebookProvider);
    };

    const loginWithTwitter = () => {
        const twitterProvider = new TwitterAuthProvider();
        return signInWithPopup(auth, twitterProvider);
    };

    const logout = () => {
        return signOut(auth);
    };

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    return (
        <AuthContext.Provider
            value={{ signup, login, logout, user, loading, loginWithGoogle, loginWithFacebook, loginWithTwitter, resetPassword }}
        >
            {children}
        </AuthContext.Provider>
    );
};
