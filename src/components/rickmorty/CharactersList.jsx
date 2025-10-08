// import { useState, useEffect } from "react";
// import axios from "axios";

// import del context per dati centralizzati
import { useFavorites } from "../../context/FavoriteContext"

// importiamo il componente Card
import CharacterCard from "./CharacterCard";

export default function CharactersList() {

    // utilizziamo il dato che ci interessa richiamandolo dal contesto
    const { characters } = useFavorites();

    return (
        <div className="container">
            <h1>Rick & Morty - Wiki</h1>
            <div className="characters">
                {characters?.map((character) => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                    />
                ))}
            </div>
        </div>
    );
}
