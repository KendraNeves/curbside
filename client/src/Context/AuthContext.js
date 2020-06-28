import React, {createContext,useState,useEffect} from 'react';
import AuthService from "../Services/AuthServices";

// Provides and consumes global state
export const AuthContext = createContext();

export default ({ children })=>{
    // State hooks
    const[user,setUser] =useState(null);
    const[isAuthenicated,setIsAuthenicated] =useState(false);
    const[isLoaded,setIsLoaded] =useState(false);
    
    // UseEffect hook
    useEffect(()=>{
        AuthService.isAuthenticated().then(data =>{
            setUser(data.user);
            setIsAuthenicated(data.isAuthenicated);
            setIsLoaded(true);
        })
    }, [] )

    // Returns Global State values to App
    return(
        <div>
            {!isLoaded ? <h1>Loading</h1> : 
            <AuthContext.Provider value={{user,setUser,isAuthenicated,setIsAuthenicated}}>
                { children }
            </AuthContext.Provider>}
        </div>
    )
}
