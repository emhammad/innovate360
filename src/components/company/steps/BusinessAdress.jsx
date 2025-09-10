"use client";
import { useState } from "react";

export default function BusinessAddress({ onNext, onBack }) {
  const [address, setAddress] = useState("");
  const [useAddon, setUseAddon] = useState(false);

  const isComplete = useAddon || address.trim() !== "";

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
      <div className="text-center" style={{ maxWidth: '450px' , marginTop: '60px' }}>
        {/* Title */}
        <h4 className="mb-3" style={{ color: '#3D3D3D', fontWeight: '600' }}>Add Company's Address</h4>

        {/* Subtitle */}
        <p className="mb-2 mx-auto" style={{ maxWidth: "500px", color: '#3D3D3D' , fontSize: '16px' }}>
          Please provide your business address (Portuguese only).
        </p>
        <p className="mb-4" style={{ fontSize: "16px" , color: '#3D3D3D' }}>
          Don't have one? You can apply easily using the <strong>Add-on</strong> option.
        </p>

        {/* Address Input */}
        <div className="mx-auto d-flex justify-content-center align-items-center" style={{ maxWidth: "500px", margin: '50px auto 10px auto' }}>
          <div style={{ width: "90%", position: 'relative' }}>
            <input
              type="text"
              className="form-control text-start"
              placeholder="Your company address"
              value={address}
              disabled={useAddon}
              onChange={(e) => setAddress(e.target.value)}
              style={{
                width: '100%',
                height: '54px',
                borderRadius: '8px',
                paddingTop: '15px',
                paddingRight: '50px',
                paddingBottom: '15px',
                paddingLeft: '20px',
                opacity: 1,
                borderWidth: '1px',
                border: '1px solid #1D1B201F',
                background: 'transparent',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            {/* Location Pin Icon */}
            <div
              style={{
                position: 'absolute',
                right: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#1D1B201F',
                fontSize: '20px',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
          </div>
        </div>

          {/* Add-on Card */}
        <div
          className="mx-auto p-4 mb-3"
          style={{
            background: "linear-gradient(to bottom, #e0f2e9, #ffffff)",
            border: "1px solid #007C36",
            borderRadius: "20px",
            maxWidth: "400px",
          }}
        >
          <h6 className="fw-bold mb-2 d-flex justify-content-between">Add Business Address <span className="text-success">€499</span></h6>
          <p className="text-muted small mb-3">
            By adding Business address <strong>€499</strong> may apply and will be added with registration fee.
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
            onClick={() => {
              setUseAddon(true);
              setAddress(""); // clear input if using add-on
            }}
          >
            Add On
          </button>
        </div>

        <div className="d-flex justify-content-center mx-auto" style={{ marginTop: '100px' }}>
          <button
            className="btn "
            style={{
              width: '95%',
              borderRadius: '25px',
              height: '48px',
              fontSize: '16px',
              fontWeight: '600',
              paddingLeft: '32px',
              paddingRight: '32px',
              backgroundColor: isComplete ? '#28a745' : '#1D1B201F',
              color: isComplete ? '#fff' : '#1D1B20',
              border: 'none',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
            onClick={() => onNext && onNext(address)}
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
