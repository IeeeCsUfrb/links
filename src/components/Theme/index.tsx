import { ThemeProvider } from "styled-components";
import { themeState } from "../../state/theme";
import { Dracula } from "../../themes/Dracula";
import { useRecoilValue } from "recoil";
import { ReactElement, JSXElementConstructor, ReactFragment } from "react";
import { Neve } from "../../themes/Neve";

export default function Theme(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | null
    | undefined;
}) {
  switch (useRecoilValue(themeState)) {
    case "Dracula":
      return (
        <>
          <ThemeProvider theme={Dracula}>{props.children}</ThemeProvider>
        </>
      );
    case "Neve":
      return (
        <>
          <ThemeProvider theme={Neve}>{props.children}</ThemeProvider>
        </>
      );
    default:
      return <></>;
  }
}
