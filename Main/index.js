
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
        registerUser(email, pass)
            .then((res)=>{
                Alert.alert(
                    "Registered successfully!",
                    "You can login now!",
                    [
                    { text: "OK" }
                ]);
            }).catch((exc)=>{
                Alert.alert(
                    "Error!",
                    "Invalid email!",
                    [
                    { text: "OK" }
                ]);
            });
    }

    
    return (

        isLogged ? <MainScreen/> : <Login handleLogin={handleLogin} handleRegister={handleRegister}/>

    );

}