import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import MainScreen from '../../components/virtual-office/index';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Company" />
            <MainScreen />
        </Wrapper>
    );
};

export default index;