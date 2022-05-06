import React, {useEffect, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import NftList from "../nft-list";
import * as collectionsService from "../../services/collections-service";
import PostList from "../post-list";
import Comment from "../comment";
import {useDispatch, useSelector} from "react-redux";
import * as postsAction from "../../actions/posts-action"

const Tabs = () => {
    const posts = useSelector((state) => state);
    const dispatch = useDispatch();
    const {slug, address} = useParams();
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const [items, setItems] = useState([]);
    const getItems = async () => {
        const nfts = await collectionsService.getAllTokenIds(address);
        setItems(nfts);
    }
    useEffect(() => {
        getItems();
        postsAction.getPostsBySlug(dispatch, slug);
    }, [dispatch, slug])
    return (
        <div className="container">
            <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item">
                    <Link className={`nav-link ${!query.get("tab") ? "active" : ""}`}
                          to={`/details/${slug}/${address}`}>
                        <i className="fa-solid fa-table-cells fa-fw me-2"/>Items
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${query.get("tab") === "community" ? "active" : ""}`}
                          to={`/details/${slug}/${address}?tab=community`}>
                        <i className="fa-regular fa-comments fa-fw me-2"/>Community
                    </Link>
                </li>
            </ul>
            <div className="tab-content">
                <div className={`tab-pane fade mt-4 ${!query.get("tab") ? "show active" : ""}`}>
                    <NftList nfts={items}/>
                </div>
                <div className={`tab-pane fade mb-4 ${query.get("tab") === "community" ? "show active" : ""}`}>
                    <Comment/>
                    <PostList posts={posts}/>
                </div>
            </div>
        </div>
    );
}

export default Tabs;