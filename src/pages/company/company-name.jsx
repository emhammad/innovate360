import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import CompanyName from '../../components/company/company-name';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Company" />
            <CompanyName />
        </Wrapper>
    );
};

export default index;