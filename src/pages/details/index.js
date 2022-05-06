import React, {useEffect, useState} from "react";
import CollectionDetails from "../../components/collection-details";
import {useParams} from "react-router-dom";
import * as service from "../../services/collections-service";

const Details = () => {
    const {slug} = useParams();
    const [collectionDetails, setCollectionDetails] = useState({});
    const getCollection = async () => {
        const collection = await service.getCollectionBySlug(slug);
        setCollectionDetails(collection);
    }
    useEffect(() => {
        getCollection();
    }, [])
    return (
        <div>
            <CollectionDetails collection={collectionDetails}/>
        </div>
    );
}

export default Details;