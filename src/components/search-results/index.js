import React, {useEffect, useState} from "react";
import CollectionList from "../collection-list";
import * as service from "../../services/collections-service";

const SearchResults = ({q = "azuki"}) => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        (async () => {
            const collection = await service.getCollectionBySlug(q);
            setResults([collection]);
        })();
    }, [q]);
    return (
        <div className="mb-5">
            <h2 className="text-center mb-5 fw-bold">Search Results</h2>
            <CollectionList collections={results}/>
        </div>
    );
}

export default SearchResults;