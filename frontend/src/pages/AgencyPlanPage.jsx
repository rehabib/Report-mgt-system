// src/pages/AgencyPlanPage.jsx
import React, { useState } from 'react';
import AgencyPlanModal from '../components/agency_planModal';

export default function AgencyPlanPage() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className="page-container">
      <h1>Agency  Planning</h1>
      <button onClick={() => setModalOpen(true)}>New Plan</button>
      <AgencyPlanModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
