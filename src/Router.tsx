import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

interface IRouterProps {
    themeToggleHandler: () => void;
}

const Router = () => {
    return (
        <BrowserRouter basename="coin-test">
            <Routes>
                <Route path="/" element={<Coins />} />
                <Route path="/:coinId/*" element={<Coin />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
