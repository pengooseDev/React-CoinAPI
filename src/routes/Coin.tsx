import React from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
    const { coinId } = useParams();
    console.log(coinId);

    return <div>[{`${coinId}`}] CoinDetailPage</div>;
};

export default Coin;
