import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchCoins } from "api";
import { Helmet } from "react-helmet";

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
    background: ${(props) => props.theme.cardBgColor};
    color: ${(props) => props.theme.textColor};
    margin-bottom: 10px;
    border-radius: 5px;
    font-weight: 600;
    transition: 0.2s ease-in-out;
    &:hover {
        background: rgba(0, 0, 0, 0.5);
        color: ${(props) => props.theme.accentColor};
        cursor: pointer;
    }
    & a {
        display: block;
        padding: 20px;
    }
`;

const Title = styled.div`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

const CoinWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Loader = styled.div`
    text-align: center;
`;

const CoinImg = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 10px;
`;

const Coins = () => {
    //react-query
    //const { 로딩여부, return 데이터 } = useQuery("unique key값", 사용할 함수promise를 return해야함.);
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
    return (
        <>
            <Container>
                <Helmet>
                    <title>Coins</title>
                </Helmet>
                <Header>
                    <Title>Coins</Title>
                </Header>
                {isLoading ? (
                    <Loader>Loading...</Loader>
                ) : (
                    <CoinList>
                        {data?.map((i) => (
                            <Coin key={i.id}>
                                <Link
                                    to={{
                                        pathname: `/${i.id}`,
                                    }}
                                    state={{
                                        name: i.name,
                                    }}
                                >
                                    <CoinWrapper>
                                        <CoinImg
                                            src={`https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/${i.name
                                                .toLowerCase()
                                                .split(" ")
                                                .join("-")}.png`}
                                        />
                                        {i.name} &rarr;
                                    </CoinWrapper>
                                </Link>
                            </Coin>
                        ))}
                    </CoinList>
                )}
            </Container>
        </>
    );
};

export default Coins;
