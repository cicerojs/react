import React, { createContext, useCallback } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuário: string;
    logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC = ({children}) => {

    const handleLogout = useCallback(() => {
        console.log('Logout executou !')
    }, []);

    return (
        <UsuarioLogadoContext.Provider value={{nomeDoUsuário: 'Lucas', logout: handleLogout}}> 
            {children}
        </UsuarioLogadoContext.Provider>
    )
}
