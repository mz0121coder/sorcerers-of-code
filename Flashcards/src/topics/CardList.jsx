import Card from "./Card";

export default function CardList({ cards }) {
    return (
        <div className="card-grid">
            {cards.map(card => {
                return <Card card={card} key={card.id}/>
            })}
        </div>
    )
}