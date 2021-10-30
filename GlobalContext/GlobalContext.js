import React, { useContext } from 'react';

import { StyleSheet } from 'react-native';

const AppProvider = React.createContext();


export default function GlobalContext({children}) {
 
    return (
        <AppProvider.Provider
            value={{globalStyles}}
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
        width: "70vw",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        top: "-10vh",
        flex: 1,
    },
    Input: {
        width: "100%",
        marginTop: "15px",
        textAlign: "center",
        backgroundColor: "#EEEEEE",
        borderRadius: "10px",
    },
    button: {
        marginTop: "15px",
        width: "100%",
        borderRadius: "10px",
        fontSize: "large",
    },
    fatText: {
        fontSize: "30px",
        fontWeight: "700",
        textAlign: "center",
        paddingBottom: "50px"
    },
    buttonText: {
        fontSize: "large",
        color: "white",
        fontWeight: "700",
    }
}
);
