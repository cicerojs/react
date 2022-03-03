import React, { createContext } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuário: string;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC = ({children}) => {
    return (
        <UsuarioLogadoContext.Provider value={{nomeDoUsuário: 'Lucas'}}> 
            {children}
        </UsuarioLogadoContext.Provider>
    )
}
