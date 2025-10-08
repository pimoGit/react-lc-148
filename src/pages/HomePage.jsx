import { useFavorites } from "../context/FavoriteContext";

import CharacterCard from "../components/rickmorty/CharacterCard";

const HomePage = () => {

    const { favorites, characters } = useFavorites();

    // Stabiliamo quali sono i personaggi preferiti
    const favoriteCharacters = characters.filter(character => {
        return favorites.includes(character.id)
    });

    return (
        <>
            <div>Questa è la Home Page</div>
            <h1>lista dei preferiti</h1>
            <div className="characters">
                {favoriteCharacters.map((character) => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                    />
                ))}
            </div>
        </>
    )
}

export default HomePage