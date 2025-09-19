import React from 'react';
import Register from './create-account';
import Topbar from '@/src/common/topbar';

const HomeTwo = () => {
    return (
        <>
            <Topbar />
            <main>
              <Register/>
            </main>

        </>
    );
};

export default HomeTwo;