import styled from "styled-components";
import ICard from "../../interfaces/ICard";

const Card_LinkTitle = styled.h2`
  color: ${(props) => props.theme.title};
  text-align: center;
  margin: 0.75em 0 0.25em 0;
  font-size: 18px;
`;
const Card_LinkText = styled.p`
  color: ${(props) => props.theme.subtext};
  text-align: center;
  font-size: 14px;
`;

const Card_MainContainer = styled.div`
  background-color: ${(props) => props.theme.fgColor};
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  margin: 0.5em;
  @media (max-width: 768px) {
    width: 90%;
  }
  &:hover {
    cursor: pointer;

    ${Card_LinkTitle} {
      color: ${(props) => props.theme.titleHover};
    }
  }
`;

const Card_Link = styled.a`
  text-decoration: none;
  display: flex;
  width: auto;
`;

export default function Card({ title, text, url }: ICard) {
  return (
    <Card_MainContainer>
      <Card_Link href={url} target="_blank" rel="noopener noreferrer">
        <div>
          <Card_LinkTitle>{title}</Card_LinkTitle>
          <Card_LinkText>{text}</Card_LinkText>
        </div>
      </Card_Link>
    </Card_MainContainer>
  );
}
