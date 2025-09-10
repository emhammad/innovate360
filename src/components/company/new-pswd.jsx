// pages/new-password.js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function NewPassword() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirm) {
      alert('Passwords do not match!');
      return;
    }

    // Proceed with password reset logic here
    alert('Password has been reset!');
    window.location.href='/company';
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmVisibility = () => {
    setShowConfirm(!showConfirm);
  };

  return (
    <>
      <Head>
        <title>Reset Password - Innovate360</title>
      </Head>

      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card" style={{
          width: '580px',
          height: '500px',
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
            <h4 className="fw-bold mb-2" style={{ fontWeight: '400', color: '#3D3D3D' }}>New Password</h4>
            <p className="text-muted mb-0" style={{ fontSize: '14px' }}>Enter your new password</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Password Input */}
            <div className="mb-3 position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                src="/assets/img/icon/lock.png"
                alt="Lock Icon"
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
              <Image
                src="/assets/img/icon/eye-slash.png"
                alt="Toggle Password"
                width={20}
                height={20}
                className="position-absolute"
                style={{
                  top: '50%',
                  right: '20px',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  cursor: 'pointer'
                }}
                role="button"
                onClick={togglePasswordVisibility}
              />
            </div>

            {/* Confirm Password Input */}
            <div className="mb-3 position-relative">
              <input
                type={showConfirm ? "text" : "password"}
                className="form-control"
                placeholder="Confirm password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
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
                src="/assets/img/icon/lock.png"
                alt="Lock Icon"
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
              <Image
                src="/assets/img/icon/eye-slash.png"
                alt="Toggle Password"
                width={20}
                height={20}
                className="position-absolute"
                style={{
                  top: '50%',
                  right: '20px',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  cursor: 'pointer'
                }}
                role="button"
                onClick={toggleConfirmVisibility}
              />
            </div>

            {/* Reset Password Button */}
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
              Reset Password
            </button>
          </form>

          {/* Back to Login Link */}
          <div className="text-center mt-4">
            <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
              Remember Password? <a href="/company" className="text-success text-decoration-none" style={{ fontWeight: '500' }}>Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
