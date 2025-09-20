"use client";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/bootstrap.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Topbar from '@/src/common/topbar';

export default function NIFSignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // Check if user is already authenticated
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    const currentUser = localStorage.getItem('currentUser');
    
    if (authStatus === 'true' && currentUser) {
      const user = JSON.parse(currentUser);
      // If user is already logged in and it's a NIF user, redirect to dashboard
      if (user.service === 'nif') {
        router.push('/main-dashboard');
      }
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Create a new NIF user object
      const newUser = {
        id: Date.now(), // Simple ID generation
        name: formData.name,
        email: formData.email,
        password: formData.password,
        service: 'nif', // Always nif for this signup page
        role: 'NIF User',
        phone: formData.phone,
        profileImage: '/assets/img/team/team-1.jpg' // Default NIF user image
      };

      // Store user data in localStorage
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      localStorage.setItem('selectedService', 'nif');
      localStorage.setItem('isAuthenticated', 'true');
      
      // Navigate to main dashboard
      router.push('/main-dashboard');
    } catch (err) {
      setError('An error occurred during signup. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <>
      <Topbar />
      <div className="py-5 d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '90vh' }}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="card" style={{
              width: '600px',
              height: '600px',
              borderRadius: '24px',
              paddingTop: '24px',
              paddingRight: '24px',
              paddingBottom: '48px',
              paddingLeft: '24px',
              border: 'none',
            }}>

              {/* Welcome Section */}
              <div className="text-center mb-4">
                <h4 className="fw-bold mb-2" style={{ fontWeight: '400', color: '#3D3D3D' }}>Create an account</h4>
                <p className="text-muted mb-0" style={{ fontSize: '14px' }}>Sign up for Innovate360 to track the progress of your NIF application</p>
              </div>

              <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
                {/* Error Message */}
                {error && (
                  <div className="alert alert-danger" role="alert" style={{ 
                    fontSize: '14px', 
                    padding: '8px 12px',
                    borderRadius: '8px',
                    marginBottom: '16px'
                  }}>
                    {error}
                  </div>
                )}

                {/* Name Input */}
                <div className="mb-3 position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      height: '50px',
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
                  />
                </div>

                {/* Email Input */}
                <div className="mb-3 position-relative">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      height: '50px',
                      borderRadius: '50px',
                      paddingTop: '15px',
                      paddingRight: '50px',
                      paddingBottom: '15px',
                      paddingLeft: '50px',
                      opacity: 1,
                      borderWidth: '1px',
                      border: '1px solid #79747E',
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
                <div className="mb-3">
                  <PhoneInput
                    country={'gb'}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    inputClass="form-control"
                    inputStyle={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "50px",
                      paddingTop: "15px",
                      paddingRight: "20px",
                      paddingBottom: "15px",
                      paddingLeft: "65px",
                      opacity: 1,
                      borderWidth: "1px",
                      border: "1px solid #79747E",
                      background: "transparent",
                      fontSize: "14px"
                    }}
                    buttonStyle={{
                      borderRadius: "50px 0 0 50px",
                      height: "50px",
                      border: "1px solid #79747E",
                      background: "transparent"
                    }}
                  />
                </div>

                {/* Password Input */}
                <div className="mb-4 position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      height: '50px',
                      borderRadius: '50px',
                      paddingTop: '15px',
                      paddingRight: '50px',
                      paddingBottom: '15px',
                      paddingLeft: '50px',
                      opacity: 1,
                      borderWidth: '1px',
                      border: '1px solid #79747E',
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

                {/* Signup Button */}
                <button
                  type="submit"
                  className="btn btn-success w-100"
                  disabled={isLoading}
                  style={{
                    borderRadius: '25px',
                    height: '42px',
                    fontSize: '16px',
                    fontWeight: '600',
                    marginTop: '50px',
                    opacity: isLoading ? 0.7 : 1
                  }}
                >
                  {isLoading ? 'Creating Account...' : 'Signup'}
                </button>
              </form>

              {/* Back to Login Link */}
              <div className="text-center mt-2">
                <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                  Already have an account? <a href="/signin" className="text-success text-decoration-none" style={{ fontWeight: '500' }}>Sign In</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
