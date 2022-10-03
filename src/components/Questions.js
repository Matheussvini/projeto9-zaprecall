import CardQuestion from "./CardQuestion";

export default function Questions(props) {
  const { cards, turnedCard, setTurnedCard, array, setArray } = props;

  return (
    <ul>
      {cards.map((q, index) => (
        <CardQuestion
          key={index}
          quest={q}
          turnedCard={turnedCard}
          setTurnedCard={setTurnedCard}
          array={array}
          setArray={setArray}
        />
      ))}
    </ul>
  );
};