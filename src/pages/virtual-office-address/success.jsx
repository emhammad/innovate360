import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import VirtualOfficeSuccess from '../../components/virtual-office/success';

export default function VirtualOfficeSuccessPage() {
  return (
    <Wrapper>
      <SEO pageTitle="Virtual Office Success" />
      <VirtualOfficeSuccess />
    </Wrapper>
  );
}
