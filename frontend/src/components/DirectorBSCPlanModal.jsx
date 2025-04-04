// src/components/ITPlanModal.js
import React from "react";
import "../styles/modal.css";

const DirectorBSCPlan = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div class="model-header">
        <h2 class="modal-title">DirectorBSCPlan</h2>
        </div>
        <div class = "modal-body">
        <input type="text" placeholder="SerialNumber" />
        <button type="button"class="dropbtn" placeholder="Perspective" />
        <a href ="#"></a>
        <input type="text" placeholder="Strategic_Goals" />
        <input type="text" placeholder="Goal_Value" />
        <input type="text" placeholder="Measurement" />
        <input type="text" placeholder="2005_Aim" />
        <input type="text" placeholder="Year" />
        <input type="text" placeholder="Months" />
        <input type="number" placeholder="Budget" />
        <input type="text" placeholder="Result" />
        <input type="text" placeholder="Accountable" />
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

export default DirectorBSCPlan ;
