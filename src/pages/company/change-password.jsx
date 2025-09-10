import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import ChangePswd from '../../components/company/new-pswd';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Company" />
            <ChangePswd />
        </Wrapper>
    );
};

export default index;