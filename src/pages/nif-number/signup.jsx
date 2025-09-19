import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import NIFSignupForm from '../../components/nif/signup';

const NIFSignupPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Signup - NIF Number" />
            <NIFSignupForm />
        </Wrapper>
    );
};

export default NIFSignupPage;
