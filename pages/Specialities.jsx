
import React, { useState } from 'react';
import { useData } from '../contexts/DataContext.jsx';
import Modal from '../components/Modal.jsx';

const Specialities = () => {
  const { specialities, addSpeciality, deleteSpeciality } = useData();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: '', description: '' });

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Specialities</h2>
        <button className="btn btn-warning" onClick={() => setShow(true)}>Add New</button>
      </div>

      <div className="list-group shadow-sm">
        {specialities.map(s => (
          <div key={s.specialityID} className="list-group-item d-flex justify-content-between align-items-center p-3">
            <div>
              <h6 className="mb-1 text-primary fw-bold">{s.name}</h6>
              <p className="mb-0 small text-muted">{s.description}</p>
            </div>
            <button className="btn btn-sm btn-outline-danger border-0" onClick={() => deleteSpeciality(s.specialityID)}>Delete</button>
          </div>
        ))}
      </div>

      <Modal show={show} onClose={() => setShow(false)} title="New Speciality">
        <form onSubmit={(e) => {
          e.preventDefault();
          addSpeciality(form);
          setShow(false);
          setForm({ name: '', description: '' });
        }}>
          <div className="mb-3">
            <label className="form-label">Code (e.g. WDI)</label>
            <input required className="form-control" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          </div>
          <div className="mb-4">
            <label className="form-label">Full Description</label>
            <input required className="form-control" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Add Speciality</button>
        </form>
      </Modal>
    </div>
  );
};

export default Specialities;
