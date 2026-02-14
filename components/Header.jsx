
import React from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useTheme } from '../contexts/ThemeContext.jsx';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom px-4 py-2">
      <div className="container-fluid">
        <span className="navbar-text fw-medium">
          Hello, <span className="text-primary">{currentUser?.name}</span>
          <span className="ms-2 badge bg-secondary-subtle text-secondary small">{currentUser?.role}</span>
        </span>
        <div className="ms-auto d-flex align-items-center gap-3">
          <button className="btn btn-outline-secondary btn-sm" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
          <button className="btn btn-danger btn-sm" onClick={logout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
