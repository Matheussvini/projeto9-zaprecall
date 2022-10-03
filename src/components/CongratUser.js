import logo from "../images/logo.png";
import styled from "styled-components";
import { useState } from "react";

export default function CongratUser({ goalDeck, hits, loadingEnd, achieved }) {
  function Texto() {
    if (achieved) {
      return (
        <p>
          Parabéns, você bateu a sua meta de {goalDeck} zaps e fez {hits} zaps!
        </p>
      );
    } else {
      return (
        <p>
          Poxa! Você não alcançou a sua meta de {goalDeck} zaps e fez apenas{" "}
          {hits} zaps. Estude mais um pouco e tente novamente.
        </p>
      );
    }
  }

  return (
    <EndScreen show={loadingEnd}>
      <img src={logo} alt="" />
      <h1>ZapRecall</h1>
      <Texto />
      <button onClick={window.reload}>Restart ZapRecall</button>
    </EndScreen>
  );
}

const EndScreen = styled.div`
  width: 350px;
  height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  background-color: #d8201a;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 40px 40px 10px rgba(0, 0, 0, 0.5);
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
  p {
    margin: 0 40px;
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
  }
  button {
    width: 246px;
    height: 54px;
    margin-top: 30px;
    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 600;
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
`;
