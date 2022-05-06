import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CollectionList from "../../components/collection-list";
import SearchResults from "../../components/search-results";
import * as service from "../../services/collections-service";

const Explore = () => {
    const {q} = useParams();
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        (async () => {
            const rankings = await service.getRankings("7d");
            for (let i = 0; i < rankings.length; i++) {
                const collection = await service.getCollectionBySlug(rankings[i].slug);
                setCollections(collections => [...collections, collection]);
            }
        })();
    }, []);
    return (
        <div className="container mt-5">
            {q && q !== "" && <SearchResults q={q}/>}
            <h2 className="text-center mb-5 fw-bold">Explore Collections</h2>
            <CollectionList collections={collections}/>
        </div>
    );
}

export default Explore;