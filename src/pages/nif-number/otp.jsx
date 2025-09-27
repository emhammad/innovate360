import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Topbar from '@/src/common/topbar';

const NifOtp = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [otpResent, setOtpResent] = useState(false);
    const inputRefs = useRef([]);
    const router = useRouter();

    // Check if user is already authenticated or if there's no pending user
    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated');
        const pendingUser = localStorage.getItem('pendingUser');

        if (authStatus === 'true') {
            // If user is already logged in, redirect to success
            router.push('/nif-number/success');
        } else if (!pendingUser) {
            // If no pending user, redirect to signup
            router.push('/nif-number/signup');
        }
    }, [router]);

    const handleInputChange = (index, value) => {
        // Only allow single digit
        if (value.length > 1) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
        const newOtp = [...otp];
        for (let i = 0; i < pastedData.length; i++) {
            newOtp[i] = pastedData[i];
        }
        setOtp(newOtp);

        // Focus the next empty input or the last one
        const nextIndex = Math.min(pastedData.length, 5);
        inputRefs.current[nextIndex]?.focus();
    };

    const isOtpComplete = otp.every(digit => digit !== '');

    const handleContinue = () => {
        if (isOtpComplete) {
            // Get pending user data
            const pendingUser = localStorage.getItem('pendingUser');

            if (pendingUser) {
                // Move user from pending to authenticated
                localStorage.setItem('currentUser', pendingUser);
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.removeItem('pendingUser');

                // Redirect to success page
                router.push('/nif-number/success');
            }
        }
    };

    const handleResendOtp = (e) => {
        e.preventDefault();
        setOtpResent(true);
    };

    return (
        <>
            <Topbar />
            <div
                className="d-flex align-items-center justify-content-center"
                style={{
                    minHeight: '90vh',
                    backgroundColor: 'white',
                    padding: '20px'
                }}
            >
                <div
                    className="text-center"
                    style={{
                        maxWidth: '400px',
                        width: '100%'
                    }}
                >
                    {/* Title */}
                    <h2
                        className="mb-4"
                        style={{
                            color: '#3D3D3D',
                            fontSize: '24px',
                            fontWeight: '600',
                            marginBottom: '32px'
                        }}
                    >
                        Two - Factor Authentication
                    </h2>

                    {/* OTP Input Fields */}
                    <div
                        className="d-flex justify-content-center gap-3 mb-4"
                        style={{ marginBottom: '32px' }}
                    >
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={el => inputRefs.current[index] = el}
                                type="text"
                                inputMode="numeric"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onPaste={handlePaste}
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    border: '1px solid #E0E0E0',
                                    borderRadius: '16px',
                                    textAlign: 'center',
                                    fontSize: '18px',
                                    fontWeight: '500',
                                    color: '#3D3D3D !important',
                                    backgroundColor: 'white',
                                    outline: 'none',
                                    transition: 'border-color 0.2s ease',
                                    padding: '0',
                                    margin: '0',
                                    boxSizing: 'border-box',
                                    lineHeight: '50px'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = '#28a745';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#E0E0E0';
                                }}
                            />
                        ))}
                    </div>

                    {/* Instruction Text */}
                    <p
                        className="mb-4"
                        style={{
                            color: '#3D3D3D',
                            fontSize: '16px',
                            lineHeight: '1.5',
                            marginBottom: '24px'
                        }}
                    >
                        A message with a verification code has been sent to your device. Enter the code to continue
                    </p>

                    {/* Resend Link */}
                    <div className="mb-4" style={{ marginBottom: '32px' }}>
                        <a
                            href="#"
                            onClick={handleResendOtp}
                            style={{
                                color: '#28a745',
                                textDecoration: 'none',
                                fontSize: '16px',
                                fontWeight: '500'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.textDecoration = 'underline';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.textDecoration = 'none';
                            }}
                        >
                            Didn't get a verification code?
                        </a>

                        {otpResent && (
                            <p style={{
                                color: '#3d3d3d',
                                fontSize: '16px',
                                fontWeight: '500',
                                margin: '8px 0 0 0'
                            }}>
                                OTP sent again
                            </p>
                        )}
                    </div>

                    {/* Continue Button */}
                    <button
                        type="button"
                        onClick={handleContinue}
                        style={{
                            width: '100%',
                            height: '42px',
                            backgroundColor: isOtpComplete ? '#28a745' : '#E0E0E0',
                            color: isOtpComplete ? 'white' : '#9E9E9E',
                            border: 'none',
                            borderRadius: '25px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: isOtpComplete ? 'pointer' : 'not-allowed',
                            transition: 'all 0.2s ease'
                        }}
                        disabled={!isOtpComplete}
                        onMouseEnter={(e) => {
                            if (isOtpComplete) {
                                e.target.style.backgroundColor = '#218838';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (isOtpComplete) {
                                e.target.style.backgroundColor = '#28a745';
                            }
                        }}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </>
    );
};

export default NifOtp;
