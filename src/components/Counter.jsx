import { useState } from 'react';

export default function Counter() {
    // Definiamo uno stato "count" 
    // e una funzione "setCount" per aggiornarlo
    const [count, setCount] = useState(0);

    const hadleIncrement = () => {
        setCount(current => current + 1)
        setCount(current => current + 1)
    };


    return (
        <div>
            <div className="counter">{count}</div>
            <button onClick={hadleIncrement}>Incrementa!</button>
            <button onClick={() => { setCount(count - 1) }}>Descrementa!</button>
        </div>
    );
}