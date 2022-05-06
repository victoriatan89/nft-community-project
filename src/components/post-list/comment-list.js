import React from 'react';
import PostItem from "./post-item";

const CommentList = ({comments}) => {
    return (
        <div className="list-group">
            {
                comments && comments.map && comments.map(comment => {
                    return (
                        <div className="list-group-item">
                            <PostItem post={comment}/>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default CommentList;