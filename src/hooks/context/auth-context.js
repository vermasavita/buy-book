import { createContext, useReducer, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [ authState, authDispatch] = useReducer(authReducer, {user: "", token: ""})
    return(
        <AuthContext.Provider value={{authState, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useState(AuthContext);

export { AuthProvider, useAuth};
