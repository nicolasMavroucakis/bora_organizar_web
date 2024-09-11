import React, { createContext, useState, Dispatch, SetStateAction, ReactNode, useContext } from 'react';

interface UsuarioType {
    email: string;
    password: string;
}

interface GlobalContextType {
    globalUser: UsuarioType;
    setGlobalUser: Dispatch<SetStateAction<UsuarioType>>;
}

const GlobalContext = createContext<GlobalContextType>({
    globalUser: { password: '', email: '' },
    setGlobalUser: () => {}
});

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [ globalUser, setGlobalUser ] = useState<UsuarioType>({ password: '', email: '' });

    return (
        <GlobalContext.Provider value={{ globalUser, setGlobalUser }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);