// import stato e effect
import { useState, useEffect } from "react";
// import di comp LInk da libreria router
import { Link } from "react-router-dom";
// import dell'hook per il parametro
import { useParams } from "react-router-dom";



const CharachterDetailPage = () => {
    // recuperiamo il parametro dinamico (id)
    const { id } = useParams();

    // stato del componente (oggetto del personaggio da API)
    const [character, setCharacter] = useState();

    // a mounting comp parte chiamata a API
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => setCharacter(res.data))
            .catch(err => console.log(err)
            )
    }, [])

    return (
        <div>
            {character ? (
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
                        <Link to={`/charachters`}>
                            Listato personaggi
                        </Link>
                    </div>
                </div>
            )
                :
                (<p>Loading...</p>)}
        </div>)

}

export default CharachterDetailPage