// import di comp LInk da libreria router
import { Link } from "react-router-dom";

// import del context per dati centralizzati
import { useFavorites } from "../../context/FavoriteContext"

export default function CharacterCard(props) {

    const { character } = props;

    // utilizziamo il dato che ci interessa richiamandolo dal contesto
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();

    // utilizzo funzioni prese dal context
    // controlliamo se è preferito o meno
    const favorite = isFavorite(character.id);

    const toggleFavorite = () => {
        if (favorite) {
            removeFavorite(character.id);
        } else {
            addFavorite(character.id);
        }
    };

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
                <span
                    className="heart-icon"
                    onClick={toggleFavorite}
                >
                    {favorite ? '❤️' : '🤍'}
                </span> <br />
                <Link to={`/charachters/${character.id}`}>
                    Dettaglio personaggio
                </Link>
            </div>
        </div>
    )
}