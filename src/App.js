import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AuthPage from "./pages/Login";
import Home from "./pages/Home";
import "./App.css";
import UserProfilePage from "./pages/UserProfilePage";
import Navbar from "./components/navbar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in (e.g., from localStorage)
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={!isAuthenticated ? <Home /> : <Navigate to="/auth" />}
          />
          {/* <Route
            path="/auth"
            element={<AuthPage handleLogin={handleLogin} />}
          />
               <Route
            path="/user/:userId"
            element={!isAuthenticated ? <UserProfilePage /> : <Navigate to="/login" />}
          /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;