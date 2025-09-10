import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Topbar from '@/src/components/company/common/topbar';
import Invoice from '@/src/components/company/steps/Invoice';

const InvoicePage = () => {
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
    // Handle invoice completion - you can redirect to next step or dashboard
    console.log('Invoice data:', data);
    // For now, redirect to dashboard
    window.location.href = '/company/dashboard';
  };

  const handleBack = () => {
    // Go back to bank details
    window.location.href = '/company/bank-details';
  };

  return (
    <>
      <Head>
        <title>Invoice - Innovate360</title>
      </Head>
      
      {/* Show topbar only when authenticated */}
      {isAuthenticated && <Topbar />}
      
      {/* Main content */}
      <main>
        <Invoice onNext={handleNext} onBack={handleBack} />
      </main>
    </>
  );
};

export default InvoicePage;
