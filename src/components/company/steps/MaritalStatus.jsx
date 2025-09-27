"use client";
import { useState, useEffect } from "react";
import UploadImage from "@assets/img/icon/upload-icon.png";
import Image from 'next/image';

export default function MaritalStatus({ onNext, onBack }) {
  const [status, setStatus] = useState("Married");
  const [spouseName, setSpouseName] = useState("");
  const [spouseDocument, setSpouseDocument] = useState(null);

  useEffect(() => {
    // Load saved marital status from localStorage
    const savedStatus = localStorage.getItem('maritalStatus');
    if (savedStatus) {
      setStatus(savedStatus);
    }
  }, []);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    // Save to localStorage whenever status changes
    localStorage.setItem('maritalStatus', newStatus);
  };

  // Validation function
  const isFormComplete = () => {
    if (status !== "Married") {
      return true; // Other statuses don't require spouse info
    }
    return spouseName.trim() !== "" && spouseDocument !== null;
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
      <div className="text-center" style={{ maxWidth: '450px' }}>
        {/* Title */}
        <h5 className="fw-semibold mb-2" style={{ color: '#3D3D3D' }}>Choose your marital status</h5>

        {/* Subtitle */}
        <p className="mb-4" style={{ fontSize: "16px", color: '#3D3D3D' }}>
          Please indicate whether you are single, married, divorced, or widowed.
        </p>

        {/* Radio buttons */}
        <div className="d-flex flex-column gap-3 mb-4" style={{ marginBottom: '60px' }}>
          {["Married", "Single", "Divorced", "Widowed"].map((option) => (
            <label
              key={option}
              className={`border rounded-pill px-4 d-flex align-items-center ${status === option
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
                onChange={() => handleStatusChange(option)}
                className="form-check-input me-3"
                style={{ cursor: "pointer" }}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        {/* Spouse Information Section - Only show when Married is selected */}
        {status === "Married" && (
          <div className="mt-5">
            {/* Spouse Information Title */}
            <h5 className="fw-semibold mb-2 text-center" style={{ color: '#3D3D3D' }}>Spouse Information</h5>
            <p className="mb-4 text-center" style={{ fontSize: "16px", color: '#3D3D3D' }}>
              Please provide your spouse information
            </p>

            {/* Spouse Name Input */}
            <div className="mb-4">
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  className="form-control text-start"
                  placeholder="Spouse Name"
                  value={spouseName}
                  onChange={(e) => setSpouseName(e.target.value)}
                  style={{
                    width: '100%',
                    height: '52px',
                    borderRadius: '25px',
                    paddingTop: '15px',
                    paddingRight: '50px',
                    paddingBottom: '15px',
                    paddingLeft: '50px',
                    opacity: 1,
                    borderWidth: '1px',
                    border: '1px solid #79747E',
                    background: 'transparent',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
                {/* Person Icon */}
                <div
                  style={{
                    position: 'absolute',
                    left: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#3D3D3D',
                    fontSize: '18px',
                    pointerEvents: 'none'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* File Upload Area */}
            <div
              className="border rounded-3 p-4 text-center"
              style={{
                border: '1px dashed #79747E',
                borderRadius: '8px',
                backgroundColor: '',
                cursor: 'pointer',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => document.getElementById('spouse-document-upload').click()}
            >
              {/* Upload Icon */}
              <Image src={UploadImage} alt="upload" />

              {/* Upload Text */}
              <p className="mb-2" style={{ color: '#3D3D3D', fontSize: '16px', margin: 0 }}>
                <strong>Click to upload</strong> or drag and drop
              </p>
              <p className="mb-0" style={{ color: '#79747E', fontSize: '14px', margin: 0 }}>
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>

              {/* Hidden File Input */}
              <input
                type="file"
                id="spouse-document-upload"
                accept=".svg,.png,.jpg,.jpeg,.gif"
                style={{ display: 'none' }}
                onChange={(e) => setSpouseDocument(e.target.files[0])}
              />

              {/* Show selected file name */}
              {spouseDocument && (
                <p className="mt-2 mb-0" style={{ color: '#28a745', fontSize: '14px' }}>
                  Selected: {spouseDocument.name}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Next Button */}
        <button
          type="button"
          className="btn btn-success w-100 py-2 mb-3"
          style={{
            borderRadius: "25px",
            marginTop: '30px',
            backgroundColor: isFormComplete() ? '#28a745' : '#6c757d',
            border: 'none'
          }}
          onClick={() => {
            // Save marital status to localStorage
            localStorage.setItem('maritalStatus', status);

            // Save spouse information if married
            if (status === "Married") {
              localStorage.setItem('spouseName', spouseName);
              localStorage.setItem('spouseDocument', spouseDocument?.name || '');
            }

            // Navigate to choose company type page
            window.location.href = '/company/choose-company-type';
          }}
          disabled={!isFormComplete()}
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
