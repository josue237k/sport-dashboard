import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handle = (e) => {
    e.preventDefault();
    if (login(name, password)) {
      navigate('/');
    } else {
      alert("wrong credentials");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg border-0" style={{ width: '400px', borderRadius: '1.5rem' }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold text-primary">Sport Dashboard Login</h3>
          <p className="text-muted small">Manage Istag sports</p>
        </div>
        <form onSubmit={handle}>
          <div className="mb-3">
            <label className="form-label small fw-bold">Name (Username)</label>
            <input 
              type="text" 
              required 
              className="form-control bg-light border-0 py-2" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              placeholder="enter your name" 
            />
          </div>
          <div className="mb-4">
            <label className="form-label small fw-bold">Password</label>
            <input 
              type="password" 
              required 
              className="form-control bg-light border-0 py-2" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder="enter your passowrd" 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 fw-bold shadow-sm">Sign In</button>
        </form>
        <div className="text-center mt-4">
          <p className="small text-muted mb-0">Don't have an account? <Link to="/register" className="text-decoration-none fw-bold">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;