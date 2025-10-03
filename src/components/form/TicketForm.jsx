import { useState } from "react";

const TicketForm = () => {

    // variabile di stato di elementi form
    const [formData, setFormData] = useState({
        name: "",
        language: "HTML",
        urgency: "medium",
        updates: false,
        description: "",
    });

    // funzione di gestione complessivo stato form
    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    return (
        <div className="container mt-4">
            <h2>Richiesta apertura Ticket</h2>
            <form className="p-4 border rounded bg-light">
                {/* Nome */}
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                {/* Selezione linguaggio */}
                <div className="mb-3">
                    <label className="form-label">Linguaggio di programmazione</label>
                    <select
                        name="language"
                        className="form-select"
                        value={formData.language}
                        onChange={handleChange}
                    >
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JS">JavaScript</option>
                        <option value="React">React</option>
                        <option value="Express">Express</option>
                        <option value="SQL">SQL</option>
                    </select>
                </div>

                {/* Radio Urgenza */}
                <div className="mb-3">
                    <label className="form-label">Livello di urgenza</label>
                    <div>
                        <div className="form-check">
                            <input
                                type="radio"
                                name="urgency"
                                value="low"
                                id="urgencyLow"
                                className="form-check-input"
                                checked={formData.urgency === "low"}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="urgencyLow">Bassa</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                name="urgency"
                                value="medium"
                                id="urgencyMedium"
                                className="form-check-input"
                                checked={formData.urgency === "medium"}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="urgencyMedium">Media</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                name="urgency"
                                value="high"
                                id="urgencyHigh"
                                className="form-check-input"
                                checked={formData.urgency === "high"}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="urgencyHigh">Alta</label>
                        </div>
                    </div>
                </div>

                {/* Checkbox aggiornamenti */}
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        name="updates"
                        id="updates"
                        className="form-check-input"
                        checked={formData.updates}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="updates">Ricevi aggiornamenti sulla richiesta</label>
                </div>

                {/* Descrizione problema */}
                <div className="mb-3">
                    <label className="form-label">Descrizione del problema</label>
                    <textarea
                        name="description"
                        className="form-control"
                        rows="4"
                        required
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                {/* Pulsante di invio */}
                <button type="submit" className="btn btn-primary">Invia richiesta</button>
            </form>
        </div>
    );
};

export default TicketForm;