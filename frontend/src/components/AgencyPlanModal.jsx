import React, { useEffect, useState } from 'react';
import '.Styles/AgencyBSCModal.css'; // Optional CSS file
import axios from 'axios';

const AgencyBSCModal = ({ isOpen, onClose }) => {
  const [perspectives, setPerspectives] = useState([]);
  const [strategicGoals, setStrategicGoals] = useState([]);
  const [measurements, setMeasurements] = useState([]);
  const [formData, setFormData] = useState({
    perspective: '',
    strategic_goal: '',
    measurement: '',
    base: '',
    aim: '',
    year2023: '',
    year2024: '',
    year2025: '',
    year2026: '',
    main_task: '',
    user: '',
    user_body: '',
    budget_gov: '',
    budget_community: '',
    budget_other: '',
  });

  // Fetch dropdown data
  useEffect(() => {
    axios.get('/api/perspective/').then(res => setPerspectives(res.data));
    axios.get('/api/astrategicGoal/').then(res => setStrategicGoals(res.data));
    axios.get('/api/measurement/').then(res => setMeasurements(res.data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post('/api/bscFiveYearPlan/', formData)
      .then(res => {
        alert('Submitted successfully');
        onClose();
      })
      .catch(err => {
        console.error(err);
        alert('Submission failed');
      });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content max-w-4xl mx-auto p-6 bg-white shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Agency's 5-Year Balanced Scorecard</h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Dropdowns */}
          <div>
            <label>Perspective:</label>
            <select name="perspective" value={formData.perspective} onChange={handleChange}>
              <option value="">Select</option>
              {perspectives.map(p => (
                <option key={p.id} value={p.id}>{p.Perspective}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Strategic Goal:</label>
            <select name="strategic_goal" value={formData.strategic_goal} onChange={handleChange}>
              <option value="">Select</option>
              {strategicGoals.map(g => (
                <option key={g.id} value={g.id}>{g.Strategic_Goals}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Measurement:</label>
            <select name="measurement" value={formData.measurement} onChange={handleChange}>
              <option value="">Select</option>
              {measurements.map(m => (
                <option key={m.id} value={m.id}>{m.Measurement}</option>
              ))}
            </select>
          </div>

          {/* Input Fields */}
          <div><label>Base:</label><input name="base" value={formData.base} onChange={handleChange} /></div>
          <div><label>Aim:</label><input name="aim" value={formData.aim} onChange={handleChange} /></div>
          <div><label>2023:</label><input name="year2023" value={formData.year2023} onChange={handleChange} /></div>
          <div><label>2024:</label><input name="year2024" value={formData.year2024} onChange={handleChange} /></div>
          <div><label>2025:</label><input name="year2025" value={formData.year2025} onChange={handleChange} /></div>
          <div><label>2026:</label><input name="year2026" value={formData.year2026} onChange={handleChange} /></div>
          <div className="col-span-2"><label>Main Task:</label><input name="main_task" value={formData.main_task} onChange={handleChange} className="w-full" /></div>
          <div><label>User:</label><input name="user" value={formData.user} onChange={handleChange} /></div>
          <div><label>User Body:</label><input name="user_body" value={formData.user_body} onChange={handleChange} /></div>
          <div><label>Budget (Gov):</label><input name="budget_gov" value={formData.budget_gov} onChange={handleChange} /></div>
          <div><label>Budget (Community):</label><input name="budget_community" value={formData.budget_community} onChange={handleChange} /></div>
          <div><label>Other Budget:</label><input name="budget_other" value={formData.budget_other} onChange={handleChange} /></div>
        </div>

        {/* Footer Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button className="btn bg-gray-300 px-4 py-2 rounded" onClick={onClose}>Close</button>
          <button className="btn bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AgencyBSCModal;
