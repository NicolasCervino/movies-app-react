import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("There is no auth provider");
    return context;
};

export const AuthProvider = ({ children }) => {
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        console.log(email, password);
    };
    return <AuthContext.Provider value={{ signup, login }}>{children}</AuthContext.Provider>;
};
