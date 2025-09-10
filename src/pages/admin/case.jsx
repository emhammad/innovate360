import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import ViewCase from '../../components/admin/viewCase';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Admin - View Case" />
            <ViewCase />
        </Wrapper>
    );
};

export default index;