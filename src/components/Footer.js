import styled from "styled-components";

export default function Footer({ turnedCard, cards, array }) {
  return (
    <Container>
      <p data-identifier="flashcard-counter">
        {turnedCard.length}/{cards.length} CONCLUÍDOS
      </p>
      <List>{array}</List>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    margin: 5px;
    margin-top: 10px;
  }
`;
