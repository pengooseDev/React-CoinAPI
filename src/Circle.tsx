import styled, { ThemeProvider } from "styled-components";
import React from "react";
/* Component Typing */
/* 
단순히 변수: type으로 선언해주는 방법도 있지만, 
interface를 Object로 선언한 뒤,
{ 변수명 }: interface명 해주는 방법도 있음.

*/

//Functional Component에 interface는 아래와 같은 방식으로 적용.

const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: white;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background: ${(props) => props.containerBgColor};
    border: 2px ${(props) => props.containerBorderColor} solid;
    transition: 0.15s ease-in-out;
    :hover {
        border-radius: 50px;
        transform: translate(50deg);
    }
`;

function Circle({ bgColor, borderColor }: CircleProps) {
    const [counter, setCounter] = React.useState<number>(1);

    const clickHandler = () => {
        return setCounter((prev) => prev + 1);
    };

    return (
        <Container
            onClick={clickHandler}
            containerBgColor={bgColor}
            //Input이 undifined인 경우 default값을 설정해주려면 ??로 설정.
            containerBorderColor={borderColor ?? "bisque"}
        >
            {counter}
        </Container>
    );
}
interface ContainerProps {
    containerBgColor: string;
    containerBorderColor?: string;
    text?: number;
}

interface CircleProps {
    bgColor: string;
    //required가 false인 경우 아래와 같이 ?기호를 추가.
    borderColor?: string;
}

export default Circle;

/* UserSchema */

export const UserInfDiv = ({ name = "DefaultText" }: UserSchema) => {
    return <div>{name}</div>;
};

interface UserSchema {
    name?: string;
}
