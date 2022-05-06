import React from "react";
import kFormatter from "../kformatter";

const Stats = (
    {
        stats = {
            "oneDayVolume": 257.96,
            "oneDayChange": 0.06125807380589948,
            "oneDaySales": 14,
            "oneDayAveragePrice": 18.425714285714285,
            "sevenDayVolume": 2421.723560000001,
            "sevenDayChange": 0.8220723884786286,
            "sevenDaySales": 145,
            "sevenDayAveragePrice": 16.701541793103456,
            "thirtyDayVolume": 12466.127742879251,
            "thirtyDayChange": 0.052351616908943945,
            "thirtyDaySales": 792,
            "thirtyDayAveragePrice": 15.740060281413196,
            "totalVolume": 105257.48973685512,
            "totalSales": 21030,
            "totalSupply": 10000,
            "count": 10000,
            "numOwners": 4736,
            "averagePrice": 5.005111257102003,
            "numReports": 69,
            "marketCap": 167015.41793103455,
            "floorPrice": 15.8
        }
    }) => {
    return (
        <div className="row row-cols-auto g-5">
            {
                stats.count &&
                <div className="col text-center">
                    <h5 className="fw-bold">{kFormatter(stats.count)}</h5>
                    items
                </div>
            }
            {
                stats.numOwners &&
                <div className="col text-center">
                    <h5 className="fw-bold">{kFormatter(stats.numOwners)}</h5>
                    owners
                </div>
            }
            {
                stats.floorPrice &&
                <div className="col text-center">
                    <h5 className="fw-bold"><i className="fa-brands fa-ethereum"/> {kFormatter(stats.floorPrice)}</h5>
                    floor price
                </div>
            }
            {
                stats.totalVolume &&
                <div className="col text-center">
                    <h5 className="fw-bold"><i className="fa-brands fa-ethereum"/> {kFormatter(stats.totalVolume)}</h5>
                    volume traded
                </div>
            }
        </div>
    );
}

export default Stats;