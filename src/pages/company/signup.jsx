import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import Register from '../../components/company/signup/index';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Company" />
            <Register />
        </Wrapper>
    );
};

export default index;