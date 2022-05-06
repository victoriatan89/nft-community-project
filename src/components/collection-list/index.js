import React from "react";
import CollectionCard from "./collection-card";

const CollectionList = (
    {
        collections = [
            {
                "slug": "cool-cats-nft",
                "name": "Cool Cats NFT",
                "symbol": "COOL",
                "stats": {
                    "oneDayVolume": 103.83,
                    "oneDayChange": -0.23665581286267676,
                    "oneDaySales": 11,
                    "oneDayAveragePrice": 9.43909090909091,
                    "sevenDayVolume": 1846.0755400000014,
                    "sevenDayChange": 1.450631620226112,
                    "sevenDaySales": 204,
                    "sevenDayAveragePrice": 9.049389901960792,
                    "thirtyDayVolume": 7514.743269458238,
                    "thirtyDayChange": 0.07135362359147775,
                    "thirtyDaySales": 837,
                    "thirtyDayAveragePrice": 8.978187896604824,
                    "totalVolume": 97830.98513946582,
                    "totalSales": 27052,
                    "totalSupply": 9941,
                    "count": 9941,
                    "numOwners": 5383,
                    "averagePrice": 3.6164048920399905,
                    "numReports": 40,
                    "marketCap": 89959.98501539223,
                    "floorPrice": 8.39
                },
                "floorPrice": 8.39,
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
                "createdAt": "2022-04-09T17:24:14.969Z"
            },
            {
                "slug": "azuki",
                "name": "Azuki",
                "symbol": "AZUKI",
                "stats": {
                    "oneDayVolume": 444.088,
                    "oneDayChange": -0.3248264129084638,
                    "oneDaySales": 16,
                    "oneDayAveragePrice": 27.7555,
                    "sevenDayVolume": 9149.434316116389,
                    "sevenDayChange": -0.5917488525997102,
                    "sevenDaySales": 276,
                    "sevenDayAveragePrice": 33.15012433375503,
                    "thirtyDayVolume": 50846.74984132915,
                    "thirtyDayChange": 0.8992877370390392,
                    "thirtyDaySales": 2444,
                    "thirtyDayAveragePrice": 20.80472579432453,
                    "totalVolume": 178032.91312109018,
                    "totalSales": 21569,
                    "totalSupply": 10000,
                    "count": 10000,
                    "numOwners": 5466,
                    "averagePrice": 8.254110673702545,
                    "numReports": 2,
                    "marketCap": 331501.2433375503,
                    "floorPrice": 24.99
                },
                "floorPrice": 24.99,
                "description": "Take the red bean...View the collection at [azuki.com/gallery](https://azuki.com/gallery).\n\nAzuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner of the internet where artists, builders, and web3 enthusiasts meet to create a decentralized future. Azuki holders receive access to exclusive drops, experiences, and more. Visit [azuki.com](https://azuki.com) for more details.\n\nWe rise together. We build together. We grow together.",
                "contractAddress": "0xed5af388653567af2f388e6224dc7c4b3241c544",
                "safelistRequestStatus": "verified",
                "isVerified": true,
                "bannerImageUrl": "https://lh3.googleusercontent.com/O0XkiR_Z2--OPa_RA6FhXrR16yBOgIJqSLdHTGA0-LAhyzjSYcb3WEPaCYZHeh19JIUEAUazofVKXcY2qOylWCdoeBN6IfGZLJ3I4A=s2500",
                "imageUrl": "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s120",
                "social": {
                    "discord": "https://discord.gg/azuki",
                    "medium": null,
                    "twitter": null,
                    "website": "http://www.azuki.com",
                    "telegram": null,
                    "instagram": "azukiofficial",
                    "wiki": null
                },
                "createdAt": "2022-04-09T17:56:51.516Z"
            },
            {
                "slug": "clonex",
                "name": "CLONE X - X TAKASHI MURAKAMI",
                "symbol": "CloneX",
                "stats": {
                    "oneDayVolume": 726.3701209990002,
                    "oneDayChange": 0.06715515239341217,
                    "oneDaySales": 33,
                    "oneDayAveragePrice": 22.01121578784849,
                    "sevenDayVolume": 13662.346772690677,
                    "sevenDayChange": 1.8481705041914211,
                    "sevenDaySales": 607,
                    "sevenDayAveragePrice": 22.507984798501937,
                    "thirtyDayVolume": 29279.694632978106,
                    "thirtyDayChange": 0.2628812643089882,
                    "thirtyDaySales": 1527,
                    "thirtyDayAveragePrice": 19.174652673855995,
                    "totalVolume": 169250.94399073423,
                    "totalSales": 14585,
                    "totalSupply": 19192,
                    "count": 19192,
                    "numOwners": 8874,
                    "averagePrice": 11.60445279333111,
                    "numReports": 177,
                    "marketCap": 431973.2442528492,
                    "floorPrice": 19.25
                },
                "floorPrice": 19.25,
                "description": "🧬 CLONE X 🧬\r\n\r\n20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸",
                "contractAddress": "0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b",
                "safelistRequestStatus": "verified",
                "isVerified": true,
                "bannerImageUrl": "https://lh3.googleusercontent.com/4elUtz8UyFYDH34vDxd4hpQX8S-EdkFq8s9ombkuQTDBWLwHvsjRM_RXWT2zX8Vt2bAiO2BHslwN57FyTW1JIn_FyFI0BsZfmvmeJQ=s2500",
                "imageUrl": "https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s120",
                "social": {
                    "discord": "https://discord.gg/RTFKT",
                    "medium": null,
                    "twitter": "RTFKTstudios",
                    "website": "http://www.rtfkt.com",
                    "telegram": null,
                    "instagram": "RTFKTSTUDIOS",
                    "wiki": null
                },
                "createdAt": "2022-04-09T17:57:32.983Z"
            },
            {
                "slug": "boredapeyachtclub",
                "name": "Bored Ape Yacht Club",
                "symbol": "BAYC",
                "stats": {
                    "oneDayVolume": 585,
                    "oneDayChange": -0.16903527125671694,
                    "oneDaySales": 5,
                    "oneDayAveragePrice": 117,
                    "sevenDayVolume": 5754.01480403,
                    "sevenDayChange": -0.4117979985284108,
                    "sevenDaySales": 49,
                    "sevenDayAveragePrice": 117.42887355163265,
                    "thirtyDayVolume": 69157.17997766685,
                    "thirtyDayChange": 1.3131726976207139,
                    "thirtyDaySales": 646,
                    "thirtyDayAveragePrice": 107.05445816976292,
                    "totalVolume": 486989.9008662641,
                    "totalSales": 25513,
                    "totalSupply": 9999,
                    "count": 9999,
                    "numOwners": 6418,
                    "averagePrice": 19.087912078793718,
                    "numReports": 7,
                    "marketCap": 1174171.306642775,
                    "floorPrice": 108
                },
                "floorPrice": 108,
                "description": "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details.",
                "contractAddress": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
                "safelistRequestStatus": "verified",
                "isVerified": true,
                "bannerImageUrl": "https://lh3.googleusercontent.com/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs=s2500",
                "imageUrl": "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120",
                "social": {
                    "discord": "https://discord.gg/3P5K3dzgdB",
                    "medium": null,
                    "twitter": "BoredApeYC",
                    "website": "http://www.boredapeyachtclub.com/",
                    "telegram": null,
                    "instagram": "boredapeyachtclub",
                    "wiki": null
                },
                "createdAt": "2022-04-09T17:58:14.144Z"
            },
            {
                "slug": "doodles-official",
                "name": "Doodles",
                "symbol": "DOODLE",
                "stats": {
                    "oneDayVolume": 149.26000000000002,
                    "oneDayChange": 0.12475383196095581,
                    "oneDaySales": 9,
                    "oneDayAveragePrice": 16.584444444444447,
                    "sevenDayVolume": 4136.8417694484815,
                    "sevenDayChange": 0.7339701985677116,
                    "sevenDaySales": 248,
                    "sevenDayAveragePrice": 16.68081358648581,
                    "thirtyDayVolume": 14736.582863062587,
                    "thirtyDayChange": 0.5069400482247235,
                    "thirtyDaySales": 994,
                    "thirtyDayAveragePrice": 14.825536079539827,
                    "totalVolume": 102395.31384703853,
                    "totalSales": 20855,
                    "totalSupply": 10000,
                    "count": 10000,
                    "numOwners": 4635,
                    "averagePrice": 4.9098688011047,
                    "numReports": 66,
                    "marketCap": 166808.13586485814,
                    "floorPrice": 15.6
                },
                "floorPrice": 15.6,
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
                "createdAt": "2022-04-09T17:59:02.825Z"
            }
        ]
    }) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-3">
            {
                collections.map && collections.map(collection => {
                    return(
                        <CollectionCard key={collection.slug} collection={collection}/>
                    )
                })
            }
        </div>
    );
}

export default CollectionList;