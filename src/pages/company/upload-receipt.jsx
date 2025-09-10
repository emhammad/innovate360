import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Topbar from '@/src/components/company/common/topbar';
import UploadReceipt from '@/src/components/company/steps/UploadReceipt';

const UploadReceiptPage = () => {
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
    // Handle receipt upload completion - you can redirect to next step or dashboard
    console.log('Receipt upload data:', data);
    // For now, redirect to dashboard
    window.location.href = '/company/dashboard';
  };

  const handleBack = () => {
    // Go back to invoice page
    window.location.href = '/company/invoice';
  };

  return (
    <>
      <Head>
        <title>Upload Receipt - Innovate360</title>
      </Head>
      
      {/* Show topbar only when authenticated */}
      {isAuthenticated && <Topbar />}
      
      {/* Main content */}
      <main>
        <UploadReceipt onNext={handleNext} onBack={handleBack} />
      </main>
    </>
  );
};

export default UploadReceiptPage;
