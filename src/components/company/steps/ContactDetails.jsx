"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/bootstrap.css';
import Image from 'next/image';

export default function ContactDetails({ onNext, onBack }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Validation
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = phone.length > 6;

  const isComplete = isValidEmail && isValidPhone;

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card" style={{
        width: '500px',
        borderRadius: '24px',
        paddingTop: '24px',
        paddingRight: '24px',
        paddingBottom: '48px',
        paddingLeft: '24px',
        border: 'none',
      }}>

        {/* Welcome Section */}
        <div className="text-center mb-4">
          <h4 className="mb-2" style={{ fontWeight: '600', color: '#3D3D3D' }}>Add Contact Details</h4>
          <p className="text-muted mb-4" style={{ fontSize: '14px' }}>Please enter an active email address and phone number for your registration records.</p>
        </div>

        <form>
          {/* Email Input */}
          <div className="mb-3 position-relative">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                height: '54px',
                borderRadius: '50px',
                paddingTop: '15px',
                paddingRight: '20px',
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
            />
          </div>

          {/* Next Button */}
          <button
            type="button"
            className="btn w-100"
            style={{
              borderRadius: '25px',
              height: '48px',
              fontSize: '16px',
              fontWeight: '600',
              backgroundColor: isComplete ? '#28a745' : '#1D1B201F',
              border: 'none',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              color: isComplete ? '#fff' : '#1D1B20',
              marginTop: '100px'
            }}
            disabled={!isComplete}
            onClick={() => onNext({ email, phone })}
          >
            Next
          </button>
        </form>

        {/* Back to Login Link */}
        <div className="text-center mt-4">
          <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
            <button 
              className="text-success text-decoration-none border-0 bg-transparent" 
              style={{ fontWeight: '500' }}
              onClick={onBack}
            >
              Go Back
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
