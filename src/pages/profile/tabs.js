import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import PublicInfo from "../../components/public-info";
import PrivateInfo from "./private-info";
import {useProfile} from "../../contexts/profile-context";
import {useLocation} from "react-router-dom";
import CollectionCard from "../../components/collection-list/collection-card";
import FollowList from "../../components/follow-list";
import * as postsAction from "../../actions/posts-action";
import {useDispatch, useSelector} from "react-redux";
import PostItem from "../../components/post-list/post-item";

const Tabs = () => {
    const {profile, deleteCollectionFromWatchlist} = useProfile();
    const [hide, setHide] = useState(true);
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const handleDeleteCollection = async (collection) => {
        try {
            await deleteCollectionFromWatchlist(profile._id, collection);
            alert("Successfully deleted");
        } catch (e) {
            alert("Failed to delete collection");
        }
    }
    const posts = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        postsAction.getPostsByUserId(dispatch, profile._id);
    }, [])
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className={`nav-link ${!query.get("tab") ? "active" : ""}`}
                          to='/profile'>Public Info</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${query.get("tab") === "private" ? "active" : ""}`}
                          to={'/profile?tab=private'}>Private Info</Link>
                </li>
                <li className="nav-item dropdown">
                    <button className={`nav-link dropdown-toggle 
                    ${['watchlist', 'following', 'followers', 'posts'].includes(query.get("tab")) ? "active" : ""}`}
                            onClick={() => setHide(!hide)}>More</button>
                    <div className={`dropdown-menu ${hide ? "" : "show"}`}>
                        <Link className="dropdown-item" to={'/profile?tab=watchlist'}
                              onClick={() => setHide(true)}>Watchlist</Link>
                        <Link className="dropdown-item" to={'/profile?tab=following'}
                              onClick={() => setHide(true)}>Following</Link>
                        <Link className="dropdown-item" to={'/profile?tab=followers'}
                              onClick={() => setHide(true)}>Followers</Link>
                        <Link className="dropdown-item" to={'/profile?tab=posts'}
                              onClick={() => setHide(true)}>Posts</Link>
                    </div>
                </li>
            </ul>
            <div className="tab-content mt-3">
                <div className={`tab-pane fade ${!query.get("tab") ? "show active" : ""}`}>
                    <PublicInfo profile={profile}/>
                </div>
                <div className={`tab-pane fade ${query.get("tab") === 'private' ? "show active" : ""}`}>
                    <PrivateInfo/>
                </div>
                <div className={`tab-pane fade ${query.get("tab") === 'watchlist' ? "show active" : ""}`}>
                    <h4 className="text-center fw-bold mb-3">My Watchlist</h4>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-3">
                        {
                            profile && profile.watchlist && profile.watchlist.map && profile.watchlist.map(collection => {
                                return(
                                    <div key={collection.slug}>
                                        <CollectionCard collection={collection}/>
                                        <button type="button" className="btn btn-danger"
                                                style={{"position": "relative", "bottom": "50px", "left": "220px"}}
                                                onClick={() => handleDeleteCollection(collection)}>
                                            Delete
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={`tab-pane fade ${query.get("tab") === 'following' ? "show active" : ""}`}>
                    <h4 className="text-center fw-bold mb-3">My Following</h4>
                    {
                        profile && profile.following &&
                        <FollowList users={profile.following}/>
                    }
                </div>
                <div className={`tab-pane fade ${query.get("tab") === 'followers' ? "show active" : ""}`}>
                    <h4 className="text-center fw-bold mb-3">My Followers</h4>
                    {
                        profile && profile.followers &&
                        <FollowList users={profile.followers}/>
                    }
                </div>
                <div className={`tab-pane fade ${query.get("tab") === 'posts' ? "show active" : ""}`}>
                    <h4 className="text-center fw-bold mb-3">My Posts</h4>
                    <div className="list-group">
                        {
                            posts && posts.map && posts.map(post => {
                                return (
                                    <Link className="list-group-item"
                                          to={`/details/${post.slug}/${post.tokenAddress}?tab=community`}
                                          style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                        <PostItem post={post}/>
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;