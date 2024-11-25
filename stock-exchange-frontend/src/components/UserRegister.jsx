import React, { useState } from "react";
import { registerUser } from "../services/api";

const UserRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, passwordHash: password });
      alert("User registered successfully!");
    } catch (error) {
      alert("Error registering user!");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Register User</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};

export default UserRegister;
