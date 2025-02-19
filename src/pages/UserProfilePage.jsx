import React from "react";
import { useParams } from "react-router-dom";
import UserProfile from "../components/UserProfile";

const users = [
  {
    id: 1,
    name: "John Doe",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Frontend developer passionate about building user-friendly web applications.",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    name: "Jane Smith",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Backend developer specializing in Node.js and databases.",
    skills: ["Node.js", "SQL", "MongoDB"],
  },
];

const UserProfilePage = () => {
  const { userId } = useParams();
  const user = users.find((u) => u.id === parseInt(userId));

  if (!user) {
    return <div>User not found!</div>;
  }

  return (
    <div className="user-profile-page">
      <h1>User Profile</h1>
      <UserProfile user={user} />
    </div>
  );
};

export default UserProfilePage;