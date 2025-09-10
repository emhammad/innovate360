// pages/forgot-password.js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending instructions
    if (email) {
      setShowSuccess(true);
      // Optionally hide the alert after a few seconds
      setTimeout(() => setShowSuccess(false), 4000);
    }
  };

  return (
    <>
      <Head>
        <title>Forgot Password - Innovate360</title>
      </Head>

      <div className="d-flex justify-content-center align-items-center vh-100 position-relative">
        {/* Success alert */}
        {showSuccess && (
          <div className="alert alert-success d-flex align-items-center position-absolute top-0 mt-3" style={{ zIndex: 10, width: 'auto' }}>
            <span className="me-2">✅</span>
            <div className="flex-grow-1">
              Instructions sent to your email.
            </div>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => setShowSuccess(false)}
            ></button>
          </div>
        )}

        {/* Forgot Password Card */}
        <div className="card" style={{
          width: '580px',
          height: '450px',
          borderRadius: '24px',
          paddingTop: '24px',
          paddingRight: '24px',
          paddingBottom: '48px',
          paddingLeft: '24px',
          border: 'none',
          boxShadow: '0px 0px 24.8px 0px #00000026'
        }}>
          {/* Logo */}
          <div className="text-left mb-4">
            <Image
              src="/assets/img/logo/innovate360.png"
              alt="INNOVATE 360°"
              width={200}
              height={60}
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Welcome Section */}
          <div className="text-start mb-4">
            <h4 className="fw-bold mb-2" style={{ fontWeight: '400', color: '#3D3D3D' }}>Forgot Password</h4>
            <p className="text-muted mb-0" style={{ fontSize: '14px' }}>Enter your email to get instructions</p>
          </div>

          <form onSubmit={handleSubmit}>
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

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-success w-100 mt-3"
              style={{
                borderRadius: '25px',
                height: '48px',
                fontSize: '16px',
                fontWeight: '600'
              }}
            >
              Submit
            </button>
          </form>

          {/* Back to Login Link */}
          <div className="text-center mt-4">
            <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
              Recalled Password? <a href="/company" className="text-success text-decoration-none" style={{ fontWeight: '500' }}>Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
