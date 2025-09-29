import { useState } from "react";

export default function AccordionItem(props) {

    // descrutturazione delle props
    const { titolo, contenuto } = props;

    // variabile di stato di apertura accordion
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion__title">
                <h3>{titolo}</h3>
                <button
                    className="accordion__btn"
                    onClick={() => setIsOpen(currentValue => !currentValue)}
                >
                    {isOpen ? "-" : "+"}
                </button>
            </div>
            {isOpen && <div>{contenuto}</div>}
        </div>
    );
}