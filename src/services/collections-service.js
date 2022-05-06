import axios from "axios";
const MY_API = 'http://localhost:4000/api';
const MORALIS_API = "https://deep-index.moralis.io/api/v2";
const MORALIS_API_KEY = "EdXsLRbHteYll7JsZLeW3BEPeRGPa0vEMNdRfUhi5mSzvrkmX2xCuJMisfmzfPxk";

export const getRankings = async (type) => {
    const response = await axios.get(`${MY_API}/nft/rankings/${type}`);
    return response.data;
}

export const getCollectionBySlug = async (slug) => {
    const response = await axios.get(`${MY_API}/nft/collection/${slug}`);
    return response.data;
}

export const getAllTokenIds = async (token_address) => {
    const response = await axios.get(`${MORALIS_API}/nft/${token_address}?chain=eth&format=decimal`, {
        headers: {
            'x-api-key': MORALIS_API_KEY
        }
    });
    return response.data.result;
}

