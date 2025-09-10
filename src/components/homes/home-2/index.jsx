import React from 'react';
import HeaderTwo from '@/src/layout/headers/header-2';
import WelcomeScreen from './welcome';

const HomeTwo = () => {
    return (
        <>
            <HeaderTwo />
            <main>
              <WelcomeScreen/>
            </main>

        </>
    );
};

export default HomeTwo;