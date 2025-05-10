import React, { useEffect, useState } from 'react';
import '.Styles/directorplan.css';
import axios from 'axios';


const DirectorPlanModal = ({ isOpen, onClose }) => {
  const [perspectives, setPerspectives] = useState([]);
  const [strategicGoals, setStrategicGoals] = useState([]);
  const [measurements, setMeasurements] = useState([]);

  const [formData, setFormData] = useState({
    perspective: '',
    strategic_goal: '',
    measurement: '',
    kpi: '',
    base: '',
    aim: '',
    jan: '',
    feb: '',
    mar: '',
    apr: '',
    may: '',
    jun: '',
    jul: '',
    aug: '',
    sep: '',
    oct: '',
    nov: '',
    dec: '',
    budget: '',
    result: '',
    accountable: ''
  });

  useEffect(() => {
    axios.get('/api/perspective/').then(res => setPerspectives(res.data));
    axios.get('/api/director-strategic-goal/').then(res => setStrategicGoals(res.data));
    axios.get('/api/measurement/').then(res => setMeasurements(res.data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post('/api/director_plan/', formData)
      .then(res => {
        alert('Plan submitted successfully!');
        onClose();
      })
      .catch(err => {
        console.error(err);
        alert('Failed to submit plan.');
      });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content max-w-5xl mx-auto p-6 bg-white shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Director’s Balanced Scorecard Plan</h2>

        <div className="grid grid-cols-2 gap-4">
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
              {strategicGoals.map(goal => (
                <option key={goal.id} value={goal.id}>{goal.Strategic_Goals}</option>
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

          <div><label>KPI:</label><input name="kpi" value={formData.kpi} onChange={handleChange} /></div>
          <div><label>Base Value:</label><input name="base" value={formData.base} onChange={handleChange} /></div>
          <div><label>Aim:</label><input name="aim" value={formData.aim} onChange={handleChange} /></div>

          {/* Monthly inputs */}
          {[
            'jan', 'feb', 'mar', 'apr', 'may', 'jun',
            'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
          ].map((month) => (
            <div key={month}>
              <label>{month.toUpperCase()}:</label>
              <input name={month} value={formData[month]} onChange={handleChange} />
            </div>
          ))}

          <div><label>Budget:</label><input name="budget" value={formData.budget} onChange={handleChange} /></div>
          <div><label>Result:</label><input name="result" value={formData.result} onChange={handleChange} /></div>
          <div><label>Accountable:</label><input name="accountable" value={formData.accountable} onChange={handleChange} /></div>
        </div>

        {/* Footer buttons */}
        <div className="mt-6 flex justify-end gap-4">
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">FirstRecord</button>
          <button type="button" class="btn btn-primary">NextRecord</button>
          <button type="button" class="btn btn-primary">LastRecord</button>
          <button type="button" class="btn btn-primary">AddRecord</button>
          <button type="button" class="btn btn-primary">DeleteRecord</button>
          <button type="button" class="btn btn-primary">AddiInfo</button>
          <button type="button" class="btn btn-primary">Preview</button>
          </div>
        <button onClick ={onClose}type="button" class="modal-close-btn" data-bs-dismiss="modal">Close</button>
          <button className="btn bg-gray-300 px-4 py-2 rounded" onClick={onClose}>Close</button>
          <button className="btn bg-green-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default DirectorPlanModal;
