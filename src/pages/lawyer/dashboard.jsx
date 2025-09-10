import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import Home from '../../components/lawyer/mainScreen';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Lawyer - Dashboard" />
            <Home />
        </Wrapper>
    );
};

export default index;