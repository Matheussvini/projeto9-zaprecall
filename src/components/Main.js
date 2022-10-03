import styled from "styled-components";
import CARDS from "./cards";
import Questions from "./Questions";
import logo from "../images/logo.png";
import { useState } from "react";
import Footer from "./Footer";
import PlayImg from "../images/seta_play.png";
import WelcomeUser from "./WelcomeUser";
import CongratUser from "./CongratUser";

export default function Main() {
  const [turnedCard, setTurnedCard] = useState([]);
  const [deck, setDeck] = useState(CARDS.react);
  const [goalDeck, setGoalDeck] = useState("");
  const [hits, setHits] = useState(0);
  const [loadingEnd, setLoadingEnd] = useState(false);
  const [achieved, setAchieved] = useState("");
  const [optionValue, setOptionValue] = useState("");
  const [array, setArray] = useState([
    <li>
      <img src={PlayImg} />
    </li>,
    <li>
      <img src={PlayImg} />
    </li>,
    <li>
      <img src={PlayImg} />
    </li>,
    <li>
      <img src={PlayImg} />
    </li>,
    <li>
      <img src={PlayImg} />
    </li>,
    <li>
      <img src={PlayImg} />
    </li>,
    <li>
      <img src={PlayImg} />
    </li>,
    <li>
      <img src={PlayImg} />
    </li>,
  ]);

  function endPage(a) {
    setAchieved(a);
    setLoadingEnd(true);
  }

  if (turnedCard.length === 8) {
    if (hits >= goalDeck) {
      setTimeout(() => endPage(true), 1000);
    } else {
      setTimeout(() => endPage(false), 1000);
    }
  }

  return (
    <>
      <WelcomeUser
        setDeck={setDeck}
        goalDeck={goalDeck}
        setGoalDeck={setGoalDeck}
        optionValue={optionValue}
        setOptionValue={setOptionValue}
      />
      <CongratUser
        goalDeck={goalDeck}
        hits={hits}
        loadingEnd={loadingEnd}
        achieved={achieved}
        optionValue={optionValue}
      />
      <ScreenContainer>
        <LogoContainer>
          <img src={logo} alt="Logo ZapRecall" />
          <h1>ZapRecall</h1>
        </LogoContainer>
        <Questions
          cards={deck}
          turnedCard={turnedCard}
          setTurnedCard={setTurnedCard}
          array={array}
          setArray={setArray}
          hits={hits}
          setHits={setHits}
        />
        <Footer
          turnedCardLength={turnedCard.length}
          cards={deck}
          array={array}
          setArray={setArray}
        />
      </ScreenContainer>
    </>
  );
}
const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 100px;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;
