import { useState, useEffect } from "react";
// import axios from "axios";

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
        <div>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </div>
    );
}
