import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Topbar from '@/src/components/company/common/topbar';
import PaymentCard from '@/src/components/company/steps/PaymentCard';

const PaymentCardPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem('isAuthenticated');
    const token = localStorage.getItem('authToken');

    if (authStatus === 'true' && token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleNext = (paymentData) => {
    // Handle payment data - you can redirect to payment gateway or next step
    console.log('Payment data:', paymentData);
    // For now, redirect to dashboard
    window.location.href = '/company/dashboard';
  };

  const handleBack = () => {
    // Go back to payment method selection
    window.location.href = '/company/payment-method';
  };

  return (
    <>
      <Head>
        <title>Payment Card - Innovate360</title>
      </Head>
      
      {/* Show topbar only when authenticated */}
      {isAuthenticated && <Topbar />}
      
      {/* Main content */}
      <main>
        <PaymentCard onNext={handleNext} onBack={handleBack} />
      </main>
    </>
  );
};

export default PaymentCardPage;
