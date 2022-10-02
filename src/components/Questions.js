import styled from "styled-components";
import playImg from "../images/seta_play.png";
import turnImg from "../images/seta_virar.png";
import { useState } from "react";

function CardQuestion({ quest, turnedCard, setTurnedCard }) {
  const { id, question, answer } = quest;

  const [cardFace, setCardFace] = useState("front");
  const numberQuest = id + 1;

  function turnCard(i) {
    setCardFace("question");
    setTurnedCard([...turnedCard, i]);
  }

  return (
    <>
      <Front face={cardFace === "front"}>
        <p>Pergunta {numberQuest}</p>
        <img
          src={playImg}
          onClick={() => turnCard(numberQuest)}
          alt="Ícone de play"
        />
      </Front>
      <Question face={cardFace === "question"}>
        <p>{question}</p>
        <img
          src={turnImg}
          onClick={() => setCardFace("answer")}
          alt="Ícone de inversão"
        />
      </Question>
      <Answer face={cardFace === "answer"}>
        <p>{answer}</p>
      </Answer>
    </>
  );
}

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
}

const Front = styled.li`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: ${(props) => (props.face ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;
const Question = styled.li`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: ${(props) => (props.face ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
const Answer = styled.li`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: ${(props) => (props.face ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
