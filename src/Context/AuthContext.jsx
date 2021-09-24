import React from 'react';

export const AuthContext = React.createContext();

export const AuthContextProvider = ({children}) => {
    //user authentication status
    const [isAuth, setIsAuth] = React.useState(true);

    const handleSignin = ({username, password}) => {
        //fake
        if(username === "admin" && password === "admin")
        {
            setIsAuth(true);
        }
        else
        {
            alert('wrong password')
        }
    }

    const handleSignout = () => {
        setIsAuth(false);
    }

    const value = {isAuth, handleSignin, handleSignout}
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
