"use client";
import { useState } from "react";

export default function PaymentMethod({ onNext, onBack }) {
  const [paymentMethod, setPaymentMethod] = useState("bank");

  const handlePaymentSelect = (method) => {
    setPaymentMethod(method);
  };

  const handleNext = () => {
    if (paymentMethod === "card") {
      // Navigate to payment card page
      window.location.href = '/company/payment-card';
    } else if (paymentMethod === "bank") {
      // Navigate to bank details page
      window.location.href = '/company/bank-details';
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        {/* Title */}
        <h4 className="fw-bold mb-3 text-center" style={{ color: '#3D3D3D', fontSize: '1.5rem' }}>
          Payment Method
        </h4>

        {/* Subtitle */}
        <p className="mb-4 text-center mx-auto" style={{ fontSize: '16px', color: '#3D3D3D', width: '500px' }}>
          Please select a payment method to initiate your company registration process.
        </p>

        {/* Payment Card */}
        <div
          className="card mx-auto"
          style={{
            width: '100%',
            maxWidth: '600px',
            minHeight: '500px',
            borderRadius: '24px',
            border: 'none',
            backgroundColor: 'white',
            boxShadow: '0px 0px 8.4px 0px #00000026',
            marginTop: '50px'
          }}
        >
          <div className="card-body p-4 d-flex flex-column justify-content-between">
            <div>
              {/* Payment System Header */}
              <h5 className="fw-bold mb-3 text-left" style={{ color: '#28a745', fontSize: '1.2rem' }}>
                Payment System
              </h5>

              {/* Description */}
              <p className=" mb-1 text-left" style={{ fontSize: '14px', color: '#3D3D3D' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet.
              </p>
              <p className="text-left" style={{ fontSize: '14px', fontWeight: '600', color: '#3D3D3D' }}>
                Choose the method you prefer to continue.
              </p>

              <hr className="mb-4 " />

              {/* Payment Options */}
              <div className="d-flex flex-column gap-3">
                {/* Pay via Bank */}
                <label
                  className={`border rounded-pill d-flex align-items-center ${paymentMethod === "bank"
                    ? "border-success"
                    : "border-secondary"
                    }`}
                  style={{
                    cursor: "pointer",
                    padding: '10px 20px',
                    userSelect: "none",
                    borderWidth: paymentMethod === "bank" ? '2px' : '1px',
                    borderColor: paymentMethod === "bank" ? '#28a745' : '#e0e0e0',
                    backgroundColor: paymentMethod === "bank" ? '#f8fff8' : 'transparent'
                  }}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={() => handlePaymentSelect("bank")}
                    className="form-check-input me-3"
                    style={{
                      cursor: "pointer",
                      width: '20px',
                      height: '20px',
                      border: paymentMethod === "bank" ? '2px solid #28a745' : '2px solid #e0e0e0',
                      backgroundColor: paymentMethod === "bank" ? '#28a745' : 'white'
                    }}
                  />
                  <span style={{
                    color: '#3D3D3D',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}>
                    Pay via Bank
                  </span>
                </label>

                {/* Pay via Card */}
                <label
                  className={`border rounded-pill d-flex align-items-center ${paymentMethod === "card"
                    ? "border-success"
                    : "border-secondary"
                    }`}
                  style={{
                    cursor: "pointer",
                    padding: '10px 20px',
                    userSelect: "none",
                    borderWidth: paymentMethod === "card" ? '2px' : '1px',
                    borderColor: paymentMethod === "card" ? '#28a745' : '#e0e0e0',
                    backgroundColor: paymentMethod === "card" ? '#f8fff8' : 'transparent'
                  }}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => handlePaymentSelect("card")}
                    className="form-check-input me-3"
                    style={{
                      cursor: "pointer",
                      width: '20px',
                      height: '20px',
                      border: paymentMethod === "card" ? '2px solid #28a745' : '2px solid #e0e0e0',
                      backgroundColor: paymentMethod === "card" ? '#28a745' : 'white'
                    }}
                  />
                  <span style={{
                    color: '#3D3D3D',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}>
                    Pay via Card
                  </span>
                </label>
              </div>
            </div>

            {/* Next Button */}
            <div className="d-flex justify-content-end mt-4">
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  minWidth: '80px'
                }}
                onClick={handleNext}
                disabled={!paymentMethod}
              >
                Next
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
