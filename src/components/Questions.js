import CardQuestion from "./CardQuestion";

export default function Questions(props) {
  const { cards, turnedCard, setTurnedCard, array, setArray, hits, setHits } = props;
  console.log(cards)
 // console.log(cards.react)

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
          hits={hits}
          setHits={setHits}
        />
      ))}
    </ul>
  );
};