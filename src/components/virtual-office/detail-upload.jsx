'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaUpload, FaFileAlt, FaMinus } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import SuccessImage from "@assets/img/company/completed.png";
import { useRouter } from 'next/router';

const VirtualOfficeForm = () => {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState('upload');
  const router = useRouter();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
    // Reset the input value to allow re-uploading the same file
    e.target.value = '';
  };

  // Remove file and reset to upload state
  const removeFile = () => {
    setFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ file, email, phone });
    
    // Save form data to localStorage for persistence
    localStorage.setItem('virtualOfficeFormData', JSON.stringify({
      file: file ? { name: file.name, size: file.size, type: file.type } : null,
      email,
      phone
    }));
    
    // Navigate to virtual office signup page
    router.push('/virtual-office-address/signup');
  };

  const handleBack = () => {
    router.push('/');
  };

  const handleContinue = () => {
    window.location.href = "/virtual-office-address/payment";
  };

  // Load persisted data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('virtualOfficeFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (parsedData.email) setEmail(parsedData.email);
        if (parsedData.phone) setPhone(parsedData.phone);
        // Note: File can't be restored from localStorage, user will need to re-upload
      } catch (error) {
        console.error('Error loading persisted data:', error);
      }
    }
  }, []);
  return (
    <div className="container py-5 d-flex justify-content-center flex-column" style={{ minHeight: '70vh' }}>
      {/* Title */}
      {
        step !== 'success' && (
          <div className="text-center mb-4">
            <h5 style={{ color: '#3d3d3d', fontWeight: '600' }}>Virtual Office Address</h5>
            <p style={{ fontSize: '0.9rem', color: '#3d3d3d' }}>
              To get the Virtual Office Address please provide the following details
            </p>
          </div>
        )
      }

      {step === 'upload' && (
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            {/* Left Column: Labels */}
            <div className="col-md-6 col-12">
              <div className="mb-5">
                <label style={{ color: '#007C36', fontWeight: '500' }}>
                  1. Passport / EU Identification Card
                </label>
              </div>
            </div>

             {/* Right Column: Inputs */}
             <div className="col-md-6 col-12">
               {/* Upload Box */}
               <div className="bg-white mb-3">
                 {!file ? (
                   <label
                     className="w-100 border rounded-5 p-4 py-3 text-center text-muted"
                     style={{ borderStyle: 'dashed', cursor: 'pointer' ,   border: '1px solid #3D3D3D40', }}
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
                       onChange={handleFileChange}
                     />
                   </label>
                 ) : (
                   <div className="border rounded d-flex align-items-center justify-content-between px-3 py-2 bg-white">
                     <div className="d-flex align-items-center gap-2">
                       <FaFileAlt className="text-muted" />
                       <div>
                         <div>{file.name}</div>
                         <div className="text-muted" style={{ fontSize: '0.8rem' }}>
                           {Math.round(file.size / 1024)} KB
                         </div>
                       </div>
                     </div>
                     <button
                       onClick={removeFile}
                       className="remove-file btn btn-link text-decoration-none text-muted p-0 bg-white"
                       aria-label="Remove file"
                       style={{ width: '30px' }}
                     >
                       <FaMinus />
                     </button>
                   </div>
                 )}
               </div>

             </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-md-6 col-12'>
              <div>
                <label style={{ color: '#007C36', fontWeight: '500' }}>
                  2. Personal Details
                </label>
              </div>
            </div>
            <div className='col-md-6 col-12'>
              {/* Email Input */}
              <div className="mb-3 position-relative">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    height: '54px',
                    borderRadius: '50px',
                    paddingTop: '15px',
                    paddingRight: '50px',
                    paddingBottom: '15px',
                    paddingLeft: '50px',
                    opacity: 1,
                    borderWidth: '1px',
                    border: '1px solid #3D3D3D40',
                    background: 'transparent',
                    fontSize: '14px'
                  }}
                />
                <Image
                  src="/assets/img/icon/sms.png"
                  alt="Email Icon"
                  width={20}
                  height={20}
                  className="position-absolute"
                  style={{
                    top: '50%',
                    left: '20px',
                    transform: 'translateY(-50%)',
                    zIndex: 10
                  }}
                />
              </div>

              {/* Phone Input */}
              <div className="mb-4">
                <PhoneInput
                  country={'gb'}
                  value={phone}
                  onChange={setPhone}
                  inputClass="form-control"
                  inputStyle={{
                    width: "100%",
                    height: "54px",
                    borderRadius: "50px",
                    paddingTop: "15px",
                    paddingRight: "20px",
                    paddingBottom: "15px",
                    paddingLeft: "65px",
                    opacity: 1,
                    borderWidth: "1px",
                    border: "1px solid #3D3D3D40",
                    background: "transparent",
                    fontSize: "14px"
                  }}
                  buttonStyle={{
                    borderRadius: "50px 0 0 50px",
                    height: "54px",
                    border: "1px solid #3D3D3D40",
                    background: "transparent"
                  }}
                  containerStyle={{ width: '100%' }}
                />
              </div>
            </div>
          </div>

          {/* Buttons: Centered */}
          <div className="text-center mt-4">
            <button
              type="submit"
              className="btn btn-success mb-2"
              disabled={!file || !email || !phone}
              style={{
                borderRadius: '25px',
                height: '40px',
                fontSize: '16px',
                fontWeight: '600',
                minWidth: '350px',
                width: '400px',
                cursor: !file || !email || !phone ? 'not-allowed' : 'pointer',
                backgroundColor: !file || !email || !phone ? '#ccc' : '#007C36',
                border: 'none'
              }}
            >
              Submit
            </button>
              <div>
                <button 
                  onClick={handleBack}
                  className="text-success text-decoration-none small fw-semibold border-0 bg-transparent"
                  style={{ cursor: 'pointer' }}
                >
                  Go Back
                </button>
              </div>
          </div>
        </form>
      )
      }
      {
        step === "success" && (
          <div className="container d-flex justify-content-center align-items-center bg-transparent" style={{ minHeight: '75vh' }}>
            <div className="text-center">
              {/* Placeholder image - replace src with your actual image path */}
              <Image
                src={SuccessImage}
                alt="Success"
                style={{ width: "200px", height: "200px", objectFit: "contain", marginBottom: "20px" }}
              />

              <h5 className="fw-semibold mb-2">
                Great! We have received your Details
              </h5>

              <button className="mt-30 btn text-white"
                style={{
                  borderRadius: '25px',
                  height: '42px',
                  fontSize: '16px',
                  fontWeight: '600',
                  minWidth: '350px',
                  width: '400px',
                  cursor: 'pointer',
                  backgroundColor: '#007C36',
                  border: 'none'
                }}
                onClick={handleContinue}>
                Proceed to Payment
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default VirtualOfficeForm;
