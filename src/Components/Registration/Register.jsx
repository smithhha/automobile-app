// src/Register.js
import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", {
        username,
        email,
        password,
      });
    } catch (error) {
      console.error("There was an error registering the user!", error);
    }
  };

  const senUserTo = useNavigate();

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        <p>Already a family member?</p>
        <button onClick={()=>{senUserTo("/login")}}>Go to Login</button>
      </form>
    </div>
  );
};

export default Register;
