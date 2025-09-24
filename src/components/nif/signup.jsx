"use client";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/bootstrap.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Topbar from '@/src/common/topbar';
import { validateForm, getEmailErrorMessage, getPasswordErrorMessage, getNameErrorMessage, getPhoneErrorMessage } from '@/src/utils/validation';

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
  const [fieldErrors, setFieldErrors] = useState({});
  const router = useRouter();

  // Check if user is already authenticated
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    const currentUser = localStorage.getItem('currentUser');

    if (authStatus === 'true' && currentUser) {
      // If user is already logged in, redirect to sucess
      router.push('/nif-number/success');
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear general error when user starts typing
    if (error) {
      setError('');
    }

    // Clear field-specific error
    if (fieldErrors[name]) {
      setFieldErrors({ ...fieldErrors, [name]: '' });
    }
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
    // Clear general error when user starts typing
    if (error) {
      setError('');
    }
    // Clear field-specific error
    if (fieldErrors.phone) {
      setFieldErrors({ ...fieldErrors, phone: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setFieldErrors({});

    // Validate form
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setFieldErrors(validation.errors);
      setIsLoading(false);
      return;
    }

    try {
      // Create a new user object
      const newUser = {
        id: Date.now(), // Simple ID generation
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: 'Admin User',
        phone: formData.phone,
        profileImage: '/assets/img/team/team-1.jpg' // Default user image
      };

      // Store user data in localStorage
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      localStorage.setItem('isAuthenticated', 'true');

      // Navigate to main dashboard
      router.push('/nif-number/success');
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
      <div className="d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '90vh' }}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="card" style={{
              width: '600px',
              minHeight: '500px',
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
                    className={`form-control ${fieldErrors.name ? 'is-invalid' : ''}`}
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
                      border: fieldErrors.name ? '1px solid #dc3545' : '1px solid #79747E',
                      background: 'transparent',
                      fontSize: '14px'
                    }}
                  />
                  {fieldErrors.name && (
                    <div className="invalid-feedback" style={{ display: 'block', fontSize: '12px', color: '#dc3545', marginTop: '4px' }}>
                      {fieldErrors.name}
                    </div>
                  )}
                </div>

                {/* Email Input */}
                <div className="mb-3">
                  <div className="position-relative">
                  <input
                    type="email"
                    className={`form-control ${fieldErrors.email ? 'is-invalid' : ''}`}
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
                      border: fieldErrors.email ? '1px solid #dc3545' : '1px solid #79747E',
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
                  {fieldErrors.email && (
                    <div className="invalid-feedback" style={{ display: 'block', fontSize: '12px', color: '#dc3545', marginTop: '4px' }}>
                      {fieldErrors.email}
                    </div>
                  )}
                </div>

                {/* Phone Input */}
                <div className="mb-3">
                  <PhoneInput
                    country={'gb'}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    inputClass={`form-control ${fieldErrors.phone ? 'is-invalid' : ''}`}
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
                      border: fieldErrors.phone ? "1px solid #dc3545" : "1px solid #79747E",
                      background: "transparent",
                      fontSize: "14px"
                    }}
                    buttonStyle={{
                      borderRadius: "50px 0 0 50px",
                      height: "50px",
                      border: fieldErrors.phone ? "1px solid #dc3545" : "1px solid #79747E",
                      background: "transparent"
                    }}
                  />
                  {fieldErrors.phone && (
                    <div className="invalid-feedback" style={{ display: 'block', fontSize: '12px', color: '#dc3545', marginTop: '4px' }}>
                      {fieldErrors.phone}
                    </div>
                  )}
                </div>

                {/* Password Input */}
                <div className="mb-4">
                  <div className="position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${fieldErrors.password ? 'is-invalid' : ''}`}
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
                        border: fieldErrors.password ? '1px solid #dc3545' : '1px solid #79747E',
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
                  {fieldErrors.password && (
                    <div className="invalid-feedback" style={{ display: 'block', fontSize: '12px', color: '#dc3545', marginTop: '4px' }}>
                      {fieldErrors.password}
                    </div>
                  )}
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
                    opacity: isLoading ? 0.7 : 1,
                    backgroundColor: '#007C36'
                  }}
                >
                  {isLoading ? 'Creating Account...' : 'Signup'}
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
