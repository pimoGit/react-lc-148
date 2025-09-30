import { useState } from "react";

export default function Binding() {
    const [firstName, setFirstName] = useState('');

    return (
        <>
            <input
                type="text"
                value={firstName}
                onChange={e => { setFirstName(e.target.value) }}
            />
            <p>Il tuo nome è {firstName}</p>
        </>
    )
}