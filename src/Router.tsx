import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "routes/Coins";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/:coinId" element={<Coin />} />
                <Route path="/" element={<Coins />} />
            </Routes>
        </BrowserRouter>
    );
};
/*
Router6에선 Switch가 아닌 Routes를 사용하며, 
Route가 일반태그에서 SelfClosingTag로 변경되었다. 
따라서 props에 element로 필요한 태그 넣어주기.
*/

export default Router;
