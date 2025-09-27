import React, { useEffect, useState } from 'react';
import Dashboard from "./dashboard/nav";
import useSticky from '@/src/hooks/use-sticky';
import Link from 'next/link';
import Image from 'next/image';
import logo_img from "@assets/img/logo/innovate.svg";
import loginIcon from "@assets/img/icon/login.png";
import Topbar from '@/src/common/topbar';

const HomeTwo = () => {
    const { sticky } = useSticky()
    const [businessName] = useState("BusinessName"); // You can get this from props or context
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check authentication status on component mount
        const authStatus = localStorage.getItem('isAuthenticated');
        const token = localStorage.getItem('authToken');

        if (authStatus === 'true' && token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        // Clear all localStorage data
        localStorage.clear();
        // Update state
        setIsAuthenticated(false);
        // Redirect to login page
        window.location.href = '/';
    };
    return (
        <>
            <Topbar />
            <main>
                <Dashboard />
            </main>

        </>
    );
};

export default HomeTwo;