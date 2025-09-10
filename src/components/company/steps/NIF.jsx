"use client";
import { useState } from "react";

export default function NIFNumber({ onNext, onBack }) {
  const [nif, setNIF] = useState("");

  const handleAddOn = () => {
    // Signal that the user chose the add-on and proceed to next step
    console.log("Add-on selected for NIF");
    onNext && onNext("add-on");
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
      <div className="text-center" style={{ maxWidth: '450px' }}>
        {/* Title */}
        <h4 className="mb-3" style={{ color: '#3D3D3D', fontWeight: '600' }}>NIF Number</h4>

        {/* Subtitle */}
        <p className="mb-2 mx-auto" style={{ maxWidth: "500px", color: '#3D3D3D' , fontSize: '16px' }}>
          Enter your NIF (Portuguese Tax Identification Number) as issued by the tax authority.
        </p>
        <p className="mb-4" style={{ fontSize: "16px" , color: '#3D3D3D' }}>
          Don’t have one? You can apply easily using the <strong>Add-on</strong> option.
        </p>

        {/* Input */}
        <div className="mx-auto d-flex justify-content-center align-items-center" style={{ maxWidth: "500px", margin: '50px auto 10px auto' }}>
          <div style={{ width: "90%" }}>
            <input
              type="text"
              className="form-control text-start"
              placeholder="123 456 789"
              value={nif}
              onChange={(e) => setNIF(e.target.value)}
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
                fontSize: '14px'
              }}
            />
          </div>
        </div>

        {/* Add On Card */}
        <div
          className="mx-auto p-4 mb-3"
          style={{
            background: "linear-gradient(to bottom, #e0f2e9, #ffffff)",
            border: "1px solid #007C36",
            borderRadius: "20px",
            maxWidth: "400px",
          }}
        >
          <h6 className="fw-bold mb-2 d-flex justify-content-between">Add NIF Number <span className="text-success">€99</span></h6>
          <p className="text-muted small mb-3">
            By adding NIF number <strong>€54</strong> may apply and will be added with registration fee.
          </p>
          <button
            type="button"
            className="btn"
            style={{
              width: '100%',
              minWidth: "150px",
              borderRadius: "25px",
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              height: '48px',
              fontSize: '16px',
              fontWeight: '600'
            }}
            onClick={handleAddOn}
          >
            Add On
          </button>
        </div>

        {/* Next Button for NIF Input */}
        {nif.trim() && (
          <div className="d-flex justify-content-center mx-auto" style={{ width: '80%', maxWidth: '500px', marginTop: '50px' }}>
            <button
              type="button"
              className="btn"
              style={{
                width: '100%',
                borderRadius: '25px',
                height: '48px',
                fontSize: '16px',
                fontWeight: '600',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none'
              }}
              onClick={() => onNext && onNext(nif)}
            >
              Next
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
