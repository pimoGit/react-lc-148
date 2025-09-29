export default function AccordionItem(props) {

    const { titolo, contenuto } = props;

    return (
        <div className="accordion">
            <div className="accordion__title">
                <h3>{titolo}</h3>
                <button>+</button>
            </div>
            <div>
                {contenuto}
            </div>
        </div>
    );
}