import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import VirtualOfficeSignup from '../../components/virtual-office/signup';

export default function VirtualOfficeSignupPage() {
  return (
    <Wrapper>
      <SEO pageTitle="Virtual Office Signup" />
      <VirtualOfficeSignup />
    </Wrapper>
  );
}
