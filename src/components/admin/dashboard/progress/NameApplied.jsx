// pages/resubmit.js

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import SuccessImage from "@assets/img/company/completed.png";
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function ResubmitFlow() {
  const [step, setStep] = useState(1);
  const [names, setNames] = useState(['Company 1', 'Company 1', 'Company 1', 'Company 1', 'Company 1']);

  const updateName = (index, value) => {
    const updated = [...names];
    updated[index] = value;
    setNames(updated);
  };
  const [newNames, setNewNames] = useState(Array(5).fill(""));
  const [approvalStatus, setApprovalStatus] = useState(Array(5).fill(null)); // null, 'approved', 'rejected'

  const handleInputChange = (index, value) => {
    const updated = [...names];
    updated[index] = value;
    setNewNames(updated);
  };

  const handleApprove = (index) => {
    const updated = [...approvalStatus];
    updated[index] = 'approved';
    setApprovalStatus(updated);
  };

  const handleReject = (index) => {
    const updated = [...approvalStatus];
    updated[index] = 'rejected';
    setApprovalStatus(updated);
  };

  const addNameField = () => {
    setNames([...names, ""]); setNewNames([...newNames, ""]);
  };

  const handleSubmit = () => {
    // Normally you would send the names to the server here
    console.log("Submitted names:", newNames);
    setStep(3);
  };

  return (
    <div className="container py-5" style={{ backgroundColor: '#F3F9F6', borderRadius: '1rem' }}>
      <Head>
        <title>Company Name</title>
      </Head>

      {/* Step 1: Guidelines + submitted names */}
      {step === 1 && (
        <div className="row px-4">
          <div className="col-md-5">
            <h5 className="mb-3" style={{ color: '#3D3D3D' }}>Company names</h5>
          </div>

          <div className="col-md-7">
            {/* Input Fields */}
            <div className="d-flex flex-column align-items-center">
              {names.map((name, index) => (
                <div className="mb-3 d-flex align-items-center gap-3" key={index} style={{ width: '100%', minWidth: '500px' }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your company name"
                    value={name}
                    onChange={(e) => updateName(index, e.target.value)}
                    style={{
                      flex: 1,
                      height: '48px',
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
                    readOnly
                  />

                  {/* Reject Button */}
                  <button
                    onClick={() => handleReject(index)}
                    disabled={approvalStatus[index] !== null}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '6px 16px',
                      borderRadius: '25px',
                      border: 'none',
                      backgroundColor: approvalStatus[index] === 'rejected' ? '#FEE7E6' : '#FEE7E6',
                      color: '#dc3545',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: approvalStatus[index] === null ? 'pointer' : 'not-allowed',
                      opacity: approvalStatus[index] === null ? 1 : 0.7,
                      minWidth: '100px',
                      justifyContent: 'center'
                    }}
                  >
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#dc3545',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <FaTimes size={10} color="white" />
                    </div>
                    Reject
                  </button>

                  {/* Approve Button */}
                  <button
                    onClick={() => handleApprove(index)}
                    disabled={approvalStatus[index] !== null}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '6px 16px',
                      borderRadius: '25px',
                      border: 'none',
                      backgroundColor: approvalStatus[index] === 'approved' ? '007c36' : '#28a745',
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: approvalStatus[index] === null ? 'pointer' : 'not-allowed',
                      opacity: approvalStatus[index] === null ? 1 : 0.7,
                      minWidth: '100px',
                      justifyContent: 'center'
                    }}
                  >
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <FaCheck size={10} color="#28a745" />
                    </div>
                    Approve
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </div >
  );
}
