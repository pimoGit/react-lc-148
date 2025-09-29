import AccordionItem from "./AccordionItem";


// DATI
const faqs = [
    {
        title: "Accordion 1",
        content:
            "TESTO 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
    },
    {
        title: "Accordion 2",
        content:
            "TESTO 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
    },
    {
        title: "Accordion 3",
        content:
            "TESTO 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
    },
    {
        title: "Accordion 4",
        content:
            "TESTO 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
    },
];

export default function AccordionList() {


    return (
        <div className="accordion-list">

            {faqs.map((faq, index) => (
                <AccordionItem
                    titolo={faq.title}
                    contenuto={faq.content}
                    key={index}
                />
            ))}





        </div>

    );
}