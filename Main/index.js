
import Login from '../Login'
import { useGlobalContext } from "../GlobalContext";

import React,{ useState } from 'react';
import { Alert } from 'react-native';
import MainScreen from '../MainScreen';


export default Main = () =>{

    const {registerUser, loginUser, setUser} = useGlobalContext();

    const [isLogged, setLogged] = useState(false);

    const handleLogin = async (email, pass) => {
        try{
            const unParse = await loginUser(email, pass);

            setUser(unParse);
            
            setLogged(true);
        }catch(exc){
            throw exc;
        }    
    }

    const handleRegister = async (email, pass) => {

        try{
            const unPare = await registerUser(email, pass);
        }catch(exc){
            throw exc;
        }
    }

    
    return (

        isLogged ? <MainScreen/> : <Login handleLogin={handleLogin} handleRegister={handleRegister}/>

    );

}