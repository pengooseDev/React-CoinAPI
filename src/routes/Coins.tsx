import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
    padding: 0 20px;
    margin: 0 auto;
    max-width: 500px;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
    background: white;
    color: ${(props) => props.theme.bgColor};
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 5px;
    font-weight: 600;
    transition: 0.2s ease-in-out;
    &:hover {
        background: rgba(0, 0, 0, 0.2);
        color: ${(props) => props.theme.accentColor};
        cursor: pointer;
    }
`;

const Title = styled.div`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

const Coins = () => {
    const [coins, setCoin] = React.useState<CoinInterface[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            const response = await fetch(
                "https://api.coinpaprika.com/v1/coins"
            );
            const json = await response.json();
            const coinData = [...json.slice(0, 100)];
            setCoin(coinData);
            setLoading(false);
        })();
    }, []);

    const Loader = styled.div`
        text-align: center;
    `;

    return (
        <>
            <Container>
                <Header>
                    <Title>Coins</Title>
                </Header>
                {loading ? (
                    <Loader>Loading...</Loader>
                ) : (
                    <CoinList>
                        {coins.map((i) => (
                            <Coin key={i.id}>
                                <Link to={`/${i.id}`}>{i.name} &rarr;</Link>
                            </Coin>
                        ))}
                    </CoinList>
                )}
            </Container>
        </>
    );
};

export default Coins;
