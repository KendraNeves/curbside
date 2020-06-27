import React, {createContext,useState,useEffect} from 'react';
import AuthService from "../Services/AuthServices";

export const AuthContext = createContext();

export default ({ children })=>{
    const[user,setUser] =useState(null);
    const[isAuthenicated,setIsAuthenicated] =useState(false);
    const[isLoaded,setIsLoaded] =useState(false);

    useEffect(()=>{
        AuthService.isAuthenticated().then(data =>{
            setUser(data.user);
            setIsAuthenicated(data.isAuthenicated);
            setIsLoaded(true);
        });
    },[])};

    return (
        <div>
            {!isLoaded ? <h1></h1>:
            <AuthContext.Provider value={{user,setUser,isAuthenicated,setIsAuthenicated}}>
                {children}
            </AuthContext.Provider>}
        </div>
    )