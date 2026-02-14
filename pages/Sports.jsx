
import React, { useState } from 'react';
import { useData } from '../contexts/DataContext.jsx';
import Modal from '../components/Modal.jsx';

const Sports = () => {
  const { sports, addSport, updateSport, deleteSport } = useData();
  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: '', description: '', individual: false });

  const handleSave = (e) => {
    e.preventDefault();
    if (editId) updateSport(editId, form);
    else addSport(form);
    setShow(false);
  };

  const openForm = (s = null) => {
    if (s) { setEditId(s.id); setForm(s); }
    else { setEditId(null); setForm({ name: '', description: '', individual: false }); }
    setShow(true);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Istag Sports</h2>
        <button className="btn btn-success" onClick={() => openForm()}>Add Sport</button>
      </div>
      <div className="row g-3">
        {sports.map(s => (
          <div className="col-md-6 col-lg-4" key={s.id}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="mb-0 text-primary fw-bold">{s.name}</h5>
                  <span className={`badge ${s.individual ? 'bg-info' : 'bg-warning'} text-dark`}>
                    {s.individual ? 'Solo' : 'Team'}
                  </span>
                </div>
                <p className="small text-muted">{s.description}</p>
                <div className="mt-3 d-flex gap-2">
                  <button className="btn btn-sm btn-link p-0 text-decoration-none" onClick={() => openForm(s)}>Edit</button>
                  <button className="btn btn-sm btn-link p-0 text-danger text-decoration-none" onClick={() => deleteSport(s.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={show} onClose={() => setShow(false)} title="Sport Details">
        <form onSubmit={handleSave}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input required className="form-control" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
          </div>
          <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" checked={form.individual} id="isInd" onChange={e => setForm({...form, individual: e.target.checked})} />
            <label className="form-check-label" htmlFor="isInd">Individual sport?</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Save Sport</button>
        </form>
      </Modal>
    </div>
  );
};

export default Sports;
