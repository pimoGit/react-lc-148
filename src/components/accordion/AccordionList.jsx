// import dello stato
import { useState } from "react";
// import componente figlio
import AccordionItem from "./AccordionItem";


// DATI
const faqs = [
    {
        id: 1,
        title: "Accordion 1",
        content:
            "TESTO 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
    },
    {
        id: 2,
        title: "Accordion 2",
        content:
            "TESTO 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
    },
    {
        id: 3,
        title: "Accordion 3",
        content:
            "TESTO 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
    },
    {
        id: 4,
        title: "Accordion 4",
        content:
            "TESTO 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
    },
];

export default function AccordionList() {

    // variabile di stato della lista
    const [activeAccordionItem, setActiveAccordionItem] = useState(null);

    return (
        <div className="accordion-list">

            {faqs.map((faq) => (
                <AccordionItem
                    titolo={faq.title}
                    contenuto={faq.content}
                    isOpen={activeAccordionItem === faq.id}
                    onToggle={() => setActiveAccordionItem(activeAccordionItem === faq.id ? null : faq.id)}
                    key={faq.id}
                />
            ))}





        </div>

    );
}