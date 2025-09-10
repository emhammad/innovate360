import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import ForgotPswd from '../../components/company/forgot';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Company" />
            <ForgotPswd />
        </Wrapper>
    );
};

export default index;