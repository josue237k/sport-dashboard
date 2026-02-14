
import React from 'react';
import { useData } from '../contexts/DataContext.jsx';

const Home = () => {
  const { athletes, sports, specialities } = useData();

  return (
    <div className="container mt-4">
      <h2 className="mb-4">University Dashboard</h2>
      <div className="row g-4 text-center">
        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-4 bg-primary text-white">
            <h3>{athletes.length}</h3>
            <p className="mb-0">Athletes</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-4 bg-success text-white">
            <h3>{sports.length}</h3>
            <p className="mb-0">Sports</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-4 bg-warning text-dark">
            <h3>{specialities.length}</h3>
            <p className="mb-0">Specialities</p>
          </div>
        </div>
      </div>
      <div className="mt-5 p-4 bg-light rounded shadow-sm border text-dark">
        <h5>Quick Summary</h5>
        <p>This system allows managing student-athletes across different university sports and academic paths.</p>
      </div>
    </div>
  );
};

export default Home;
