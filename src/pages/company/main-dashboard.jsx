import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import MainDashboard from '../../components/company/main-dashboard';

export default function VirtualOfficeMainDashboardPage() {
  return (
    <Wrapper>
      <SEO pageTitle="Virtual Office Dashboard" />
      <MainDashboard />
    </Wrapper>
  );
}