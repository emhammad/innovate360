import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import Home from '../../components/admin/mainScreen';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Admin - Dashboard" />
            <Home />
        </Wrapper>
    );
};

export default index;