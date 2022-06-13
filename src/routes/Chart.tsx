import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import React from "react";
import styled from "styled-components";

//Param에 담겨있는, coinId
//DataFetch

interface ChartProps {
    coinId: string;
}

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

const ChartTitle = styled.div`
    margin-top: 15px;
    font-size: 25px;
    font-weight: 600;
    color: ${(props) => props.theme.accentColor};
`;

const Chart = ({ coinId }: ChartProps) => {
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
        fetchCoinHistory(coinId)
    );

    return (
        <>
            <ChartTitle>Chart</ChartTitle>
            {isLoading ? (
                "Loading"
            ) : (
                <ApexChart
                    type="line"
                    series={[
                        {
                            name: "ClosePrice",
                            data: data?.map((i) => i.close) as number[],
                        },
                        {
                            name: "OpenPrice",
                            data: data?.map((i) => i.open) as number[],
                        },
                        {
                            name: "HighestPrice",
                            data: data?.map((i) => i.high) as number[],
                        },
                        {
                            name: "LowestPrice",
                            data: data?.map((i) => i.low) as number[],
                        },
                    ]}
                    options={{
                        chart: {
                            toolbar: { show: false },
                            height: 500,
                            width: 500,
                            foreColor: "rgba(255,255,255,0.7)",
                        },
                        grid: { show: false },
                        labels: data?.map((i) =>
                            String(Math.ceil(Number(i.time_open) / 1000))
                        ) as string[],
                        stroke: { curve: "smooth", width: 3 },
                    }}
                />
            )}
        </>
    );
};

export default Chart;
