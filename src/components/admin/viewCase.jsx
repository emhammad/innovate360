import React from 'react';
import CaseDetail from "./dashboard/CaseDetail";
import Topbar from '@/src/common/topbar';

const HomeTwo = () => {
    return (
        <>
            <Topbar />
            <main>
              <CaseDetail/>
            </main>

        </>
    );
};

export default HomeTwo;