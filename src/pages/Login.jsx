import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
// import logo from "../assets/logo.png";

const AuthPage = ({ handleLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    if (isLogin) {
      // Simulate login (replace with API call in real app)
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((u) => u.email === data.email && u.password === data.password);

      if (user) {
        handleLogin(user);
        navigate("/");
      } else {
        alert("Invalid email or password");
      }
    } else {
      // Simulate signup (replace with API call in real app)
      const newUser = { id: Date.now(), ...data };
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      handleLogin(newUser);
      navigate("/");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <AuthForm
          isLogin={isLogin}
          onSubmit={handleSubmit}
          onToggle={() => setIsLogin(!isLogin)}
        />
      </div>
    </div>
  );
};

export default AuthPage;