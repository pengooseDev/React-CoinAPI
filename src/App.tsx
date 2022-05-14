import React from "react";
import Circle, { UserInfDiv } from "./Circle";

const App = () => {
    return (
        <div>
            <UserInfDiv name={"Pengoose"}></UserInfDiv>
            <Circle bgColor={"teal"} borderColor={"black"}></Circle>
            <Circle bgColor={"tomato"}></Circle>
        </div>
    );
};

export default App;
