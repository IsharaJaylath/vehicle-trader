import React, { useState } from "react";

const AuthForm = ({ isLogin, onSubmit, onToggle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>{isLogin ? "Login" : "Signup"}</h2>
      {!isLogin && (
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      )}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span onClick={onToggle} className="toggle-link">
          {isLogin ? "Signup" : "Login"}
        </span>
      </p>
    </form>
  );
};

export default AuthForm;