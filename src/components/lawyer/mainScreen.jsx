import React from 'react';
import Dashboard from "./dashboard/nav";
import Topbar from '../company/common/topbar';


const HomeTwo = () => {
    return (
        <>
            <Topbar />
            <main>
              <Dashboard/>
            </main>

        </>
    );
};

export default HomeTwo;