import { useState } from 'react';
import Image from "next/image";
import SuccessImage from "@assets/img/icon/payment-success.png";
import { FaUpload, FaFileAlt, FaMinus } from 'react-icons/fa';

export default function NIFUploadAndPreview() {
  const [passport, setPassport] = useState(null);
  const [proof, setProof] = useState(null);
  const [step, setStep] = useState('upload'); // 'upload' | 'success'

  // Called on upload step submit button
  const handleContinue = () => {
    window.location.href = "/nif-number/dashboard";
  };

  // Handle file upload and show preview immediately
  const handlePassportUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPassport(file);
    }
    // Reset the input value to allow re-uploading the same file
    e.target.value = '';
  };

  const handleProofUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProof(file);
    }
    // Reset the input value to allow re-uploading the same file
    e.target.value = '';
  };

  // Remove file and reset to upload state
  const removeFile = (fileType) => {
    if (fileType === 'passport') {
      setPassport(null);
    } else if (fileType === 'proof') {
      setProof(null);
    }
  };

  // Final submit
  const handleSubmit = () => {
    if (passport && proof) {
      setPassport(null);
      setProof(null);
      setStep('success');
    }
  };

  return (
    <div className="py-5 d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '90vh', backgroundColor: '#fcfcfc' }}>
      <div className="container">
        {/* Header */}
        {step !== 'success' && (
          <div className="text-center mb-4">
            <h5 style={{ color: '#3D3D3D', fontSize: '24px', fontWeight: '600' }}>NIF Number</h5>
            <p className="text-muted mx-auto mt-2" style={{ maxWidth: '600px', fontSize: '16px', color: '#3D3D3D' }}>
              To get the NIF Number please provide the following details
            </p>
          </div>
        )}

        {/* UPLOAD STEP */}
        {step === 'upload' && (
          <div className="row justify-content-center mb-4">
            {/* Passport / Utility Bill */}
            <div className="col-md-10 d-flex align-items-center justify-content-between mb-4">
              <div className="col-5" style={{ color: '#007C36', fontWeight: '400', fontSize: '18px' }}>
                1. Passport / EU Identification Card
              </div>
              <div className="col-6 bg-white">
                {!passport ? (
                  <label
                    className="w-100 border rounded-3 p-4 py-3 text-center text-muted"
                    style={{ borderStyle: 'dashed', cursor: 'pointer' }}
                  >
                    <FaUpload className="mb-2 fs-4" />
                    <br />
                    Click to upload or drag and drop
                    <br />
                    <small>SVG, PNG, JPG or GIF (max. 800×400px)</small>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      className="d-none"
                      onChange={handlePassportUpload}
                    />
                  </label>
                ) : (
                  <div className="border rounded d-flex align-items-center justify-content-between px-3 py-2 bg-white">
                    <div className="d-flex align-items-center gap-2">
                      <FaFileAlt className="text-muted" />
                      <div>
                        <div>{passport.name}</div>
                        <div className="text-muted" style={{ fontSize: '0.8rem' }}>
                          {Math.round(passport.size / 1024)} KB
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile('passport')}
                      className="remove-file btn btn-link text-decoration-none text-muted p-0 bg-white"
                      aria-label="Remove file"
                      style={{width : '30px'}}
                    >
                      <FaMinus />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Proof of Address */}
            <div className="col-md-10 d-flex align-items-center justify-content-between mb-4">
              <div className="col-5" style={{ color: '#007C36', fontWeight: '400', fontSize: '18px' }}>
                2. Proof of Address (Utility Bill or Bank Statement)
              </div>
              <div className="col-6 bg-white">
                {!proof ? (
                  <label
                    className="w-100 border rounded-3 p-4 py-3 text-center text-muted"
                    style={{ borderStyle: 'dashed', cursor: 'pointer' }}
                  >
                    <FaUpload className="mb-2 fs-4" />
                    <br />
                    Click to upload or drag and drop
                    <br />
                    <small>SVG, PNG, JPG or GIF (max. 800×400px)</small>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      className="d-none"
                      onChange={handleProofUpload}
                    />
                  </label>
                ) : (
                  <div className="border rounded d-flex align-items-center justify-content-between px-3 py-2 bg-white">
                    <div className="d-flex align-items-center gap-2">
                      <FaFileAlt className="text-muted" />
                      <div>
                        <div>{proof.name}</div>
                        <div className="text-muted" style={{ fontSize: '0.8rem' }}>
                          {Math.round(proof.size / 1024)} KB
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile('proof')}
                      className="remove-file btn btn-link text-decoration-none text-muted p-0 bg-white"
                      aria-label="Remove file"
                      style={{width : '30px'}}
                    >
                      <FaMinus />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Submit button */}
            <div className="row justify-content-center mt-4">
              <div className="col-md-5 text-center">
                <button
                  disabled={!passport || !proof}
                  className="btn w-100 mb-2"
                  onClick={handleSubmit}
                  style={{
                    borderRadius: '20px',
                    fontSize: '16px',
                    fontWeight: '600',
                    backgroundColor: !passport || !proof ? "#1D1B201F" : '#007C36',
                    color: '#fff',
                    border: 'none',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  Submit
                </button>
                <a href="#" className="text-success text-decoration-none fw-semibold">
                  Go Back
                </a>
              </div>
            </div>
          </div>
        )}

        {
          step == 'success' && (
            <>
              <div className="d-flex justify-content-center align-items-center">
                <div className="text-center">
                  {/* Placeholder image - replace src with your actual image path */}
                  <Image
                    src={SuccessImage}
                    alt="Success"
                    style={{ width: "180px", marginBottom: "20px" }}
                  />

                  <h5 className="fw-semibold mb-2">
                    Great! We have received your Details
                  </h5>

                  <p className="text-muted mb-4">
                    And we have created an account for you so that you can track your progress
                  </p>


                  <button style={{
                    width: '100%',
                    height: '42px',
                    borderRadius: '25px',
                    fontSize: '16px',
                    fontWeight: '600',
                    backgroundColor: '#007C36',
                    color: '#fff',
                    border: 'none',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    maxWidth: '400px',
                    marginTop: "70px"
                  }} onClick={handleContinue}>
                    Continue
                  </button>
                </div>
              </div>

            </>
          )
        }
      </div>
    </div>
  );
}
