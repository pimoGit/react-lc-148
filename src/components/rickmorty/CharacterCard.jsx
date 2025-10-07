// import di comp LInk da libreria router
import { Link } from "react-router-dom";

export default function CharacterCard(props) {

    const { character } = props;

    return (
        <div className="character" >
            <div className="character-image">
                <img src={character.image} alt={character.name} />
            </div>
            <div className="character-info">
                <p className="character-name">{character.name}</p>
                <p className="character-status-origin">
                    <span className={`status-icon is-${character.status.toLowerCase()}`}></span>
                    {character.status} - {character.origin.name}
                </p>
                <Link to={`/charachters/${character.id}`}>
                    Dettaglio personaggio
                </Link>
            </div>
        </div>
    )
}