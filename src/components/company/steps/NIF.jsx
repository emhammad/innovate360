"use client";
import { useEffect, useState } from "react";

export default function NIFNumber({ onNext, onBack }) {
  const [nif, setNIF] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [error, setError] = useState("");

  // Load isAdded from localStorage on mount
  useEffect(() => {
    const added = localStorage.getItem("nif_addon_added");
    if (added === "true") {
      setIsAdded(true);
    }
  }, []);

  const handleNIFChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length <= 9) {
      setNIF(value);
      // Clear error when user starts typing
      if (error) {
        setError("");
      }
    }
  };

  const validateNIF = () => {
    if (!nif.trim()) {
      setError("NIF number is required");
      return false;
    }
    if (nif.length < 9) {
      setError("NIF number must be 9 digits");
      return false;
    }
    return true;
  };


  const handleAddOn = () => {
    if (validateNIF()) {
      setShowModal(true);
      // Store in localStorage
      localStorage.setItem("nif_addon_added", "true");
      setIsAdded(true);
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
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
      <div className="text-center" style={{ maxWidth: '450px' }}>
        {/* Title */}
        <h4 className="mb-3" style={{ color: '#3D3D3D', fontWeight: '600' }}>NIF Number</h4>

        {/* Subtitle */}
        <p className="mb-2 mx-auto" style={{ maxWidth: "500px", color: '#3D3D3D', fontSize: '16px' }}>
          Enter your NIF (Portuguese Tax Identification Number) as issued by the tax authority.
        </p>
        <p className="mb-4" style={{ fontSize: "16px", color: '#3D3D3D' }}>
          Don’t have one? You can apply easily using the <strong>Add-on</strong> option.
        </p>

        {/* Input */}
        <div className="mx-auto d-flex justify-content-center align-items-center" style={{ maxWidth: "500px", margin: '50px auto 10px auto' }}>
          <div style={{ width: "90%" }}>
            <input
              type="text"
              className="form-control text-start"
              placeholder="123456789"
              value={nif}
              onChange={handleNIFChange}
              maxLength={9}
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
                border: error ? '1px solid #dc3545' : '1px solid #79747E',
                background: 'transparent',
                fontSize: '14px'
              }}
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-danger small my-2" style={{ fontSize: '14px', color: '#dc3545' }}>
            {error}
          </div>
        )}

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
            disabled={isAdded}
          >
            {isAdded === true ? 'Added' : 'Add On'}
          </button>
        </div>
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
                    Add NIF Number
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
                    The charges for NIF Number is added in your bill. Please complete the remaining process and click on next to proceed further.
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

      </div>
    </div>
  );
}
