"use client";
import { useState } from "react";

export default function BusinessAddress({ onNext, onBack }) {
  const [address, setAddress] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const validateAddress = () => {
    if (!address.trim()) {
      return false;
    }
    return true;
  };

  const handleAddOn = () => {
    // Validate address before showing modal
    if (validateAddress()) {
      setShowModal(true);
    }
  };

  const handleModalNext = () => {
    setShowModal(false);
    setIsAdded(true);
    onNext && onNext("add-on");
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="d-flex align-items-center justify-content-center h-100" style={{ minHeight: '90vh' }}>
      <div className="text-center" style={{ maxWidth: '450px' }}>
        {/* Title */}
        <h4 className="mb-3" style={{ color: '#3D3D3D', fontWeight: '600' }}>Add Company's Address</h4>

        {/* Subtitle */}
        <p className="mb-2 mx-auto" style={{ maxWidth: "500px", color: '#3D3D3D', fontSize: '16px' }}>
          Please provide your business address (Portuguese only).
        </p>
        <p className="mb-4" style={{ fontSize: "16px", color: '#3D3D3D' }}>
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
              backgroundColor: isAdded ? '#6c757d' : '#28a745',
              color: '#fff',
              border: 'none',
              height: '48px',
              fontSize: '16px',
              fontWeight: '600'
            }}
            onClick={handleAddOn}
            disabled={isAdded}
          >
            {isAdded ? 'Added' : 'Add On'}
          </button>
        </div>


        {/* Modal */}
        {showModal && (
          <div
            className="modal show d-block"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content" style={{ borderRadius: '16px', border: 'none' }}>
                <div className="modal-header" style={{ borderBottom: '1px solid #dee2e6' }}>
                  <h5 className="modal-title fw-bold" style={{ color: '#3D3D3D', fontSize: '20px' }}>
                    Add Business Address
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleModalCancel}
                    style={{ fontSize: '12px' }}
                  ></button>
                </div>
                <div className="modal-body" style={{ padding: '16px 24px 24px 24px' }}>
                  <p style={{ color: '#3D3D3D', fontSize: '16px', margin: 0, textAlign: 'left' }}>
                    The charges for Business Address is added in your bill. Please complete the remaining process and click on next to proceed further.
                  </p>
                </div>
                <div className="modal-footer" style={{ borderTop: '1px solid #dee2e6', gap: '8px' }}>
                  <button
                    type="button"
                    className="btn"
                    onClick={handleModalCancel}
                    style={{
                      borderRadius: '25px',
                      height: '42px',
                      fontSize: '16px',
                      fontWeight: '600',
                      backgroundColor: 'transparent',
                      color: '#5B5B5B',
                      border: 'none',
                      minWidth: '100px',
                      border: '1px solid #D2D4DA'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn"
                    onClick={handleModalNext}
                    style={{
                      borderRadius: '25px',
                      height: '42px',
                      fontSize: '16px',
                      fontWeight: '600',
                      backgroundColor: '#28a745',
                      color: '#fff',
                      border: 'none',
                      minWidth: '100px'
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Go Back */}
        <div>
          <button
            type="button"
            className="btn mt-4"
            style={{
              width: '100%',
              minWidth: "150px",
              maxWidth: "400px",
              borderRadius: "25px",
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              height: '48px',
              fontSize: '16px',
              fontWeight: '600'
            }}
            onClick={() => onNext()}
          >
            Next
          </button>
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
