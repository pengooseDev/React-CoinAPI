import React from "react";
import styled from "styled-components";

const App = () => {
    const Container = styled.div`
        color: ${(props) => props.theme.textColor};
        background: ${(props) => props.theme.bgColor};
        font-weight: 600;
        padding: 10px;
        border-radius: 5px;
        border: solid 2px black;
        text-align: center;
    `;

    return (
        <div>
            <Container>123</Container>
        </div>
    );
};

export default App;
