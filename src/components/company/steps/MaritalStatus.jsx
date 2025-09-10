"use client";
import { useState } from "react";

export default function MaritalStatus({ onNext, onBack }) {
  const [status, setStatus] = useState("Married");

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
      <div className="text-center" style={{ maxWidth: '450px' , marginTop: '60px' }}>
        {/* Title */}
        <h5 className="fw-semibold mb-2" style={{ color: '#3D3D3D' }}>Choose your marital status</h5>

        {/* Subtitle */}
        <p className="mb-4" style={{ fontSize: "16px", color: '#3D3D3D' }}>
          Please indicate whether you are single, married, divorced, or widowed.
        </p>

        {/* Radio buttons */}
        <div className="d-flex flex-column gap-3 mb-4" style={{ marginTop: '60px' }}>
          {["Married", "Single", "Divorced", "Widowed"].map((option) => (
            <label
              key={option}
              className={`border rounded-pill px-4 d-flex align-items-center ${
                status === option
                  ? "border-success"
                  : "border-secondary"
              }`}
              style={{ cursor: "pointer", userSelect: "none", padding: '12px' }}
            >
              <input
                type="radio"
                name="maritalStatus"
                value={option}
                checked={status === option}
                onChange={() => setStatus(option)}
                className="form-check-input me-3"
                style={{ cursor: "pointer" }}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        {/* Next Button */}
        <button
          type="button"
          className="btn btn-success w-100 py-2 mb-3"
          style={{ borderRadius: "25px", marginTop: '80px' }}
          onClick={() => {
            // Navigate to choose company type page
            window.location.href = '/company/choose-company-type';
          }}
          disabled={!status}
        >
          Next
        </button>

        {/* Go Back */}
        <button
          type="button"
          className="btn btn-link text-success fw-bold text-decoration-none"
          onClick={onBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
