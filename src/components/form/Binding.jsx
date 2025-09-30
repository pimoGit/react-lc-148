import { useState } from "react";

export default function Binding() {
    const [firstName, setFirstName] = useState('');

    // funzione di invio form
    const handleSubmit = e => {
        e.preventDefault();
        alert('FORM INVIATO!')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={firstName}
                onChange={e => { setFirstName(e.target.value) }}
            />
            <p>Il tuo nome è {firstName}</p>
            <button>Invia</button>
        </form>
    )
}