import { useState, useEffect } from "react";
// import axios from "axios";

// importiamo il componente Card
import CharacterCard from "./CharacterCard";

export default function CharactersList() {
    const [characters, setCharacters] = useState([]);

    function fetchCharacters() {
        axios.get("https://rickandmortyapi.com/api/character")
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

    return (
        <div className="container">
            <h1>Rick & Morty - Wiki</h1>
            <div className="characters">
                {characters.map((character) => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                    />
                ))}
            </div>
        </div>
    );
}
