import React from "react";
import styled from "styled-components";
//query에 params를 잡아내기 위해선 아래의 것을 사용.
import { Routes, Route, useParams, useLocation, Link } from "react-router-dom";
//params에서 object를 return함.
//key값은 react-router-dom의 Route에서 정한, path "/:이름"으로 옴.
import Chart from "./Chart";
import Price from "./Price";

interface RouteParams {
    coinId: string;
}

const Title = styled.div`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

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

const Loader = styled.div`
    text-align: center;
`;

const Overview = styled.div`
    display: flex;
    justify-content: space-around;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 5px;
`;

const OverviewItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span:first-child {
        font-size: 10px;
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
`;

const Description = styled.p`
    margin: 20px 0px;
`;

const Footer = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    color: ${(props) => props.theme.accentColor};

    & a {
        width: 90px;
        padding: 10px;
        border-radius: 3px;
        background: rgba(0, 0, 0, 0.3);
        transition: 0.2s ease-in-out;
        :hover {
            background: rgba(0, 0, 0, 0.6);
            color: white;
            cursor: pointer;
        }
    }
`;
interface nameState {
    name: string;
}

interface RouteState {
    state: nameState;
}

interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}

const Coin = () => {
    const [loading, setLoading] = React.useState(true);
    const { coinId } = useParams<keyof RouteParams>() as RouteParams; //const { coinId } = useParams<{coinId: string}>()
    //Route의 Link에서 State받아오기는 useLocation 사용. 이해 안되면 useLocation() 콘솔 찍어보기.
    const { state } = useLocation() as RouteState;
    const [info, setInfo] = React.useState<InfoData>();
    const [priceInfo, setPriceInfo] = React.useState<PriceData>();

    React.useEffect(() => {
        (async () => {
            const infoData = await (
                await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
            ).json();

            const priceData = await (
                await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
            ).json();

            setInfo(infoData);
            setPriceInfo(priceData);
            setLoading(false);
        })();
    }, [coinId]);

    return (
        <Container>
            <Header>
                <Title>
                    {state ? state.name : <Link to={"/"}>Home &rarr;</Link>}
                </Title>
            </Header>
            {loading ? (
                <Loader>Loading...</Loader>
            ) : (
                <>
                    <Overview>
                        <OverviewItem>
                            <span>Rank:</span>
                            <span>{info?.rank}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Symbol:</span>
                            <span>${info?.symbol}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Open Source:</span>
                            <span>{info?.open_source ? "Yes" : "No"}</span>
                        </OverviewItem>
                    </Overview>
                    <Description>{info?.description}</Description>
                    <Overview>
                        <OverviewItem>
                            <span>Total Suply:</span>
                            <span>{priceInfo?.total_supply}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Max Supply:</span>
                            <span>{priceInfo?.max_supply}</span>
                        </OverviewItem>
                    </Overview>
                    <Footer>
                        <Link to={"/"}>Home &rarr;</Link>
                    </Footer>
                    <Routes>
                        <Route path={`chart`} element={<Chart />} />
                        <Route path={`price`} element={<Price />} />
                    </Routes>
                </>
            )}
        </Container>
    );
};

export default Coin;
