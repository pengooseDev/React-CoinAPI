import { createGlobalStyle } from "styled-components";
import Router from "./Router";

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

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    );
};

export default App;
