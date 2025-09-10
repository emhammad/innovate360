import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import Dashboard from '../../components/nif/dashboard';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Dashboard" />
            <Dashboard />
        </Wrapper>
    );
};

export default index;