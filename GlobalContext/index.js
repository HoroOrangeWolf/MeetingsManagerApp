import React, { useContext, useState } from 'react';

import { StyleSheet } from 'react-native';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDM5mFLrS_XBpeYOtfm8cUQVQXI4GdmMV0",
  authDomain: "meetingsmanagerapp.firebaseapp.com",
  projectId: "meetingsmanagerapp",
  storageBucket: "meetingsmanagerapp.appspot.com",
  messagingSenderId: "773403299384",
  appId: "1:773403299384:web:a85891506a2bd9c8dea0cd",
  measurementId: "G-WE7JWM3V6F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getFirestore();


const AppProvider = React.createContext();

export default function GlobalContext({children}) {
 
    const [user, setUser] = useState({});

    const registerUser = async (email, password) =>{
        const userc = await createUserWithEmailAndPassword(auth, email, password);

        return userc;
    };

    const loginUser = async (email, password) => {
        const userc = await signInWithEmailAndPassword(auth, email, password);

        return userc;
    }

    const addMeetinng = async (meeting) => {
        const {name, description, calendarDate, alarm} = meeting;
        const timeDate = calendarDate.getTime();
        const alarmDate = alarm.getTime();

        const docRef = await addDoc(collection(database, 'meeting'), {name, description, timeDate, alarmDate});

        return docRef;
    }
    
    return (
        <AppProvider.Provider
            value={{globalStyles, registerUser, loginUser, addMeetinng, setUser}}
        >
            {
                children
            }
        </AppProvider.Provider>
    );
}

export const useGlobalContext = () =>{
    return useContext(AppProvider);
}

const globalStyles = StyleSheet.create({
    logRegScreen: {
        width: "70%",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        top: "-10%",
        flex: 1,
        overflow: "visible",
    },
    meetingDetailsScreen: {
        width: "70%",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        flex: 1,
        overflow: "visible",
    },

    input: {
        textAlign: "center",
        backgroundColor: "#EEEEEE",
        borderRadius: 10,
        fontSize: 22,
        height: 50,
    },

    button: {  
        marginTop: 15,
        height: 50,
        borderRadius: 10,
    },

    fatText: {
        fontSize: 50,
        paddingTop: 40,
        fontWeight: "700",
        textAlign: "center",
    },

    buttonText: {
        fontSize: 22,
        color: "white",
        fontWeight: "700",
    },
    label: {
        
    },  
    labelText: {
        fontSize: 16,
    },
    textArea: {
        height: "40%",
        backgroundColor: "#EEEEEE",
        fontSize: 15,
    }

}
);