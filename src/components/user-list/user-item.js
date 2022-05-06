import React from 'react';
import {Link} from "react-router-dom";

const UserItem = ({user}) => {
    return (
        <Link to={`/profile/${user._id}`} className="list-group-item d-flex"
              style={{ color: 'inherit', textDecoration: 'inherit'}}>
            {
                user.avatar &&
                <img src={user.avatar} width="50px" height="50px" alt="avatar"
                     className="flex-shrink-0 rounded-circle me-2"/>
            }
            <div className="w-100">
                <h6 className="fw-bold mt-1 mb-1">
                    {user.name && <span className="me-1">{user.name}</span>}
                    {
                        user.isVerified &&
                        <span className="fa-stack small me-1">
                                <i className="fa-solid fa-certificate fa-stack-2x"/>
                                <i className="fa-solid fa-check fa-stack-1x fa-inverse"/>
                            </span>
                    }
                </h6>
                {
                    user.handle &&
                    <div className="opacity-50">
                        @{user.handle}
                        {
                            user.joinedDate &&
                            <small> - {new Date(user.joinedDate).toLocaleString("en-US").split(",")[0]}</small>
                        }
                    </div>
                }
            </div>
        </Link>
    );
};

export default UserItem;