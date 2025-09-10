import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import Login from '../../components/lawyer/login';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Innovate360 - Lawyer" />
            <Login />
        </Wrapper>
    );
};

export default index;