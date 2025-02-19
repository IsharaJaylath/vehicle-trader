import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.profilePicture} alt={user.name} className="user-card-image" />
      <h2>{user.name}</h2>
      <Link to={`/user/${user.id}`} className="user-card-link">
        View Profile
      </Link>
    </div>
  );
};

export default UserCard;