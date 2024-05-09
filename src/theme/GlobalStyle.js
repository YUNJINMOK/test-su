import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset} 
body{
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
}

* {
  word-break: keep-all;
  font-family: "Noto Sans KR", sans-serif;
  --mainGreen: #119724;
  --subGreen: #1bcc34;
  }
`;
