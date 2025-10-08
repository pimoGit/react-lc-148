// import di comp LInk da libreria router
import { Link } from "react-router-dom";

const CharachterDetailCard = (props) => {
    const { character } = props;
    return (
        <>
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
                    <p>
                        Type:  {character.type} <br />
                        Gender: {character.gender} <br />
                        Origin name: {character.origin.name} <br />
                        Location name: {character.location.name} <br />
                        Created: {character.created}
                    </p>
                    <Link to={`/charachters`}>
                        Listato personaggi
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CharachterDetailCard