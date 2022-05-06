import React from "react";
import kFormatter from "../kformatter";
import "./nft-card.css"

const NftCard = (
    {
        nft = {
            "token_address": "0xed5af388653567af2f388e6224dc7c4b3241c544",
            "token_id": "9999",
            "amount": "1",
            "contract_type": "ERC721",
            "name": "Azuki",
            "symbol": "AZUKI",
            "token_uri": "https://ikzttp.mypinata.cloud/ipfs/QmQFkLSQysj94s5GvTHPyzTxrawwtjgiiYS2TBLgrvw8CW/9999",
            "metadata": "{\n  \"name\": \"Azuki #9999\",\n  \"image\": \"https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/9999.png\",\n  \"attributes\": [\n    {\n      \"trait_type\": \"Type\",\n      \"value\": \"Human\"\n    },\n    {\n      \"trait_type\": \"Hair\",\n      \"value\": \"Blue Short Spiky\"\n    },\n    {\n      \"trait_type\": \"Headgear\",\n      \"value\": \"Straw Hat\"\n    },\n    {\n      \"trait_type\": \"Face\",\n      \"value\": \"Bandaid\"\n    },\n    {\n      \"trait_type\": \"Clothing\",\n      \"value\": \"Dress Shirt\"\n    },\n    {\n      \"trait_type\": \"Eyes\",\n      \"value\": \"Closed\"\n    },\n    {\n      \"trait_type\": \"Mouth\",\n      \"value\": \"Closed\"\n    },\n    {\n      \"trait_type\": \"Offhand\",\n      \"value\": \"Shinai\"\n    },\n    {\n      \"trait_type\": \"Background\",\n      \"value\": \"Off White D\"\n    }\n  ]\n}",
            "synced_at": "2022-04-07T06:52:46.519Z",
            "stats": {
                "comments": 297,
                "views": 98420,
                "likes": 599,
                "retweets": 301
            }
        }
    }) => {
    if (nft.metadata) {
        let data = nft.metadata;
        data = data.replace(/\\n/g, "\\n")
            .replace(/\\'/g, "\\'")
            .replace(/\\"/g, '\\"')
            .replace(/\\&/g, "\\&")
            .replace(/\\r/g, "\\r")
            .replace(/\\t/g, "\\t")
            .replace(/\\b/g, "\\b")
            .replace(/\\f/g, "\\f");
        data = JSON.parse(data);
        nft = {...nft, metadata: data};

        if (nft.metadata.image && nft.metadata.image.includes("ipfs")) {
            let tokenUrl = nft.metadata.image;
            tokenUrl = tokenUrl.replace("ipfs://", "https://gateway.moralisipfs.com/ipfs/");
            nft.metadata = {...nft.metadata, image: tokenUrl};
        }
    }
    return (
        <div className="col d-flex align-items-stretch">
            <div className="card shadow-sm mb-3">
                {
                    nft.metadata && nft.metadata.image &&
                    <img className="card-img-top" src={nft.metadata.image} alt="nft"/>
                }
                {
                    nft.token_id &&
                    <div className="card-body fw-bold">
                        <div className="text-white">No. {nft.token_id}</div>
                    </div>
                }
                {
                    nft.stats &&
                    <div className="card-footer d-flex justify-content-between">
                        <span><i className="fa-regular fa-comment-dots"/> {nft.stats.comments}</span>
                        <span><i className="fa-regular fa-eye"/> {kFormatter(nft.stats.views)}</span>
                        <span><i className="fa-regular fa-heart"/> {nft.stats.likes}</span>
                        <span><i className="fa-solid fa-retweet"/> {nft.stats.retweets}</span>
                    </div>
                }
            </div>
        </div>
    );
}

export default NftCard;