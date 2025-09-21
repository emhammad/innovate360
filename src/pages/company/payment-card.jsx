import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Topbar from '@/src/common/topbar';
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
    // Handle payment data - redirect to payment success
    console.log('Payment data:', paymentData);
    // Redirect to payment success page
    window.location.href = '/company/payment-success';
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
