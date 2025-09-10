
import HeaderOne from '@/src/layout/headers/header-2';
import React from 'react';
import ContactArea from './contact-area';
import FooterThree from '@/src/layout/footers/footer-3';
import HeroArea from './get-quote-hero-area';


const Contact = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <HeroArea/>
                <ContactArea />
                
            </main>
            <FooterThree />
        </>
    );
};

export default Contact;