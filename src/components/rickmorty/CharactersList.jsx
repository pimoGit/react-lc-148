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
        <div className="container">
            <h1>Rick & Morty - Wiki</h1>
            <div className="characters">
                {characters.map((character) => (
                    <div className="character" key={character.id}>
                        <div className="character-image">
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div className="character-info">
                            <p className="character-name">{character.name}</p>
                            <p className="character-status-origin">
                                <span className={`status-icon is-${character.status.toLowerCase()}`}></span>
                                {character.status} - {character.origin.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
