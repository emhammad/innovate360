// pages/login.js
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { authenticateUser } from '../data/users';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Authenticate user
      const user = authenticateUser(formData.email, formData.password);

      if (user) {
        // Store user data in localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', 'true');

        // Redirect to main dashboard
        router.push('/main-dashboard');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Login - Innovate360</title>
      </Head>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card" style={{
          width: '580px',
          minHeight: '450px',
          borderRadius: '24px',
          paddingTop: '24px',
          paddingRight: '24px',
          paddingBottom: '48px',
          paddingLeft: '24px',
          border: 'none',
          boxShadow: '0px 0px 24.8px 0px #00000026'
        }}>
          {/* Logo */}
          <div className="text-left mb-">
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
            <h4 className="fw-bold mb-2" style={{ fontWeight: '400', color: '#3D3D3D' }}>Welcome</h4>
            <p className="text-muted mb-0" style={{ fontSize: '14px' }}>Login to continue</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Error Message */}
            {error && (
              <div className="alert alert-danger mb-3" style={{ fontSize: '14px', borderRadius: '8px' }}>
                {error}
              </div>
            )}

            {/* Email Input */}
            <div className="mb-3 position-relative">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
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

            {/* Password Input */}
            <div className="mb-3 position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
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

            {/* Forgot Password Link */}
            <div className="mb-4">
              <a
                href="/company/forgot-password"
                className="text-success text-decoration-none"
                style={{ fontSize: '14px', fontWeight: '500' }}
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-success w-100 mt-2"
              style={{
                borderRadius: '25px',
                height: '48px',
                fontSize: '16px',
                fontWeight: '600',
                backgroundColor: '#007C36',
                opacity: isLoading ? 0.7 : 1
              }}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

        </div>
      </div>
    </>
  );
}
