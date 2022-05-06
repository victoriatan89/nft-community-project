import React from "react";
import NftCard from "./nft-card";

const NftList = ({nfts}) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-3">
            {
                nfts.map && nfts.map(nft => <NftCard key={nft.token_id} nft={nft}/>)
            }
        </div>
    );
}

export default NftList;