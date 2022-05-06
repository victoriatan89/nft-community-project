import React from "react";
import "./index.css"
import SocialLinks from "./social-links";
import Stats from "./stats";
import Tabs from "./tabs";
import {useProfile} from "../../contexts/profile-context";
import SecureContent from "../secure-content";

const CollectionDetails = (
    {
        collection = {
            "slug": "doodles-official",
            "name": "Doodles",
            "symbol": "DOODLE",
            "stats": {
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
            },
            "floorPrice": 15.8,
            "description": "A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury.",
            "contractAddress": "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e",
            "safelistRequestStatus": "verified",
            "isVerified": true,
            "bannerImageUrl": "https://lh3.googleusercontent.com/svc_rQkHVGf3aMI14v3pN-ZTI7uDRwN-QayvixX-nHSMZBgb1L1LReSg1-rXj4gNLJgAB0-yD8ERoT-Q2Gu4cy5AuSg-RdHF9bOxFDw=s2500",
            "imageUrl": "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s120",
            "social": {
                "discord": "https://discord.gg/doodles",
                "medium": null,
                "twitter": "doodles",
                "website": "https://doodles.app",
                "telegram": null,
                "instagram": null,
                "wiki": null
            },
            "createdAt": "2022-04-19T18:20:57.778Z"
        }
    }) => {
    const {profile, insertCollectionToWatchlist} = useProfile();
    const handleAddToWatchlist = async () => {
        try {
            await insertCollectionToWatchlist(profile._id, collection);
            alert("Successfully added to your watchlist");
        } catch (e) {
            alert("Failed to add collection. The reason may be because this collection is already in your watchlist.");
        }
    }
    return (
        <div>
            {
                collection.bannerImageUrl &&
                <img className="banner mb-5" src={collection.bannerImageUrl} alt="banner"/>
            }
            <div className="d-flex float-end">
                <SecureContent>
                    <button className="btn btn-lg btn-outline-dark me-2"
                            onClick={handleAddToWatchlist}>
                        <span><i className="fa-solid fa-plus me-2"/>Watchlist</span>
                    </button>
                </SecureContent>
                {
                    collection.social &&
                    <div className="me-5">
                        <SocialLinks links={collection.social}/>
                    </div>
                }
            </div>
            {
                collection.imageUrl &&
                <div className="d-flex justify-content-center w-100">
                    <img className="thumbnail rounded-circle" src={collection.imageUrl} alt="thumbnail"/>
                </div>
            }
            {
                collection.name &&
                <div className="d-flex justify-content-center align-items-baseline w-100">
                    <h3 className="fw-bold">{collection.name}</h3>
                    {
                        collection.isVerified &&
                        <span className="fa-stack">
                            <i className="fa-solid fa-certificate fa-stack-2x"/>
                            <i className="fa-solid fa-check fa-stack-1x fa-inverse"/>
                        </span>
                    }
                </div>
            }
            {
                collection.stats &&
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <Stats stats={collection.stats}/>
                </div>
            }
            {
                collection.description &&
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <p className="w-50 text-center justify-content-center">{collection.description}</p>
                </div>
            }
            <Tabs/>
        </div>
    );
}

export default CollectionDetails;