import React from 'react';
import Dashboard from "./dashboard/nav";
import Topbar from '../company/common/topbar';
import SideNav from '../company/common/sidenav';

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