import React, { useEffect } from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import MainDashboard from '../../components/company/main-dashboard';

export default function VirtualOfficeMainDashboardPage() {
  useEffect(() => {
    // Set service type to company when this page loads
    localStorage.setItem('selectedService', 'company');
  }, []);

  return (
    <Wrapper>
      <SEO pageTitle="Virtual Office Dashboard" />
      <MainDashboard />
    </Wrapper>
  );
}