export const fetchCoins = async () => {
    return fetch(`https://api.coinpaprika.com/v1/coins/`)
        .then((res) => res.json())
        .then((res) => res.slice(0, 100));
};
