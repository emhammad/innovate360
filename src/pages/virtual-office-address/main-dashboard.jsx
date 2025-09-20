import React, { useEffect } from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import VirtualOfficeMainDashboard from '../../components/virtual-office/main-dashboard';

export default function VirtualOfficeMainDashboardPage() {
  useEffect(() => {
    // Set service type to virtual-office when this page loads
    localStorage.setItem('selectedService', 'virtual-office');
  }, []);

  return (
    <Wrapper>
      <SEO pageTitle="Virtual Office Dashboard" />
      <VirtualOfficeMainDashboard />
    </Wrapper>
  );
}