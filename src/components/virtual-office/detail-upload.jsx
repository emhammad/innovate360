'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaUpload, FaEnvelope } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import SuccessImage from "@assets/img/company/completed.png";

const VirtualOfficeForm = () => {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState('upload');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ file, email, phone });
    setStep('success');
  };
  const handleContinue = () => {

    window.location.href="/virtual-office-address/payment";

  };
  return (
    <div className="container py-5 d-flex justify-content-center flex-column" style={{ minHeight: '70vh' }}>
      {/* Title */}
      {
        step !== 'success' && (
          <div className="text-center mb-4">
            <h5 style={{ color: '#3d3d3d' , fontWeight: '600' }}>Virtual Office Address</h5>
            <p style={{ fontSize: '0.9rem' , color: '#3d3d3d' }}>
              To get the Virtual Office Address please provide the following details
            </p>
          </div>
        )
      }
      
      { step === 'upload' &&(
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            {/* Left Column: Labels */}
            <div className="col-md-6 col-12">
              <div className="mb-5">
                <label style={{ color: '#007C36' , fontWeight: '500' }}>
                  1. Passport / EU Identification Card
                </label>
              </div>
            </div>

            {/* Right Column: Inputs */}
            <div className="col-md-6 col-12">
              {/* Upload Box */}
              <div
                className="border rounded-4 text-center p-4 mb-5"
                style={{ backgroundColor: '#fff', cursor: 'pointer' }}
                onClick={() => document.getElementById('fileInput').click()}
              >
                <FaUpload size={20} className="text-muted mb-2" />
                <div className="text-muted">Click to upload or drag and drop</div>
                <small className="text-muted">SVG, PNG, JPG or GIF (max. 800×400px)</small>
                <input
                  type="file"
                  id="fileInput"
                  accept=".svg,.png,.jpg,.jpeg,.gif"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </div>

            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-md-6 col-12'>
              <div>
                <label style={{ color: '#007C36' , fontWeight: '500' }}>
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
                height: '42px',
                fontSize: '16px',
                fontWeight: '600',
                minWidth: '350px',
                cursor: !file || !email || !phone ? 'not-allowed' : 'pointer',
                backgroundColor: !file || !email || !phone ? '#ccc' : undefined,
                border: 'none'
              }}
            >
              Submit
            </button>
            <div>
              <a href="#" className="text-success text-decoration-none small fw-semibold">
                Go Back
              </a>
            </div>
          </div>
        </form>
      )
      }
      {
        step ==="success" &&(
          <div className="container d-flex justify-content-center align-items-center bg-transparent" style={{minHeight : '75vh'}}>
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
