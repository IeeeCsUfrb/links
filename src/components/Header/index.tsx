import Dropdown from "../Dropdown";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background: ${(props) => props.theme.bgColor};
  width: 100%;
`;

const ThemeOptions = ["Dracula", "Neve"];
export default function Header() {
  return (
    <>
      <HeaderContainer>
        <div>
          <Dropdown options={ThemeOptions}></Dropdown>
        </div>
      </HeaderContainer>
    </>
  );
}
