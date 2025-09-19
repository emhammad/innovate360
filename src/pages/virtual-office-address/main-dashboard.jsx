import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import VirtualOfficeMainDashboard from '../../components/virtual-office/main-dashboard';

export default function VirtualOfficeMainDashboardPage() {
  return (
    <Wrapper>
      <SEO pageTitle="Virtual Office Dashboard" />
      <VirtualOfficeMainDashboard />
    </Wrapper>
  );
}