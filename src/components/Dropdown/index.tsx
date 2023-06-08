import { SyntheticEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { themeState } from "../../state/theme";
import { v4 as uuidv4 } from "uuid";

interface IDropdown {
  options: string[];
}

const DropdownContainer = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 7em; 
  padding: 7px 15px;
  background: ${(props) => props.theme.fgColor};
  font-family ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.text};
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  `;

export default function Dropdown({ options }: IDropdown) {
  const [label, setLabel] = useState("Tema");
  const [visible, setVisible] = useState(false);
  const setTheme = useSetRecoilState(themeState);
  const DropdownOption = styled.div`
    display: ${visible ? "flex" : "none"};
    color: ${(props) => props.theme.subtext};
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.titleHover};
    }
  `;

  useEffect(() => {
    const handler = () => setVisible(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  const handleInputClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    setVisible(!visible);
  };
  return (
    <>
      <DropdownContainer onClick={handleInputClick}>
        {label}
        {options.map((i) => (
          <DropdownOption
            key={uuidv4()}
            onClick={() => {
              setTheme(`${i}`);
              setLabel(`${i}`);
            }}
          >{`${i}`}</DropdownOption>
        ))}
      </DropdownContainer>
    </>
  );
}
