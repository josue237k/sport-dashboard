
import React from 'react';
import { useData } from '../contexts/DataContext.jsx';

const Users = () => {
  const { users } = useData();

  return (
    <div className="container mt-4">
      <h2 className="mb-4">System Users</h2>
      <div className="row g-3">
        {users.map(u => (
          <div className="col-md-6" key={u.id}>
            <div className="card shadow-sm border-0 p-3 d-flex flex-row align-items-center">
              <div className="bg-light rounded-circle p-3 me-3">👤</div>
              <div>
                <h6 className="mb-0 fw-bold">{u.name}</h6>
                <p className="mb-0 small text-muted">{u.role} • {u.language}</p>
              </div>
              <div className="ms-auto">
                <span className={`badge ${u.defaultTheme === 'dark' ? 'bg-dark' : 'bg-light text-dark border'}`}>
                  {u.defaultTheme}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
