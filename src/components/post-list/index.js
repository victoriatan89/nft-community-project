import React, {useEffect, useState} from "react";
import PostItem from "./post-item";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import kformatter from "../kformatter";
import {useProfile} from "../../contexts/profile-context";
import {useDispatch} from "react-redux";
import * as postsAction from "../../actions/posts-action";
import Comment from "../comment";
import CommentList from "./comment-list";

const PostList = ({posts}) => {
    const {slug, address} = useParams();
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();

    const {profile, checkLoggedIn} = useProfile();
    const [currentUser, setCurrentUser] = useState();
    const check = async () => {
        try {
            const user = await checkLoggedIn();
            setCurrentUser(user);
        } catch (e) {}
    }
    useEffect(() => {
        check();
    }, [])

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLike = async (post) => {
        if (!currentUser) {
            navigate('/signin');
        } else {
            const updatedPost = {
                ...post,
                likedBy: [
                    {
                        avatar: profile.avatar,
                        username: profile.name,
                        isVerified: profile.isVerified,
                        handle: profile.handle,
                        userId: profile._id,
                        likedAt: new Date()
                    },
                    ...post.likedBy
                ]
            }
            try {
                await postsAction.updatePost(dispatch, post._id, updatedPost);
            } catch (e) {
                alert("Failed to like this post.")
            }
        }
    }
    return (
        <div className="list-group">
            {
                posts.map && posts.map(post => {
                    return (
                        <div key={post._id} className="list-group-item">
                            <PostItem post={post}/>
                            <div className="btn-group float-end me-4 mb-2">
                                <Link className={`btn btn-outline-secondary ${query.get("postId") === post._id ? "active" : ""}`}
                                      to={`/details/${slug}/${address}?tab=community&postId=${post._id}`}>
                                    <i className="fa-regular fa-comment-dots"/>
                                    <span className={`${post.comments.length === 0 ? "visually-hidden" : "ms-2"}`}>
                                        {kformatter(post.comments.length)}
                                    </span>
                                </Link>
                                <button type="button" className="btn btn-outline-secondary"
                                        onClick={() => {handleLike(post)}}>
                                    <i className="fa-regular fa-heart"/>
                                    <span className={`${post.likedBy.length === 0 ? "visually-hidden" : "ms-2"}`}>
                                        {kformatter(post.likedBy.length)}
                                    </span>
                                </button>
                            </div>
                            {
                                query.get("postId") === post._id &&
                                <div className="ms-5 me-5" style={{"clear": "right"}}>
                                    <Comment postId={post._id}/>
                                    <CommentList comments={post.comments}/>
                                </div>
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default PostList;