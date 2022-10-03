import logo from "../images/logo.png";
import styled from "styled-components";
import { useState } from "react";
import CARDS from "./cards";

export default function WelcomeUser({
  setDeck,
  goalDeck,
  setGoalDeck,
  optionValue,
  setOptionValue,
}) {
  const [loadingPage, setLoadingPage] = useState(true);
  const [enableButton, setEnableButton] = useState(true);

  function load(value) {
    setLoadingPage(false);
    setDeck(CARDS[value]);
  }
  function option(e) {
    setOptionValue(e.target.value);
    if (goalDeck !== "") {
      setEnableButton(false);
    }
  }
  function goal(e) {
    const value = Number(e.target.value);
    console.log(value);
    if (value < 1 || value > 8 || value === NaN) {
      let newValue = prompt("Por favor insira uma meta de zaps entre 1 a 8");
      newValue = Number(newValue);
      while (newValue < 1 || newValue > 8 || newValue === NaN) {
        newValue = prompt("Por favor insira uma meta de zaps entre 1 a 8");
        newValue = Number(newValue);
      }
      setGoalDeck(newValue);
      if (optionValue !== "") {
        setEnableButton(false);
      }
    } else {
      setGoalDeck(value);
      if (optionValue !== "") {
        setEnableButton(false);
      }
    }
  }

  return (
    <Tela show={loadingPage}>
      <img src={logo} alt="Logo ZapRecall" />
      <h1>ZapRecall</h1>
      <select
        name="seletor"
        value={optionValue}
        onChange={(e) => option(e)}
        data-identifier="deck-selector"
      >
        <option value="" disabled selected data-identifier="deck-option">
          Escolha seu deck
        </option>
        <option value="react" data-identifier="deck-option">
          React
        </option>
        <option value="JavaScript" data-identifier="deck-option">
          JavaScript
        </option>
        <option value="html" data-identifier="deck-option">
          HTML
        </option>
      </select>
      <input
        placeholder="Digite sua meta de zaps..."
        onChange={(e) => goal(e)}
        value={goalDeck}
        data-identifier="goals-input"
      />
      <button
        onClick={() => load(optionValue)}
        disabled={enableButton}
        data-identifier="start-btn"
      >
        Iniciar Recall
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
    &:disabled {
      cursor: default;
      color: #c0c0c0;
      background: #e8e8e8;
      transition: none;
      box-shadow: none;
      &:hover,
      &:focus {
        all: initial;
      }
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
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #d70900;
    box-sizing: border-box;
  }
`;
