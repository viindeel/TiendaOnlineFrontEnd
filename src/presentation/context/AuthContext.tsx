import React, {createContext, useContext, useState} from "react";

export type AuthType = {
    refreshToken: string;
    token: string;
    email: string;
    username: string;
}

export type AuthContextType = {
    login : (datos : AuthType) => Promise<void>;
    logout : () => Promise<void>;
    user : AuthType | null;
    isAuthenticated : boolean;
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({children} : {children: React.ReactNode}) => {

    const [user, setUser] = useState<AuthType | null>(null);

    const login = async (datos : AuthType) => {

    }
    const logout = async () => {
        // solo tiene que borrar los valores que tengamos guardados en la memoria del dispostivio si existen
    }

    return (
        <AuthContext.Provider
            value ={{login, logout, user, isAuthenticated : !!user}} // es lo mismo !!user que : user ? true : false
        >
            {children}
        </AuthContext.Provider>
    );


}


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("No carga el contexto")
    }
    return context;
}