import React, {createContext, useState} from 'react';

export const Context = createContext();

export default function ShareContext(App) {

    return () => {
        const [openDialog, setOpenDialog] = useState(false);
        const [expandContainer, setExpandContainer] = useState('');

        const value = {
            openDialog,
            setOpenDialog,
            expandContainer, 
            setExpandContainer
        }
        return(
            <Context.Provider value={value}>
                <App/>
            </Context.Provider>            
        )

    }
}