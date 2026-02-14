import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student', theme: 'light' });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handle = (e) => {
    e.preventDefault();
    register({ ...form, id: Date.now() });
    navigate('/');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center py-5 min-vh-100">
      <div className="card p-4 shadow-lg border-0" style={{ width: '500px', borderRadius: '1.5rem' }}>
        <h3 className="text-center fw-bold mb-4 text-primary">Create Account</h3>
        <form onSubmit={handle} className="row g-3">
          <div className="col-12">
            <label className="form-label fw-bold">Full Name</label>
            <input required className="form-control" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          </div>
          <div className="col-12">
            <label className="form-label fw-bold">Email</label>
            <input required type="email" className="form-control" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          </div>
          <div className="col-12">
            <label className="form-label fw-bold">Password</label>
            <input required type="password" className="form-control" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">Role</label>
            <select className="form-select" value={form.role} onChange={e => setForm({...form, role: e.target.value})}>
              <option value="Administration">Administration</option>
              <option value="student">Student</option>
              <option value="coach">Coach</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">Default Theme</label>
            <select className="form-select" value={form.theme} onChange={e => setForm({...form, theme: e.target.value})}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="col-12 mt-4">
            <button className="btn btn-primary w-100 py-2 fw-bold shadow-sm">Sign Up</button>
          </div>
        </form>
        <p className="text-center mt-3 mb-0 small text-muted">
          Already have an account? <Link to="/login" className="text-decoration-none fw-bold">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;