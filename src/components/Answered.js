import ZapImg from "../images/icone_certo.png";
import AlmostImg from "../images/icone_quase.png";
import NotImg from "../images/icone_erro.png";
import styled from "styled-components";

export default function Answered({ result, numberQuest, setCardFace }) {
  switch (result) {
    case "Zap":
      setCardFace("");
      return (
        <Finish color={"green"}>
          <p>Pergunta {numberQuest}</p>
          <img src={ZapImg} alt="Ícone de resposta correto" />
        </Finish>
      );
    case "Almost":
      setCardFace("");
      return (
        <Finish color={"orange"}>
          <p>Pergunta {numberQuest}</p>
          <img src={AlmostImg} alt="Ícone de resposta quase correta" />
        </Finish>
      );
    case "Not":
      setCardFace("");
      return (
        <Finish color={"red"}>
          <p>Pergunta {numberQuest}</p>
          <img src={NotImg} alt="Ícone de resposta errada" />
        </Finish>
      );
    default:
      return "";
  }
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
const Finish = styled(Front)`
  display: flex;
  color: ${(props) => props.color};
  p {
    color: ${(props) => props.color};
    text-decoration: line-through;
  }
  img{
    cursor: default;
    transition: initial;
    &:hover{
      all: initial;
    }
  }
`;
