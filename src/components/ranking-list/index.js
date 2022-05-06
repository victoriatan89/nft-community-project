import React from 'react';
import RankingItem from "./ranking-item";

const RankingList = ({collections}) => {
    return (
        <div>
            <div className="list-group-item">
                <div className="row fw-bold">
                    <div className="col-4">Collection</div>
                    <div className="col align-self-center">Volume</div>
                    <div className="col align-self-center">Floor Price</div>
                    <div className="col align-self-center">Avg Price</div>
                    <div className="col align-self-center">Owners</div>
                    <div className="col align-self-center">Items</div>
                </div>
            </div>
            <ul className="list-group">
                {
                    collections && collections.map &&
                    collections.map(collection => <RankingItem collection={collection}/>)
                }
            </ul>
        </div>
    );
};

export default RankingList;