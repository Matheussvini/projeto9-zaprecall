import logo from "../images/logo.png";
import styled from "styled-components";
import { useState } from "react";

export default function WelcomeUser(props) {
    const [loadingPage, setLoadingPage] = useState(true);
    return(
        <Tela show={loadingPage}>
        <img src={logo} alt="Logo ZapRecall" />
        <h1>ZapRecall</h1>
        <button onClick={() => setLoadingPage(false)}>Iniciar Recall!</button>
      </Tela>
    )
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
    &:hover,&:focus{
        background-color: #e62143;
        color: #ffffff;
        border: 1px solid #ffffff;
    }
  }
`;