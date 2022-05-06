import React from 'react';
import UserItem from "./user-item";

const UserList = ({users}) => {
    return (
        <ul className="list-group">
            {
                users && users.map && users.map(user => <UserItem key={user._id} user={user}/>)
            }
        </ul>
    );
};

export default UserList;