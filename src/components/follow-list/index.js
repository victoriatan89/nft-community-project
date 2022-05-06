import React from 'react';
import FollowItem from "./follow-item";

const FollowList = ({users}) => {
    return (
        <ul className="list-group">
            {
                users && users.map && users.map(user => <FollowItem key={user._id} user={user}/>)
            }
        </ul>
    );
};

export default FollowList;