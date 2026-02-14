import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary border-end" style={{ width: '260px', height: '100vh', position: 'sticky', top: 0 }}>
      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4 fw-bold text-primary">Istag Sports</span>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : 'link-body-emphasis'}`}>
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="/athletes" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'link-body-emphasis'}`}>
            Athletes
          </NavLink>
        </li>
        <li>
          <NavLink to="/sports" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'link-body-emphasis'}`}>
            Sports
          </NavLink>
        </li>
        <li>
          <NavLink to="/specialities" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'link-body-emphasis'}`}>
            Specialities
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'link-body-emphasis'}`}>
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;