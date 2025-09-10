"use client";
import { useState } from "react";

export default function HomeAddress({ onNext, onBack }) {
  const [address, setAddress] = useState("");

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center w-100">
        {/* Title */}
        <h4 className="mb-3" style={{ color: '#3D3D3D', fontWeight: '600' }}>Home Address</h4>

        {/* Subtitle */}
        <p className="mb-4 mx-auto" style={{ color: '#3D3D3D' , fontSize: '16px' }}>
          You can use any address it’s not required to be a Portuguese one.
        </p>

        {/* Input */}
        <div className="mx-auto d-flex justify-content-center align-items-center" style={{ maxWidth: "500px", margin: '0px auto 50px auto', minHeight: '200px' }}>
          <div style={{ width: "80%" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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

        {/* Next Button */}
        <div className="d-flex justify-content-center mx-auto" style={{ width: '80%', maxWidth: '500px' }}>
          <button
            type="button"
            className="btn"
            style={{
              width: '80%',
              borderRadius: '25px',
              height: '48px',
              fontSize: '16px',
              fontWeight: '600',
              backgroundColor: address.trim() ? '#28a745' : '#1D1B201F',
              color: address.trim() ? '#fff' : '#1D1B20',
              border: 'none'
            }}
            disabled={!address.trim()}
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
