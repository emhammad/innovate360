import React from 'react';
import HeaderTwo from '@/src/layout/headers/header-2';
import Register from './create-account';

const HomeTwo = () => {
    return (
        <>
            <HeaderTwo />
            <main>
              <Register/>
            </main>

        </>
    );
};

export default HomeTwo;