// src/components/AgencyPlanModal.jsx
import React, { useEffect, useState } from 'react';
import '../styles/agency_planModal.css'; 
import axios from 'axios';

export default function AgencyPlanModal({ isOpen, onClose }) {
  // dropdown data
  const [perspectives,   setPerspectives]   = useState([]);
  const [strategicGoals, setStrategicGoals] = useState([]);
  const [measurements,   setMeasurements]   = useState([]);

  // core form fields
  const [formData, setFormData] = useState({
    perspective: '',
    strategic_goal: '',
    measurement: '',
    base_value: '',
    aim: '',
    main_activity: '',
    beneficiary_community: '',
    beneficiary_body: '',
    budget_government: '',
    budget_public: '',
    budget_other: '',
  });

  // plan type & start year
  const [planType, setPlanType]     = useState(5);
  const [startYear, setStartYear]   = useState(new Date().getFullYear());

  // dynamic per-year values
  const [yearlyData, setYearlyData] = useState({});

  // fetch dropdown options once
  useEffect(() => {
    axios.get('/api/perspective/').then(res => setPerspectives(res.data));
    axios.get('/api/astrategicGoal/').then(res => setStrategicGoals(res.data));
    axios.get('/api/measurement/').then(res => setMeasurements(res.data));
  }, []);

  // regenerate year inputs whenever planType or startYear changes
  useEffect(() => {
    const yd = {};
    for (let i = 0; i < planType; i++) {
      const y = startYear + i;
      yd[y] = yearlyData[y] || '';
    }
    setYearlyData(yd);
  }, [planType, startYear]);

  const handleFormChange = e => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  };

  const handleYearChange = (year, val) => {
    setYearlyData(yd => ({ ...yd, [year]: val }));
  };

  const handleSubmit = () => {
    const payload = {
      ...formData,
      plan_type: planType,
      start_year: startYear,
      yearly_data: Object.fromEntries(
        Object.entries(yearlyData).map(([y, v]) => [y, parseFloat(v) || 0])
      ),
    };

    axios.post('/api/agency_plan/', payload)
      .then(() => {
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
        <h2 className="text-2xl font-bold mb-4 text-center">Agency Multi-Year Plan</h2>

        {/* Plan type & start year */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label>Plan length:</label>
            <select
              className="w-full border p-2 rounded"
              value={planType}
              onChange={e => setPlanType(Number(e.target.value))}
            >
              {[1,3,5,10].map(n => (
                <option key={n} value={n}>{n}-Year</option>
              ))}
            </select>
          </div>
          <div>
            <label>Start year:</label>
            <input
              type="number"
              className="w-full border p-2 rounded"
              value={startYear}
              onChange={e => setStartYear(Number(e.target.value) || new Date().getFullYear())}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Dropdowns */}
          <div>
            <label>Perspective:</label>
            <select
              name="perspective"
              className="w-full border p-2 rounded"
              value={formData.perspective}
              onChange={handleFormChange}
            >
              <option value="">Select</option>
              {perspectives.map(p => (
                <option key={p.id} value={p.id}>{p.perspective_name}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Strategic Goal:</label>
            <select
              name="strategic_goal"
              className="w-full border p-2 rounded"
              value={formData.strategic_goal}
              onChange={handleFormChange}
            >
              <option value="">Select</option>
              {strategicGoals.map(g => (
                <option key={g.id} value={g.id}>{g.strategic_goal}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Measurement:</label>
            <select
              name="measurement"
              className="w-full border p-2 rounded"
              value={formData.measurement}
              onChange={handleFormChange}
            >
              <option value="">Select</option>
              {measurements.map(m => (
                <option key={m.id} value={m.id}>{m.measurement_name}</option>
              ))}
            </select>
          </div>

          {/* Base & Aim */}
          <div>
            <label>Base value:</label>
            <input
              name="base_value"
              className="w-full border p-2 rounded"
              value={formData.base_value}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label>Aim:</label>
            <input
              name="aim"
              className="w-full border p-2 rounded"
              value={formData.aim}
              onChange={handleFormChange}
            />
          </div>

          {/* Dynamic year inputs */}
          {Object.entries(yearlyData).map(([year, val]) => (
            <div key={year}>
              <label>{year}:</label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={val}
                onChange={e => handleYearChange(year, e.target.value)}
              />
            </div>
          ))}

          {/* Main activity */}
          <div className="col-span-2">
            <label>Main Activity:</label>
            <textarea
              name="main_activity"
              className="w-full border p-2 rounded"
              value={formData.main_activity}
              onChange={handleFormChange}
            />
          </div>

          {/* Beneficiaries & Budgets */}
          <div>
            <label>Beneficiary (Community):</label>
            <input
              name="beneficiary_community"
              className="w-full border p-2 rounded"
              value={formData.beneficiary_community}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label>Beneficiary (Body):</label>
            <input
              name="beneficiary_body"
              className="w-full border p-2 rounded"
              value={formData.beneficiary_body}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label>Budget (Gov):</label>
            <input
              name="budget_government"
              className="w-full border p-2 rounded"
              value={formData.budget_government}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label>Budget (Public):</label>
            <input
              name="budget_public"
              className="w-full border p-2 rounded"
              value={formData.budget_public}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label>Other Budget:</label>
            <input
              name="budget_other"
              className="w-full border p-2 rounded"
              value={formData.budget_other}
              onChange={handleFormChange}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            className="btn bg-gray-300 px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="btn bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
