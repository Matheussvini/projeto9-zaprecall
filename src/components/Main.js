import styled from "styled-components";
import CARDS from "./cards";
import Questions from "./Questions";
import logo from '../images/logo.png'
import { useState } from "react";

export default function Main() {
    const [turnedCard, setTurnedCard] = useState([])
  return (
    <>
      <ScreenContainer>
        <LogoContainer>
            <img src={logo} alt="Logo ZapRecall" />
            <h1>ZapRecall</h1>
        </LogoContainer>


    
        <Questions cards={CARDS} turnedCard={turnedCard} setTurnedCard={setTurnedCard}/>
      

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
  padding-bottom: 200px;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
  width: 52px;
  }
  h1 {
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
}
`;
