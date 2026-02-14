
import React, { useState } from 'react';
import { useData } from '../contexts/DataContext.jsx';
import Modal from '../components/Modal.jsx';

const Athletes = () => {
  const { athletes, sports, specialities, levels, addAthlete, updateAthlete, deleteAthlete } = useData();
  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ name: '', age: 20, gender: 'Male', levelID: 1, specialityID: 1, enrollSports: [] });

  const toggleSport = (id) => {
    const list = formData.enrollSports.includes(id)
      ? formData.enrollSports.filter(s => s !== id)
      : [...formData.enrollSports, id];
    setFormData({ ...formData, enrollSports: list });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editId) updateAthlete(editId, formData);
    else addAthlete(formData);
    setShow(false);
  };

  const openForm = (a = null) => {
    if (a) {
      setEditId(a.id);
      setFormData(a);
    } else {
      setEditId(null);
      setFormData({ name: '', age: 20, gender: 'Male', levelID: 1, specialityID: 1, enrollSports: [] });
    }
    setShow(true);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Athletes</h2>
        <button className="btn btn-primary" onClick={() => openForm()}>Add Athlete</button>
      </div>

      <div className="table-responsive bg-white rounded shadow-sm border">
        <table className="table table-hover mb-0">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Age/Gender</th>
              <th>Level</th>
              <th>Speciality</th>
              <th>Sports</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {athletes.map(a => (
              <tr key={a.id}>
                <td><strong>{a.name}</strong></td>
                <td>{a.age} / {a.gender}</td>
                <td>{levels.find(l => l.levelID === Number(a.levelID))?.name}</td>
                <td>{specialities.find(s => s.specialityID === Number(a.specialityID))?.name}</td>
                <td>{a.enrollSports.map(sid => sports.find(s => s.id === sid)?.name).join(', ')}</td>
                <td className="text-end">
                  <button className="btn btn-sm btn-outline-info me-2" onClick={() => openForm(a)}>Edit</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => deleteAthlete(a.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={show} onClose={() => setShow(false)} title={editId ? "Edit Athlete" : "New Athlete"}>
        <form onSubmit={handleSave} className="row g-3">
          <div className="col-12">
            <label className="form-label">Full Name</label>
            <input required className="form-control" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Age</label>
            <input type="number" className="form-control" value={formData.age} onChange={e => setFormData({ ...formData, age: Number(e.target.value) })} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <select className="form-select" value={formData.gender} onChange={e => setFormData({ ...formData, gender: e.target.value })}>
              <option>Male</option><option>Female</option><option>Other</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Level</label>
            <select className="form-select" value={formData.levelID} onChange={e => setFormData({ ...formData, levelID: Number(e.target.value) })}>
              {levels.map(l => <option key={l.levelID} value={l.levelID}>{l.name}</option>)}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Speciality</label>
            <select className="form-select" value={formData.specialityID} onChange={e => setFormData({ ...formData, specialityID: Number(e.target.value) })}>
              {specialities.map(s => <option key={s.specialityID} value={s.specialityID}>{s.name}</option>)}
            </select>
          </div>
          <div className="col-12">
            <label className="form-label">Enroll Sports</label>
            <div className="d-flex flex-wrap gap-2">
              {sports.map(s => (
                <button key={s.id} type="button" className={`btn btn-sm ${formData.enrollSports.includes(s.id) ? 'btn-success' : 'btn-outline-secondary'}`} onClick={() => toggleSport(s.id)}>
                  {s.name}
                </button>
              ))}
            </div>
          </div>
          <div className="col-12 mt-4">
            <button type="submit" className="btn btn-primary w-100">Save</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Athletes;
