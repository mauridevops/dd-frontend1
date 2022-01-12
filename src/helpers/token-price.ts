import axios from "axios";

const cache: { [key: string]: number } = {};

export const loadTokenPrices = async () => {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=busd,tether&vs_currencies=usd";
    const { data } = await axios.get(url);

    cache["UST"] = data["busd"].usd;
    cache["FRAX"] = data["tether"].usd;
};

export const getTokenPrice = (symbol: string): number => {
    return Number(cache[symbol]);
};
