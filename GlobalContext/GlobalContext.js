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
        width: "70%",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        top: "-10%",
        flex: 1,
        overflow: "visible",
    },

    Input: {
        textAlign: "center",
        marginTop: 15,
        backgroundColor: "#EEEEEE",
        borderRadius: 10,
        fontSize: 22,
    },

    button: {  
        marginTop: 15,
        height: "7%",
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
    }
}
);
