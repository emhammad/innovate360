import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import Login from '../../components/company/login';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Company" />
            <Login />
        </Wrapper>
    );
};

export default index;