import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import NIFSuccessStep from '../../components/nif/success-step';

const NIFSuccessPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Success - NIF Number" />
            <NIFSuccessStep />
        </Wrapper>
    );
};

export default NIFSuccessPage;
