import { useEffect, useState } from 'react';

const initialMovies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
];

function Movies() {

    const [filteredMovies, setFilteredMovies] = useState(initialMovies);
    const [genre, setGenre] = useState('');

    useEffect(() => {
        if (genre !== '') {
            const selectedMovies = initialMovies.filter(m => m.genre === genre);
            setFilteredMovies(selectedMovies);
        } else {
            setFilteredMovies(initialMovies);
        }
    }, [genre]);

    return (
        <div className="container mt-5 w-50">
            <h1>Lista Film</h1>

            {/* Select per filtrare i generi */}
            <div className="mb-3">
                <select
                    className="form-control"
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                >
                    <option value="">Tutti i generi</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>
                </select>
            </div>

            <hr />

            {/* Lista dei film filtrati */}
            <ul className="list-group">
                {filteredMovies.map((movie, i) => (
                    <li key={i} className="list-group-item">
                        {movie.title} - <em>{movie.genre}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Movies;
