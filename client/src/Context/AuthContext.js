import React, {createContext,useState,useEffect} from 'react';
import AuthServices from "../Services/AuthServices";

// Provides and consumes global state
export const AuthContext = createContext();

export default ({ children })=>{
    // State hooks
    const[user,setUser] =useState(null);
    const[isAuthenticated,setIsAuthenticated] =useState(false);
    const[isLoaded,setIsLoaded] =useState(false);
    
    // UseEffect hook
    useEffect(()=>{
        AuthServices.isAuthenticated().then(data =>{
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        })
    }, [] )

    // Returns Global State values to App
    return(
        <div>
            {!isLoaded ? <h1>Loading</h1> : 
            <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated}}>
                { children }
            </AuthContext.Provider>}
        </div>
    )
}
