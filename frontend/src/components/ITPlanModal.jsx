// src/components/ITPlanModal.js
import React from "react";
import "../styles/modal.css";

const ITPlanModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div class="model-header">
        <h2 class="modal-title">IT Plan Form</h2>
        </div>
        <div class = "modal-body">
        <input type="text" placeholder="Perspective" />
        <input type="text" placeholder="Strategic Goal" />
        <input type="text" placeholder="Measurements" />
        <input type="text" placeholder="Base Value" />
        <input type="text" placeholder="Aim" />
        <input type="text" placeholder="Year" />
        <input type="text" placeholder="Main Activity" />
        <input type="text" placeholder="Beneficiary Community" />
        <input type="text" placeholder="Beneficiary Body" />
        <input type="number" placeholder="Budget Government" />
        <input type="text" placeholder="Budget Public" />
        <input type="text" placeholder="Budget Other" />
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-primary">FirstRecord</button>
        <button type="button" class="btn btn-primary">NextRecord</button>
        <button type="button" class="btn btn-primary">LastRecord</button>
        <button type="button" class="btn btn-primary">AddRecord</button>
        <button type="button" class="btn btn-primary">DeleteRecord</button>
        <button type="button" class="btn btn-primary">AddiInfo</button>
        <button type="button" class="btn btn-primary">Preview</button>
        <button onClick ={onClose}type="button" class="modal-close-btn" data-bs-dismiss="modal">Close</button>
    
      </div>
      </div>
      </div>
      

    
  );
};

export default ITPlanModal;
