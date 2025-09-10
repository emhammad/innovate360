import { useState } from 'react';
import Image from "next/image";
import SuccessImage from "@assets/img/icon/payment-success.png";
import { FaUpload, FaFileAlt, FaMinus } from 'react-icons/fa';

export default function NIFUploadAndPreview() {
  const [passport, setPassport] = useState(null);
  const [proof, setProof] = useState(null);
  const [files, setFiles] = useState([]);
  const [step, setStep] = useState('upload'); // 'upload' | 'preview'

  // Called on upload step submit button
  const handleContinue = () => {

    window.location.href = "/nif-number/dashboard";

  };
  const handleUploadSubmit = () => {
    const uploadedFiles = [
      {
        id: 1,
        label: '1. Utility Bills',
        name: passport.name,
        size: `${Math.round(passport.size / 1024)} KB`,
      },
      {
        id: 2,
        label: '2. Bank Statement',
        name: proof.name,
        size: `${Math.round(proof.size / 1024)} KB`,
      },
    ];
    setFiles(uploadedFiles);
    setStep('preview');
  };

  // Remove file in preview
  const removeFile = (id) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
    // Also clear corresponding state
    if (id === 1) setPassport(null);
    if (id === 2) setProof(null);
  };

  // Final submit after preview
  const handleFinalSubmit = () => {

    setPassport(null);
    setProof(null);
    setFiles([]);
    setStep('success');
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
                    onChange={(e) => setPassport(e.target.files[0])}
                  />
                </label>
              </div>
            </div>

            {/* Proof of Address */}
            <div className="col-md-10 d-flex align-items-center justify-content-between mb-4">
              <div className="col-5" style={{ color: '#007C36', fontWeight: '400', fontSize: '18px' }}>
                2. Proof of Address (Utility Bill or Bank Statement)
              </div>
              <div className="col-6 bg-white">
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
                    onChange={(e) => setProof(e.target.files[0])}
                  />
                </label>
              </div>
            </div>

            {/* Submit button */}
            <div className="row justify-content-center mt-4">
              <div className="col-md-5 text-center">
                <button
                  disabled={!passport || !proof}
                  className="btn w-100 mb-2"
                  onClick={handleUploadSubmit}
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

        {/* PREVIEW STEP */}
        {step === 'preview' && (
          <>
            <div className="row d-flex flex-column align-items-center justify-content-center" style={{ margin: '70px auto' }}>
              {files.map((file) => (
                <div
                  key={file.id}
                  className="row d-flex align-items-center justify-content-center mb-3"
                >
                  <div className="col-5" style={{ color: '#007C36', fontWeight: '400', fontSize: '18px' }}>
                    {file.label}</div>
                  <div className="col-6">
                    <div className="border rounded d-flex align-items-center justify-content-between px-3 py-1  bg-white">
                      <div className="d-flex align-items-center gap-2">
                        <FaFileAlt className="text-muted" />
                        <div>
                          <div>{file.name}</div>
                          <div className="text-muted" style={{ fontSize: '0.8rem' }}>
                            {file.size}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile(file.id)}
                        className="remove-file btn btn-link text-decoration-none text-muted p-0 bg-white"
                        aria-label="Remove file"
                      >
                        <FaMinus />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Submit + Go Back */}
            <div className="row justify-content-center">
              <div className="text-center d-flex flex-column align-items-center">
                <button
                  className="btn w-100 text-white mb-1"
                  style={{
                    borderRadius: '20px',
                    fontSize: '16px',
                    fontWeight: '600',
                    backgroundColor: '#007C36',
                    color: '#fff',
                    border: 'none',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    maxWidth: '400px'
                  }}
                  onClick={handleFinalSubmit}
                >
                  Submit
                </button>
                <button
                  className="btn btn-link text-success text-decoration-none"
                  onClick={() => setStep('upload')}
                >
                  Go Back
                </button>
              </div>
            </div>
          </>
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
