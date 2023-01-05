import { collection, onSnapshot, deleteDoc, doc, setDoc, getDoc, query } from "firebase/firestore";
import { db } from "../firebase-config";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export const useDb = (setMoviesList, setShowsList) => {
    const { user, loading } = useAuth();

    useEffect(() => {
        if (user !== null) {
            const q = query(collection(db, "users", user.uid, "userList"));
            const unsub = onSnapshot(q, (querySnapshot) => {
                setMoviesList(querySnapshot.docs.map((doc) => doc.data()).filter((e) => e.type === "movie"));
                setShowsList(querySnapshot.docs.map((doc) => doc.data()).filter((e) => e.type === "tv"));
            });

            return () => {
                unsub();
            };
        }
    }, [user, loading]);

    const addUser = async (user) => {
        await setDoc(doc(db, "users", user.uid), { email: user.email, uid: user.uid });
    };

    const addMovieToDB = async (movie, type) => {
        if (user !== null) {
            await setDoc(doc(db, "users", user.uid, "userList", movie.id.toString()), { element: movie, type });
        }
    };

    const removeMovieFromDb = async (movie) => {
        if (user !== null) {
            await deleteDoc(doc(db, "users", user.uid, "userList", movie.id.toString()));
        }
    };

    return { addUser, addMovieToDB, removeMovieFromDb };
};
