import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Topbar from '@/src/components/company/common/topbar';
import PaymentMethod from '@/src/components/company/steps/PaymentMethod';

const PaymentMethodPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem('isAuthenticated');
    const token = localStorage.getItem('authToken');

    if (authStatus === 'true' && token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleNext = (paymentMethod) => {
    // Handle payment method selection - you can redirect to payment gateway or next step
    console.log('Selected payment method:', paymentMethod);
    // For now, redirect to dashboard
    window.location.href = '/company/dashboard';
  };

  const handleBack = () => {
    // Go back to choose company type
    window.location.href = '/company/choose-company-type';
  };

  return (
    <>
      <Head>
        <title>Payment Method - Innovate360</title>
      </Head>
      
      {/* Show topbar only when authenticated */}
      {isAuthenticated && <Topbar />}
      
      {/* Main content */}
      <main>
        <PaymentMethod onNext={handleNext} onBack={handleBack} />
      </main>
    </>
  );
};

export default PaymentMethodPage;
