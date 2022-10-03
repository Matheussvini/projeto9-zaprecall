import PlayImg from "../images/seta_play.png";
import turnImg from "../images/seta_virar.png";
import { useState } from "react";
import styled from "styled-components";
import Answered from "./Answered";
import ZapImg from "../images/icone_certo.png";
import AlmostImg from "../images/icone_quase.png";
import NotImg from "../images/icone_erro.png";

export default function CardQuestion({
  quest,
  turnedCard,
  setTurnedCard,
  array,
  setArray,
  hits,
  setHits,
}) {
  const { id, question, answer } = quest;

  const [cardFace, setCardFace] = useState("front");
  const [localResult, setLocalResult] = useState("");
  const numberQuest = id + 1;

  function answerCard(result, i) {
    const newArray = [...array];
    let image;
    if (result === "Zap") {
      setHits(hits + 1);
      image = ZapImg;
    } else if (result === "Almost") {
      image = AlmostImg;
    } else if (result === "Not") {
      image = NotImg;
    }
    newArray[numberQuest - 1] = (
      <li key={numberQuest} >
        <img src={image} alt="Ícone de progresso da resposta" />
      </li>
    );
    setTurnedCard([...turnedCard, i]);
    setArray(newArray);
    setLocalResult(result);
  }

  return (
    <>
      <Front face={cardFace === "front"} data-identifier="flashcard">
        <p data-identifier="flashcard-index-item">Pergunta {numberQuest}</p>
        <img
          src={PlayImg}
          onClick={() => setCardFace("question")}
          alt="Ícone de play"
          data-identifier="flashcard-show-btn"
        />
      </Front>
      <Question face={cardFace === "question"}>
        <p data-identifier="flashcard-question">{question}</p>
        <img
          src={turnImg}
          onClick={() => setCardFace("answer")}
          alt="Ícone de inversão"
          data-identifier="flashcard-turn-btn"
        />
      </Question>
      <Answer face={cardFace === "answer"}>
        <p data-identifier="flashcard-answer">{answer}</p>
        <ButtonsContainer>
          <NotReaction
            onClick={() => answerCard("Not", numberQuest)}
            data-identifier="forgot-btn"
          >
            Não lembrei
          </NotReaction>
          <AlmostReaction
            onClick={() => answerCard("Almost", numberQuest)}
            data-identifier="almost-forgot-btn"
          >
            Quase não lembrei
          </AlmostReaction>
          <ZapReaction
            onClick={() => answerCard("Zap", numberQuest)}
            data-identifier="zap-btn"
          >
            Zap!
          </ZapReaction>
        </ButtonsContainer>
      </Answer>
      <Answered
        result={localResult}
        numberQuest={numberQuest}
        setCardFace={setCardFace}
      />
    </>
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
  img {
    cursor: pointer;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    &:hover {
      color: #fff;
      background-color: #e2e2e2;
      box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
      transform: translateY(-2px);
    }
  }
`;
const Question = styled(Front)`
  min-height: 100px;
  background: #ffffd5;
  position: relative;
  flex-direction: column;
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
const Answer = styled(Question)`
  height: auto;
`;
const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
`;
const ButtonTemplate = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: blue;
  border-radius: 5px;
  border: none;
  padding: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  &:hover {
    color: #fff;
    opacity: 70%;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-5px);
  }
`;
const ZapReaction = styled(ButtonTemplate)`
  background-color: #2fbe34;
`;
const AlmostReaction = styled(ButtonTemplate)`
  background-color: #ff922e;
`;
const NotReaction = styled(ButtonTemplate)`
  background-color: #ff3030;
`;
