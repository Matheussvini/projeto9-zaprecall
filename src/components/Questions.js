import CardQuestion from "./CardQuestion";

export default function Questions(props) {
  const { cards, turnedCard, setTurnedCard } = props;

  return (
    <ul>
      {cards.map((q, index) => (
        <CardQuestion
          key={index}
          quest={q}
          turnedCard={turnedCard}
          setTurnedCard={setTurnedCard}
        />
      ))}
    </ul>
  );
};