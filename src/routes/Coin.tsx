import React from "react";
import styled from "styled-components";
//query에 params를 잡아내기 위해선 아래의 것을 사용.
import { useParams, useLocation, Link } from "react-router-dom";
//params에서 object를 return함.
//key값은 react-router-dom의 Route에서 정한, path "/:이름"으로 옴.

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

interface PriceData {}

const Coin = () => {
    const [loading, setLoading] = React.useState();
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
        })();
    }, []);

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
                    <div>{priceInfo?.quotes.USD.ath_date || "Loading..."}</div>
                    <div>{info ? info.description : "Loading..."}</div>
                </>
            )}
        </Container>
    );
};

export default Coin;
