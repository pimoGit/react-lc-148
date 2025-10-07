// import dell'hook per il parametro
import { useParams } from "react-router-dom";


const CharachterDetailPage = () => {
    // recuperiamo il parametro dinamico (id)
    const { id } = useParams();

    return (
        <>
            <p>Ciao sono la pagina di dettaglio</p>
            <h2>ID prodotto: {id}</h2>
        </>
    )
}

export default CharachterDetailPage