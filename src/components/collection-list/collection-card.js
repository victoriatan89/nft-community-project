import React from "react";
import "./collection-card.css"
import {NavLink} from "react-router-dom";

const CollectionCard = (
    {
        collection = {
            "slug": "cool-cats-nft",
            "name": "Cool Cats NFT",
            "symbol": "COOL",
            "stats": {
                "oneDayVolume": 127.5399,
                "oneDayChange": 0.0482444316594066,
                "oneDaySales": 14,
                "oneDayAveragePrice": 9.109992857142858,
                "sevenDayVolume": 1849.2619000000009,
                "sevenDayChange": 0.9948155840358653,
                "sevenDaySales": 206,
                "sevenDayAveragePrice": 8.976999514563111,
                "thirtyDayVolume": 7638.789629458237,
                "thirtyDayChange": 0.08632238570899434,
                "thirtyDaySales": 855,
                "thirtyDayAveragePrice": 8.934256876559342,
                "totalVolume": 97727.09518331502,
                "totalSales": 27041,
                "totalSupply": 9941,
                "count": 9941,
                "numOwners": 5387,
                "averagePrice": 3.6140340661704453,
                "numReports": 39,
                "marketCap": 89240.35217427189,
                "floorPrice": 8.5
            },
            "floorPrice": 8.5,
            "description": "Cool Cats is a collection of 9,999 randomly generated and stylistically curated NFTs that exist on the Ethereum Blockchain. Cool Cat holders can participate in exclusive events such as NFT claims, raffles, community giveaways, and more. Remember, all cats are cool, but some are cooler than others.\r\n\r\n- [Cool Cats Collabs](https://opensea.io/collection/cool-cats-collabs)\r\n- [Cool Cats Events](https://opensea.io/collection/cool-cats-events)\r\n- [Cool Cats Achievements](https://opensea.io/collection/cool-cats-achievements)\r\n- [Cool Cats Originals](https://opensea.io/collection/cool-cats-originals)",
            "contractAddress": "0x1a92f7381b9f03921564a437210bb9396471050c",
            "safelistRequestStatus": "verified",
            "isVerified": true,
            "bannerImageUrl": "https://lh3.googleusercontent.com/H4Iu36XQNJqVlF99-0BuQna0sUlUcIrHt97ss3le_tAWw8DveEBfTktX3S0bP6jpC9FhN1CKZjoYzZFXpWjr1xZfQIwSSLeDjdi0jw=s2500",
            "imageUrl": "https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s120",
            "social": {
                "discord": "https://discord.gg/X6A4AXrKaR",
                "medium": "coolcatsnft",
                "twitter": "coolcatsnft",
                "website": "http://coolcatsnft.com",
                "telegram": null,
                "instagram": null,
                "wiki": null
            },
            "createdAt": "2022-04-08T18:00:19.740Z"
        }
    }) => {
    return (
        <div className="col d-flex align-items-stretch">
            <NavLink className="card text-decoration-none shadow-sm"
                  to={`/details/${collection.slug}/${collection.contractAddress}`}>
                <img className="card-img-top collection-banner"
                     src={collection.bannerImageUrl} alt="banner"/>
                <div className="card-body text-center" style={{"position": "relative", "bottom": "60px"}}>
                    <img className="rounded-circle collection-thumbnail"
                         src={collection.imageUrl} alt="thumbnail"/>
                    <h6 className="card-title"><b>{collection.name}</b>
                        {
                            collection.isVerified &&
                            <span className="fa-stack small">
                                <i className="fa-solid fa-certificate fa-stack-2x"/>
                                <i className="fa-solid fa-check fa-stack-1x fa-inverse"/>
                            </span>
                        }
                    </h6>
                    <p className="card-text text-white opacity-50 multine-ellipsis">{collection.description}</p>
                </div>
            </NavLink>
        </div>
    )
}
export default CollectionCard;