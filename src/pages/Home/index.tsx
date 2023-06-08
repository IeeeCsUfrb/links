import cards from "../../data/cards.json";
import Card from "../../components/Card";
import ICard from "../../interfaces/ICard";
import { v4 as uuidv4 } from "uuid";
import Bug from "../../images/bug.svg";
import styled from "styled-components";
const Home_MainContainer = styled.main`
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-family: ${(props) => props.theme.fontFamily};
  align-items: center;
`;

const Home_HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Home_HeroText = styled.p`
  color: ${(props) => props.theme.text};
  text-align: center;
  font-size: 18px;
`;

const Home_Logo = styled.img`
  position: static;
  width: 100px;
  height: auto;
`;
export default function Home() {
  return (
    <Home_MainContainer>
      <Home_HeroContainer>
        <div>
          <Home_Logo src={Bug} />
        </div>
        <div>
          <a></a>
          <a></a>
          <a></a>
        </div>
        <Home_HeroText>
          Capítulo estudantil do IEEE na UFRB voltado para a computação.
          Buscamos fomentar a comunidade de programação dentro da universidade e
          produzir conteúdos da área para todos.
        </Home_HeroText>
      </Home_HeroContainer>
      {cards.data.map((i: ICard) => {
        return (
          <Card key={uuidv4()} title={i.title} text={i.text} url={i.url}></Card>
        );
      })}
    </Home_MainContainer>
  );
}
