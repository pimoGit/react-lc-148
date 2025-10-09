import { createContext, useContext, useState, useEffect } from 'react';

const FavoriteContext = createContext();

// richiamo variabile di ambiente
const apiUrl = import.meta.env.VITE_API_URL;

// comp di creazione provider
const FavoriteProvider = ({ children }) => {

    // array di gestione id dei personaggi preferiti
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (characterId) => {
        setFavorites(prev => [...prev, characterId]);
    };

    const removeFavorite = (characterId) => {
        setFavorites(prev => prev.filter(id => id !== characterId));
    };

    const isFavorite = (characterId) => {
        return favorites.includes(characterId);
    };

    // dati dei personaggi da API
    const [characters, setCharacters] = useState([]);

    function fetchCharacters() {
        axios.get(apiUrl)
            .then((res) => setCharacters(res.data.results))
            .catch(error => console.log(error)
            )
    }
    // chiamata che genera un loop infinito e fa esplodere il browser
    // fetchCharacters();

    useEffect(() => {
        fetchCharacters()
    }
        , [])


    return (<FavoriteContext.Provider
        value={{
            characters,
            favorites,
            addFavorite,
            removeFavorite,
            isFavorite
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