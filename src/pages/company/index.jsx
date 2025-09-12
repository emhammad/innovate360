import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import Dashboard from '../../components/company/dashboard';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Company" />
            <Dashboard />
        </Wrapper>
    );
};

export default index;