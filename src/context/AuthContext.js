import { createContext, useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    //---Intialized the States
    const [user, setUser] = useState({
        email:"",
        name:"",
        picture:"",
        sub:""
    })
    
    //---Google Authentication
    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse['access_token'])
            if(tokenResponse && tokenResponse['access_token'])
            {
                axios.get('https://www.googleapis.com/oauth2/v3/userinfo',{
                    headers:{
                        "Authorization": `Bearer ${tokenResponse['access_token']}`,
                        "Accept": "application/json"
                    }
                }).then(resp => {
                    console.log(resp['data'])
                    setUser({
                        email:resp['data']['email'],
                        name:resp['data']['name'],
                        picture:resp['data']['picture'],
                        sub:resp['data']['sub']
                    })
                })
                .catch(err => console.log(err))
            }  
        },
        onError: tokenResponseError => console.log(tokenResponseError)
    });

    //---REGISTER CUSTOM USER
    const createWithEmail = async (data) => 
    {
        try {
            const data = await axios.post(`${process.env.React_App_SERVER_URL}/user/create`,{...data});
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{login, user, createWithEmail}}>
          {children}
        </AuthContext.Provider>
      );
}

export {AuthContext, AuthProvider}