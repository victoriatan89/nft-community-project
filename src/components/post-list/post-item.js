import React from "react";
import {Link} from "react-router-dom";

const PostItem = ({post}) => {
    return(
        <div className="d-flex">
            {
                post.avatar &&
                <Link to={`/profile/${post.userId}`}>
                    <img src={post.avatar} width="50px" height="50px" alt="avatar"
                         className="flex-shrink-0 rounded-circle me-3"/>
                </Link>
            }
            <div className="w-100">
                <h6 className="fw-bold">
                    { post.username && <span className="me-1">{post.username}</span> }
                    {
                        post.isVerified &&
                        <span className="fa-stack small me-1">
                            <i className="fa-solid fa-certificate fa-stack-2x"/>
                            <i className="fa-solid fa-check fa-stack-1x fa-inverse"/>
                        </span>
                    }
                    { post.handle && <small className="opacity-50 fw-normal me-1">@{post.handle}</small> }
                    {
                        post.createdAt &&
                        <small className="opacity-50 fw-normal">
                            - {new Date(post.createdAt).toLocaleString("en-US")}
                        </small>
                    }
                </h6>
                {/*<div dangerouslySetInnerHTML={{__html: post.caption}}/>*/}
                { post.post && <div className="me-4 mb-2">{post.post}</div> }
            </div>
        </div>
    );
}
export default PostItem;