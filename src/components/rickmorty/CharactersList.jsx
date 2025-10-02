import { useState } from "react";
// import axios from "axios";

export default function CharactersList() {
    const [characters, setCharacters] = useState([]);

    function fetchCharacters() {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((res) => setCharacters(res.data.results))
            .catch(error => console.log(error)
            )
    }

    return (
        <div>
            <button onClick={fetchCharacters}>Carica Todos</button>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </div>
    );
}
