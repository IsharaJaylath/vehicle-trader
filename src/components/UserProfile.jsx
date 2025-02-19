import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="profile-card">
      <img src={user.profilePicture} alt={user.name} className="profile-picture" />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-bio">{user.bio}</p>
      <div className="profile-skills">
        <h3>Skills:</h3>
        <ul>
          {user.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;