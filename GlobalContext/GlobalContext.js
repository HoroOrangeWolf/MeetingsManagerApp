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
