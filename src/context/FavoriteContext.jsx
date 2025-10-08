import { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

// comp di creazione provider
const FavoriteProvider = () => {


    return (<FavoriteContext.Provider
        value={{

        }}
    >
        {children}
    </FavoriteContext.Provider>)
}

const useFavorites = () => {
    const context = useContext(FavoriteContext);
    return context;
};

export { FavoriteProvider, useFavorites };