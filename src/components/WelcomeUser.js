import logo from "../images/logo.png";
import styled from "styled-components";
import { useState } from "react";
import CARDS from "./cards";

export default function WelcomeUser({ deck, setDeck }) {
  const [optionValue, setOptionValue] = useState("");
  const [loadingPage, setLoadingPage] = useState(true);
  const [goalDeck, setGoalDeck] = useState("");
  const [enableButton, setEnableButton] = useState(true);

  function load(value) {
    setLoadingPage(false);
    setDeck(CARDS[value]);
  }

//  if(optionValue !== "" && goalDeck !== "" ){
//    setEnableButton(false);
//    console.log("botao habilitado")
// }

  return (
    <Tela show={loadingPage}>
      <img src={logo} alt="Logo ZapRecall" />
      <h1>ZapRecall</h1>
      <select
        name="seletor"
        value={optionValue}
        onChange={(e) => setOptionValue(e.target.value)}
      >
        <option value="" disabled selected>
          Escolha seu deck
        </option>
        <option value="JavaScript">JavaScript</option>
        <option value="react">React</option>
      </select>
      <input
        placeholder="Digite sua meta de zaps..."
        onChange={(e) => setGoalDeck(e.target.value)}
        value={goalDeck}
      />
      <button onClick={() => 
      load(optionValue)} 
      disabled={enableButton}>
        Iniciar Recall!
      </button>
    </Tela>
  );
}

const Tela = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 3;
  background-color: #fb6b6b;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 136px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  h1 {
    margin: 30px 0;
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  button {
    width: 246px;
    height: 54px;
    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #d70900;
    cursor: pointer;
    transition: color 100ms;
    &:hover,
    &:focus {
      background-color: #e62143;
      color: #ffffff;
      border: 1px solid #ffffff;
    }
  }
  select {
    width: 246px;
    height: 54px;
    margin-bottom: 30px;
    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #d70900;
    cursor: pointer;
    transition: color 100ms;
    &:hover,
    &:focus {
      background-color: #e62143;
      color: #ffffff;
      border: 1px solid #ffffff;
    }
  }
  option[value=""][disabled] {
    display: none;
  }
  input {
    width: 246px;
    height: 54px;
    margin-bottom: 30px;
    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #d70900;
    box-sizing: border-box;
  }
`;
