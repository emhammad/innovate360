import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Topbar from '@/src/common/topbar';
import BankDetails from '@/src/components/company/steps/BankDetails';

const BankDetailsPage = () => {
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
    // Handle bank payment completion - redirect to payment success
    console.log('Bank payment data:', data);
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
        <title>Bank Details - Innovate360</title>
      </Head>
      
      {/* Show topbar only when authenticated */}
      {isAuthenticated && <Topbar />}
      
      {/* Main content */}
      <main>
        <BankDetails onNext={handleNext} onBack={handleBack} />
      </main>
    </>
  );
};

export default BankDetailsPage;
