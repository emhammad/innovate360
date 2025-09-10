import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import Login from '../../components/admin/login';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Innovate360 - Admin" />
            <Login />
        </Wrapper>
    );
};

export default index;