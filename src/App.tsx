import { createGlobalStyle } from "styled-components";
import Router from "./Router";
//React Query의 데이터를 보기위해선 devtools버젼으로 Import후 라우터 아래 컴포넌트 넣어주기.
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "theme";
import React from "react";
import styled from "styled-components";
import { isDarkAtom } from "./atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

//createGlobalStyle는 전역적으로 styleComponents를 설정해줄 때 사용.
//SelfClosingTag로 사용하며, 아래있는 Components를 globalScope로 Style관리.
//그래서 reset.css를 아래의 컴포넌트에 넣어줌.
const GlobalStyle = createGlobalStyle`
//
//
//
//
//
//   Font
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

body{
    transition: 0.2s ease-in-out;
    font-family: 'Source Sans Pro', sans-serif;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor}; 
}

//   Reset CSS
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

//+a reset

a{
    text-decoration: none;
    color: inherit;
    //default값은 inline임. display를 block으로 바꿔줌으로써, div전체가 클릭 가능해짐.
    display: block;
}

* {
    box-sizing: border-box;
}
`;

const ThemeToggleBtn = styled.div`
    position: fixed;
    top: -5px;
    right: 10px;
    width: 150px;
    height: 40px;

    background: white;
    color: black;
    display: inline;
    padding: 10px;
    border-radius: 3px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    :hover {
        background: rgba(0, 0, 0, 0.6);
        color: whitesmoke;
    }
`;

const App = () => {
    const isDark = useRecoilValue(isDarkAtom);
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const themeToggleHandler = () => {
        setDarkAtom((prev) => !prev);
    };

    return (
        <>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <ThemeToggleBtn onClick={themeToggleHandler}>
                    {isDark ? "Light Mode" : "Dark Mode"}
                </ThemeToggleBtn>
                <GlobalStyle />
                <Router />
                <ReactQueryDevtools initialIsOpen={true} />
            </ThemeProvider>
        </>
    );
};

export default App;
