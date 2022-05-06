import React, {useRef} from 'react';
import SecureContent from "../secure-content";
import {useProfile} from "../../contexts/profile-context";
import * as postsAction from "../../actions/posts-action";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

const Comment = ({postId}) => {
    const dispatch = useDispatch();
    const {slug, address} = useParams();
    const {profile} = useProfile();
    const postRef = useRef();
    const handleSend = async () => {
        if (!postId) {
            try {
                await postsAction.createPost(dispatch, {
                    avatar: profile.avatar,
                    username: profile.name,
                    isVerified: profile.isVerified,
                    handle: profile.handle,
                    userId: profile._id,
                    post: postRef.current.value,
                    slug: slug,
                    tokenAddress: address
                });
            } catch (e) {
                alert("Failed to create a new post.")
            }
        } else {
            try {
                await postsAction.addReply(dispatch, postId, {
                    avatar: profile.avatar,
                    username: profile.name,
                    isVerified: profile.isVerified,
                    handle: profile.handle,
                    userId: profile._id,
                    createdAt: new Date(),
                    post: postRef.current.value,
                });
            } catch (e) {
                alert("Failed to add a reply.")
            }
        }
    }
    return (
        <SecureContent>
            <div className="list-group-item d-flex pt-3 pb-3">
                {
                    profile && profile.avatar &&
                    <img src={profile.avatar} width="50px" height="50px" alt="avatar"
                         className="flex-shrink-0 rounded-circle me-3"/>
                }
                <div className="w-100 me-4">
                    <h6 className="fw-bold">
                        {
                            profile && profile.name &&
                            <span className="me-1">{profile.name}</span>
                        }
                        {
                            profile && profile.isVerified &&
                            <span className="fa-stack small me-1">
                                <i className="fa-solid fa-certificate fa-stack-2x"/>
                                <i className="fa-solid fa-check fa-stack-1x fa-inverse"/>
                            </span>
                        }
                        {
                            profile && profile.handle &&
                            <small className="opacity-50 fw-normal me-1">@{profile.handle}</small>
                        }
                    </h6>
                    <div className="input-group">
                        <input ref={postRef} type="text" className="form-control" placeholder="Add a comment..."/>
                        <button className="btn btn-outline-secondary" type="button"
                                onClick={handleSend}>
                            <i className="fa-solid fa-paper-plane"/>
                        </button>
                    </div>
                </div>
            </div>
        </SecureContent>
    );
};

export default Comment;