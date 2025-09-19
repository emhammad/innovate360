import React from 'react';
import Topbar from '@/src/common/topbar';
import Pay from './invoice-flow';

const HomeTwo = () => {
    return (
        <>
            <Topbar />
            <main>
              <Pay/>
            </main>

        </>
    );
};

export default HomeTwo;