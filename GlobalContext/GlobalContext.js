import React, { useContext } from 'react';

import { StyleSheet } from 'react-native';

const AppProvider = React.createContext();


export default function GlobalContext({children}) {
    const {globalStyles} = useGlobalContext();
 
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
        marginTop: "20vh",
        margin: "auto",
        flex: 1,
    },
}
);
