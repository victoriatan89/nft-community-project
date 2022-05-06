import React, {useEffect, useState} from "react";
import * as collectionService from "../../services/collections-service";
import * as postService from "../../services/posts-service"
import * as userService from "../../services/users-service";
import Hero from "../../components/hero";
import RankingList from "../../components/ranking-list";
import {Link} from "react-router-dom";
import PostItem from "../../components/post-list/post-item";
import UserList from "../../components/user-list";
import SecureContent from "../../components/secure-content";
import {useProfile} from "../../contexts/profile-context";
import CollectionList from "../../components/collection-list";

const Home = () => {
    const [collections, setCollections] = useState();
    const getRankings = async () => {
        const rankings = await collectionService.getRankings("7d");
        setCollections(rankings.slice(0, 15));
    }
    const [posts, setPosts] = useState();
    const getMostRecentPosts = async () => {
        const latestPosts = await postService.getMostRecentPosts();
        setPosts(latestPosts);
    }
    const [users, setUsers] = useState();
    const getMostRecentUsers = async () => {
        const latestUsers = await userService.findMostRecentUsers();
        setUsers(latestUsers);
    }

    const {profile} = useProfile();
    const [myPosts, setMyPosts] = useState();
    const getPostsByUserId = async (userId) => {
        setMyPosts(await postService.getPostsByUserId(userId));
    }
    useEffect(() => {
        getRankings();
        getMostRecentPosts();
        getMostRecentUsers();
        getPostsByUserId(profile._id);
    }, []);
    return (
        <div>
            <Hero/>
            <div className="container mt-4 ps-5 pe-5">
                <h3 className="text-center fw-bold mb-5">Top collections over last 7 days</h3>
                <RankingList collections={collections}/>
                <div className="row mb-5">
                    <div className="col-12 col-lg-8 col-xxl-9">
                        <h3 className="text-center fw-bold mt-5 mb-5">Most recent posts</h3>
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
                    <div className="d-none d-lg-block col-lg-4 col-xxl-3">
                        <div>
                            <h3 className="text-center fw-bold mt-5 mb-5">Recently joined</h3>
                            <UserList users={users}/>
                        </div>
                    </div>
                </div>
                <SecureContent>
                    <h3 className="text-center fw-bold mt-5 mb-5">Your recent posts</h3>
                    <div className="list-group">
                        {
                            myPosts && myPosts.map && myPosts.map(post => {
                                return (
                                    <Link className="list-group-item"
                                          to={`/details/${post.slug}/${post.tokenAddress}?tab=community`}
                                          style={{color: 'inherit', textDecoration: 'inherit'}}>
                                        <PostItem post={post}/>
                                    </Link>
                                );
                            })
                        }
                    </div>
                    <h3 className="text-center fw-bold mt-5 mb-5">Your collections</h3>
                    <div className="mb-5">
                        {
                            profile && profile.watchlist &&
                            <CollectionList collections={profile.watchlist}/>
                        }
                    </div>
                </SecureContent>
            </div>
        </div>
    );
}

export default Home;