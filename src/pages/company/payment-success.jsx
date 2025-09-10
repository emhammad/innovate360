import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Topbar from '@/src/components/company/common/topbar';
import PaymentSuccess from '@/src/components/company/steps/PaymentSuccess';

const PaymentSuccessPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem('isAuthenticated');
    const token = localStorage.getItem('authToken');

    if (authStatus === 'true' && token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleNext = (data) => {
    // Handle payment success completion - redirect to dashboard
    console.log('Payment success data:', data);
    // Redirect to dashboard
    window.location.href = '/company/dashboard';
  };

  const handleBack = () => {
    // Go back to upload receipt page
    window.location.href = '/company/upload-receipt';
  };

  return (
    <>
      <Head>
        <title>Payment Successful - Innovate360</title>
      </Head>
      
      {/* Show topbar only when authenticated */}
      {isAuthenticated && <Topbar />}
      
      {/* Main content */}
      <main>
        <PaymentSuccess onNext={handleNext} onBack={handleBack} />
      </main>
    </>
  );
};

export default PaymentSuccessPage;
