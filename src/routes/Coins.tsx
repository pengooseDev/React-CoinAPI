import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding: 0 20px;
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

const coins = [
    {
        id: "btc-bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        rank: 1,
        is_new: false,
        is_active: true,
        type: "coin",
    },
    {
        id: "eth-ethereum",
        name: "Ethereum",
        symbol: "ETH",
        rank: 2,
        is_new: false,
        is_active: true,
        type: "coin",
    },
    {
        id: "hex-hex",
        name: "HEX",
        symbol: "HEX",
        rank: 3,
        is_new: false,
        is_active: true,
        type: "token",
    },
];

const Coins = () => {
    return (
        <>
            <Container>
                <Header>
                    <Title></Title>
                </Header>
                <CoinList>
                    {coins.map((i) => (
                        <Coin key={i.id}>
                            <Link to={`/${i.id}`}>{i.name} &rarr;</Link>
                        </Coin>
                    ))}
                </CoinList>
            </Container>
        </>
    );
};

export default Coins;
