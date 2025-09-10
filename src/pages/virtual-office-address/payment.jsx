import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import Payment from '../../components/virtual-office/pay';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="virtual office Address - Payment" />
            <Payment />
        </Wrapper>
    ); 
};

export default index;