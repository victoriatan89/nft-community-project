import React, {useEffect, useState} from 'react';
import * as service from "../../services/collections-service";
import {Link} from "react-router-dom";
import kformatter from "../kformatter";

const RankingItem = ({collection}) => {
    const [item, setItem] = useState();
    const getCollectionBySlug = async (slug) => {
        const c = await service.getCollectionBySlug(slug);
        setItem(c);
    }
    useEffect(() => {
        getCollectionBySlug(collection.slug);
    }, [])
    return (
        <div>
            {
                item &&
                <Link to={`details/${item.slug}/${item.contractAddress}`}
                      style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-4 text-nowrap overflow-hidden">
                                <img src={item.imageUrl} width="50px" height="50px" alt="logo" className="rounded-circle me-2"/>
                                <span className="fw-bold text-white">{item.name}</span>
                                {
                                    item.isVerified &&
                                    <span className="fa-stack small me-1">
                                        <i className="fa-solid fa-certificate fa-stack-2x"/>
                                        <i className="fa-solid fa-check fa-stack-1x fa-inverse"/>
                                    </span>
                                }
                            </div>
                            <div className="col text-nowrap overflow-hidden align-self-center">
                                <i className="fa-brands fa-ethereum me-1"/>
                                {
                                    item.stats && item.stats.sevenDayVolume &&
                                    <span>{item.stats.sevenDayVolume.toFixed(2)}</span>
                                }
                            </div>
                            <div className="col text-nowrap overflow-hidden align-self-center">
                                <i className="fa-brands fa-ethereum me-1"/>
                                {
                                    item.stats && item.stats.floorPrice &&
                                    <span>{item.stats.floorPrice.toFixed(2)}</span>
                                }
                            </div>
                            <div className="col text-nowrap overflow-hidden align-self-center">
                                <i className="fa-brands fa-ethereum me-1"/>
                                {
                                    item.stats && item.stats.sevenDayAveragePrice &&
                                    <span>{item.stats.sevenDayAveragePrice.toFixed(2)}</span>
                                }
                            </div>
                            <div className="col text-nowrap overflow-hidden align-self-center">
                                {
                                    item.stats && item.stats.numOwners &&
                                    <span>{kformatter(item.stats.numOwners)}</span>
                                }
                            </div>
                            <div className="col text-nowrap overflow-hidden align-self-center">
                                {
                                    item.stats && item.stats.count &&
                                    <span>{kformatter(item.stats.count)}</span>
                                }
                            </div>
                        </div>
                    </li>
                </Link>
            }
        </div>
    );
};

export default RankingItem;