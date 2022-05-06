import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import PublicInfo from "../../components/public-info";
import {useLocation} from "react-router-dom";
import CollectionList from "../../components/collection-list";
import FollowList from "../../components/follow-list";
import PostItem from "../../components/post-list/post-item";
import * as service from "../../services/posts-service";

const Tabs = ({userProfile}) => {
    const {id} = useParams();
    const [hide, setHide] = useState(true);
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const [posts, setPosts] = useState();
    const getPostsByUserId = async (userId) => {
        setPosts(await service.getPostsByUserId(userId));
    }
    useEffect(() => {
        getPostsByUserId(id);
    }, [id]);
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className={`nav-link ${!query.get("tab") ? "active" : ""}`}
                          to={`/profile/${id}`}>Public Info</Link>
                </li>
                <li className="nav-item dropdown">
                    <button className={`nav-link dropdown-toggle 
                    ${['watchlist', 'following', 'followers', 'posts'].includes(query.get("tab")) ? "active" : ""}`}
                            onClick={() => setHide(!hide)}>More</button>
                    <div className={`dropdown-menu ${hide ? "" : "show"}`}>
                        <Link className="dropdown-item" to={`/profile/${id}?tab=watchlist`}
                              onClick={() => setHide(true)}>Watchlist</Link>
                        <Link className="dropdown-item" to={`/profile/${id}?tab=following`}
                              onClick={() => setHide(true)}>Following</Link>
                        <Link className="dropdown-item" to={`/profile/${id}?tab=followers`}
                              onClick={() => setHide(true)}>Followers</Link>
                        <Link className="dropdown-item" to={`/profile/${id}?tab=posts`}
                              onClick={() => setHide(true)}>Posts</Link>
                    </div>
                </li>
            </ul>
            <div className="tab-content mt-3">
                <div className={`tab-pane fade ${!query.get("tab") ? "show active" : ""}`}>
                    <PublicInfo profile={userProfile}/>
                </div>
                <div className={`tab-pane fade ${query.get("tab") === 'watchlist' ? "show active" : ""}`}>
                    <h4 className="text-center fw-bold mb-3">My Watchlist</h4>
                    {
                        userProfile && userProfile.watchlist &&
                        <CollectionList collections={userProfile.watchlist}/>
                    }
                </div>
                <div className={`tab-pane fade ${query.get("tab") === 'following' ? "show active" : ""}`}>
                    <h4 className="text-center fw-bold mb-3">My Following</h4>
                    {
                        userProfile && userProfile.following &&
                        <FollowList users={userProfile.following}/>
                    }
                </div>
                <div className={`tab-pane fade ${query.get("tab") === 'followers' ? "show active" : ""}`}>
                    <h4 className="text-center fw-bold mb-3">My Followers</h4>
                    {
                        userProfile && userProfile.followers &&
                        <FollowList users={userProfile.followers}/>
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