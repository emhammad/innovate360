import React, { useState, useEffect } from 'react';
import Process from "./process";
import Topbar from '../common/topbar';

const HomeTwo = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check authentication status on component mount
        const authStatus = localStorage.getItem('isAuthenticated');
        const token = localStorage.getItem('authToken');
        
        if (authStatus === 'true' && token) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <>
            {isAuthenticated && <Topbar />}
            <main>
              <Process/>
            </main>

        </>
    );
};

export default HomeTwo;