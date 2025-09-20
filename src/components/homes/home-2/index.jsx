import React from 'react';
import HeaderTwo from '@/src/layout/headers/header-2';
import WelcomeScreen from './welcome';
import Topbar from '@/src/common/topbar';

const HomeTwo = () => {
    return (
        <>
            {/* <HeaderTwo /> */}
            <Topbar />
            <main>
              <WelcomeScreen/>
            </main>

        </>
    );
};

export default HomeTwo;