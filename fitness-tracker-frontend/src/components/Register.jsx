import React, { useState } from 'react';
import axios from 'axios';
import './AuthPage.css';

const Register = () => {
  const [name, setName] = useState('');       // New state for name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8088/api/users/register', {
        name,    // Include name in payload
        email,
        password
      });
      setMessage('Registration successful!');
    } catch (err) {
      console.error(err);
      setMessage('Registration failed.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        {message && <div className="success-message">{message}</div>}
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button className="auth-button">Register</button>
        </form>
        <p>Already have an account? <a href="/login">Login here</a></p>
      </div>
    </div>
  );
};

export default Register;
