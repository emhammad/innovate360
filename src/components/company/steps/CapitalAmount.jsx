"use client";
import { useState } from "react";

export default function CapitalAmount({ onNext, onBack }) {
  const [amount, setAmount] = useState("");

  // Helper to check if input is a valid number greater than 0
  const isValidAmount = parseFloat(amount) > 0;

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
      <div className="text-center w-100">
        {/* Title */}
        <h4 className="mb-3" style={{ color: '#3D3D3D', fontWeight: '600' }}>Capital Amount of Company</h4>

        {/* Subtitle */}
        <p className="mb-4 mx-auto" style={{ maxWidth: "500px" , color: '#3D3D3D' , fontSize: '16px' }}>
          Specify the authorized and paid-up capital amount in the relevant currency.
        </p>

        {/* Input */}
        <div className="mx-auto d-flex justify-content-center align-items-center" style={{  maxWidth: "500px", margin: '0px auto 45px auto', minHeight: '200px'  }}>
          <div style={{ width: "80%" }}>
            <input
              type="number"
              className="form-control"
              placeholder="Enter capital amount (€)"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
              backgroundColor: isValidAmount ? '#28a745' : '#1D1B201F',
              color: isValidAmount ? '#fff' : '#1D1B20',
              border: 'none'
            }}
            disabled={!isValidAmount}
            onClick={() => onNext && onNext(parseFloat(amount))}
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
