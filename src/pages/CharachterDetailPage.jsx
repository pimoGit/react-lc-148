// import stato e effect
import { useState, useEffect } from "react";

// import dell'hook per il parametro
import { useParams, useNavigate } from "react-router-dom";

// import comp card dettaglio
import CharachterDetailCard from "../components/rickmorty/CharachterDetailCard";



const CharachterDetailPage = () => {
    // recuperiamo il parametro dinamico (id)
    const { id } = useParams();
    // utilizzo il navigate
    const navigate = useNavigate();


    // stato del componente (oggetto del personaggio da API)
    const [character, setCharacter] = useState();

    // a mounting comp parte chiamata a API
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => setCharacter(res.data))
            .catch(() => { navigate('/charachters') })
    }, [id])

    return (
        <div>
            {character ? (
                <CharachterDetailCard
                    character={character}
                />
            )
                :
                (<p>Loading...</p>)}
        </div>)

}

export default CharachterDetailPage