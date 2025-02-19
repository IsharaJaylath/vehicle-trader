import React from "react";
import UserCard from "../components/UserCard";
import Header from "../components/Header";
import HeaderImage from "../components/HeaderIamge";
import Tabs from "../components/Tabs/TabComponent";
import ProductSlider from "../components/ProductSlider";
import Footer from "../components/Footer";
import ProductView from "../components/ProductView";

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

const Home = () => {
  return (
    <div className="home-page">
      {/* <h1>User List</h1>
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div> */}
         <Header />
      <HeaderImage />
      <ProductView />
      <Tabs />
      <ProductSlider />
      <Footer />
    </div>
  );
};

export default Home;