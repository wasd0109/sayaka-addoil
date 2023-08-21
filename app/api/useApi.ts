// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, where, query, getDocs, getCountFromServer, Timestamp } from "firebase/firestore";
import { useEffect, useState } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEEGu_Tt4Lf0C2FR5jLpnYFRBhrdW3fCg",
    authDomain: "sayaka-addoil.firebaseapp.com",
    projectId: "sayaka-addoil",
    storageBucket: "sayaka-addoil.appspot.com",
    messagingSenderId: "34430524622",
    appId: "1:34430524622:web:f0478d6a858ea54a60c49f",
    measurementId: "G-9TFPZET4X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const addOilRef = collection(db, "addoil");

export const useAddOil = (uuid: string) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")
    const addOil = async () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const q = query(addOilRef, where("timestamp", ">", today), where("uuid", "==", uuid));
        const snapshot = await getCountFromServer(q);
        if (snapshot.data().count !== 0) {
            setError("請明天再集氣")
        }
        else {
            addDoc(addOilRef, { timestamp: new Date(), uuid })
        }
    }
    return { addOil, loading, error }
}

export const useGetAddOilNumber = () => {
    const [total, setTotal] = useState(-1);
    const [todayTotal, setTodayTotal] = useState(-1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        const getTotal = async () => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const q = query(addOilRef, where("timestamp", ">", today));
            const snapshot = await getCountFromServer(addOilRef);
            const snapshotToday = await getCountFromServer(q);
            setTotal(snapshot.data().count);
            setTodayTotal(snapshotToday.data().count)
            setLoading(false);
        }
        getTotal();
    }, [])
    return { total, todayTotal, loading, error }
}