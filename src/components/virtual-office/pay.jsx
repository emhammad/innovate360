import React from 'react';
import HeaderTwo from '@/src/layout/headers/header-2';
import Pay from './invoice-flow';

const HomeTwo = () => {
    return (
        <>
            <HeaderTwo />
            <main>
              <Pay/>
            </main>

        </>
    );
};

export default HomeTwo;