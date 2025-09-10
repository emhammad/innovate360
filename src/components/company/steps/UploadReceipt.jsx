"use client";
import { useState, useRef } from "react";

export default function UploadReceipt({ onNext, onBack }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setIsUploaded(true);
      console.log("File selected:", file.name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleNext = () => {
    if (isUploaded) {
      // Navigate to payment success page
      window.location.href = '/company/payment-success';
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <div className="text-center" style={{ padding: '40px' }}>

        {/* Title */}
        <h4 className="mb-2" style={{ color: '#3D3D3D', fontSize: '24px' }}>
          Upload Receipt
        </h4>

        {/* Subtitle */}
        <p className="text-muted mb-5" style={{ fontSize: '16px', color: '#3D3D3D', maxWidth: '450px' }}>
          Please upload the image of invoice you paid for your company registration process.
        </p>

        {/* Upload Area */}
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            width: '100%',
            height: '130px',
            margin: '50px auto 10px auto',
            border: '2px dashed #e0e0e0',
            borderRadius: '12px',
            backgroundColor: '#fafafa',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onClick={handleUploadClick}
          onMouseEnter={(e) => {
            e.target.style.borderColor = '#28a745';
            e.target.style.backgroundColor = '#f8fff8';
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = '#e0e0e0';
            e.target.style.backgroundColor = '#fafafa';
          }}
        >
          {/* Upload Icon */}
          <div
            className="d-flex align-items-center justify-content-center mb-2"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#28a745',
              color: 'white'
            }}
          >
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
              <path d="M12,11L8,15H11V19H13V15H16L12,11Z" />
            </svg>
          </div>

          {/* Upload Text */}
          <div className="text-center">
            <p className="mb-0" style={{ fontSize: '14px', color: '#3D3D3D', fontWeight: '500' }}>
              Click to upload <span style={{ color: '#28a745' }}>receipt</span>
            </p>
            <p className="text-muted mb-0" style={{ fontSize: '12px', color: '#666' }}>
              PNG or JPG (max. 1mb)
            </p>
          </div>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
          />
        </div>

        {/* File Preview */}
        {selectedFile && (
          <div className="p-3" style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            marginBottom: '50px'
          }}>
            <p className="mb-0" style={{ fontSize: '14px', color: '#28a745', fontWeight: '500' }}>
              ✓ {selectedFile.name} uploaded successfully
            </p>
          </div>
        )}

        {/* Next Button */}
        {isUploaded && (
          <div className="text-center mt-4">
            <button
              type="button"
              className="btn"
              style={{
                height: '48px',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: '600',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                minWidth: '100px'
              }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
