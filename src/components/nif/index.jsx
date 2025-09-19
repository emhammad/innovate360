import React from 'react';
import WelcomeScreen from './detail-upload';
import Topbar from '@/src/common/topbar';

const HomeTwo = () => {
    return (
        <>
            <Topbar />
            <main>
              <WelcomeScreen/>
            </main>

        </>
    );
};

export default HomeTwo;