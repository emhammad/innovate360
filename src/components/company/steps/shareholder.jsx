"use client";
import { useState } from "react";

export default function Shareholders({ onNext, onBack }) {
  const [shareholders, setShareholders] = useState([
    { name: "", percentage: "" },
  ]);

  // Calculate total %
  const totalPercentage = shareholders.reduce(
    (acc, curr) => acc + parseFloat(curr.percentage || 0),
    0
  );

  const isComplete =
    shareholders.every((s) => s.name.trim() && s.percentage.trim() && parseFloat(s.percentage) > 0);

  // Handlers
  const handleAddShareholder = () => {
    setShareholders([...shareholders, { name: "", percentage: "" }]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...shareholders];
    updated[index][field] = field === "percentage" ? value.replace(",", ".") : value;
    setShareholders(updated);
  };

  const handleRemove = (index) => {
    const updated = shareholders.filter((_, i) => i !== index);
    setShareholders(updated);
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
      <div className="text-center w-100">
        {/* Title */}
        <h4 className="mb-3" style={{ color: '#3D3D3D', fontWeight: '600' }}>Add Company’s Shareholders</h4>

        {/* Subtitle */}
        <p className="text-muted mx-auto" style={{ maxWidth: "500px", fontSize: '14px' }}>
          List all shareholders along with their ownership percentage. Ensure the
          information matches official company registration records.
        </p>
        <p className=" small fw-semibold mt-2 mb-4">
          You need to show <span className="text-success">100%</span> partnership
        </p>

        {/* Shareholder Fields */}
        <div className="mb-4 mx-auto d-flex flex-column align-items-start" style={{ maxWidth: "500px", minHeight: '150px' }}>
          {shareholders.map((s, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between mb-2 w-100"
              style={{ gap: "10px" }}
            >
              {/* Name Input */}
              <div style={{ flex: 2 }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shareholder name"
                  value={s.name}
                  onChange={(e) =>
                    handleChange(index, "name", e.target.value)
                  }
                  style={{
                    width: '100%',
                    height: '54px',
                    borderRadius: '50px',
                    paddingTop: '15px',
                    paddingRight: '20px',
                    paddingBottom: '15px',
                    paddingLeft: '20px',
                    opacity: 1,
                    borderWidth: '1px',
                    border: '1px solid #79747E',
                    background: 'transparent',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Percentage Input */}
              <div
                className="input-group"
                style={{ flex: 1 }}
              >
                <input
                  type="number"
                  className="form-control text-end hm-percentage-input"
                  placeholder="0.0"
                  value={s.percentage}
                  onChange={(e) =>
                    handleChange(index, "percentage", e.target.value)
                  }
                  min="0"
                  max="100"
                  step="0.1"
                  style={{
                    height: '54px',
                    borderRadius: '50px 0 0 50px',
                    paddingTop: '15px',
                    paddingRight: '20px',
                    paddingBottom: '15px',
                    paddingLeft: '20px',
                    opacity: 1,
                    borderWidth: '1px',
                    border: '1px solid #79747E',
                    borderRight: 'none',
                    background: 'transparent',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
                <span
                  className="input-group-text d-flex align-items-center justify-content-center"
                  style={{
                    borderRadius: "0 50px 50px 0",
                    backgroundColor: "transparent",
                    height: '54px',
                    border: '1px solid #79747E',
                    borderLeft: 'none',
                    fontSize: '14px'
                  }}
                >
                  %
                </span>
              </div>

              {/* Remove Button */}
              {shareholders.length > 1 && (
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm d-flex align-items-center justify-content-center"
                  onClick={() => handleRemove(index)}
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    border: '1px solid #dc3545',
                    backgroundColor: 'transparent',
                    color: '#dc3545'
                  }}
                  aria-label="Remove shareholder"
                >
                  &times;
                </button>
              )}
            </div>
          ))}

          {/* Add Shareholder */}
          <button
            type="button"
            className="btn btn-link text-success fw-bold text-decoration-none"
            onClick={handleAddShareholder}
          >
            + Add shareholder
          </button>
        </div>

        {/* Next Button */}
        <div className="d-flex justify-content-center mx-auto mb-1" style={{ width: '80%', maxWidth: '500px', marginTop: '45px' }}>
          <button
            type="button"
            className="btn"
            style={{
              width: '80%',
              borderRadius: '25px',
              height: '48px',
              fontSize: '16px',
              fontWeight: '600',
              backgroundColor: isComplete ? '#28a745' : '#1D1B201F',
              color: isComplete ? '#fff' : '#1D1B20',
              border: 'none'
            }}
            onClick={() => onNext(shareholders)}  
            disabled={!isComplete}
          >
            Next
          </button>
        </div>

        {/* Go Back */}
        <div>
          <button
            type="button"
            className="btn btn-link text-success fw-bold text-decoration-none"
            onClick={onBack}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
