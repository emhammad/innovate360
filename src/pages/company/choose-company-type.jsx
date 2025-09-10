import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Topbar from '@/src/components/company/common/topbar';
import ChooseCompanyType from '@/src/components/company/steps/ChooseCompanyType';

const ChooseCompanyTypePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem('isAuthenticated');
    const token = localStorage.getItem('authToken');

    if (authStatus === 'true' && token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleNext = (selectedPackage) => {
    // Handle package selection - you can redirect to payment or next step
    console.log('Selected package:', selectedPackage);
    // For now, redirect to dashboard
    window.location.href = '/company/dashboard';
  };

  const handleBack = () => {
    // Go back to the stepper
    window.location.href = '/company/dashboard';
  };

  return (
    <>
      <Head>
        <title>Choose Company Type - Innovate360</title>
      </Head>
      
      {/* Show topbar only when authenticated */}
      {isAuthenticated && <Topbar />}
      
      {/* Main content */}
      <main>
        <ChooseCompanyType onNext={handleNext} onBack={handleBack} />
      </main>
    </>
  );
};

export default ChooseCompanyTypePage;
