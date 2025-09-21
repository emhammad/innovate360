"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import MainDashboard from "./dashboard-screen"
import Transactions from "../../components/company/dashboard/Transaction"
import ChatBox from "../../components/company/dashboard/ChatBox"
import CustomerSupport from "./CustomerSupport"
import Profile from "./Profile"
import Topbar from "@/src/common/topbar";

import DashboardIcon from "@assets/img/sideNav/dashboard.png";
import DashboardIconActive from "@assets/img/sideNav/dashboard-active.png";
import CardIcon from "@assets/img/sideNav/card.png";
import CardIconActive from "@assets/img/sideNav/card-active.png";
import ChatIcon from "@assets/img/sideNav/chat.png";
import ChatIconActive from "@assets/img/sideNav/chat-active.png";

import NifDashboard from '../../components/nif/AnalyticDashboard';

import { CiUser } from "react-icons/ci";
import { SlEarphonesAlt } from "react-icons/sl";

export default function MainDashboardPage() {
    const router = useRouter();
    const [activeTab, setactiveTab] = useState(1); // Set Dashboard as default
    const [showNifSubmenu, setShowNifSubmenu] = useState(false);

    useEffect(() => {
        // Check if user is authenticated
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (!isAuthenticated) {
            router.push('/signin');
            return;
        }

        // Check if user came from NIF success page using localStorage
        const fromNifSuccess = localStorage.getItem('fromNifSuccess');
        if (fromNifSuccess === 'true') {
            setShowNifSubmenu(true);
            setactiveTab(1); // Set to Dashboard tab
            // Clear the flag after using it
            localStorage.removeItem('fromNifSuccess');
        }
    }, [router]);

    const handleNavClick = (index) => {
        setactiveTab(index);
    };

    const getTabComponent = () => {
        switch (activeTab) {
            case 1:
                return showNifSubmenu ? <NifDashboard /> : <MainDashboard />;
            case 2:
                return <Transactions />;
            case 3:
                return <ChatBox />;
            case 4:
                return <CustomerSupport />;
            case 5:
                return <Profile />;
            default:
                return <MainDashboard />;
        }
    };
    return (
        <>
            <Head>
                <title>Innovate360</title>
            </Head>
            <Topbar />
            <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>


                <div className="d-flex flex-grow-1">
                    {/* Left icon sidebar */}
                    <div
                        className="text-white d-flex flex-column align-items-center py-3"
                        style={{ width: "5vw", background: "#007C36" }}
                    >
                        {/* Dashboard Tab */}
                        <div
                            className="d-flex align-items-center justify-content-center mb-4"
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "25px",
                                cursor: "pointer"
                            }}
                            role="button"
                            onClick={() => handleNavClick(1)}
                        >
                            <Image
                                src={activeTab === 1 ? DashboardIconActive : DashboardIcon}
                                alt="Dashboard"
                                width={activeTab === 1 ? '25px' : '35px'}
                                height={activeTab === 1 ? '25px' : '35px'}
                            />
                        </div>

                        {/* Transactions Tab */}
                        <div
                            className="d-flex align-items-center justify-content-center mb-4"
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "25px",
                                cursor: "pointer"
                            }}
                            role="button"
                            onClick={() => handleNavClick(2)}
                        >
                            <Image
                                src={activeTab === 2 ? CardIconActive : CardIcon}
                                alt="Transactions"
                                width={activeTab === 2 ? '25px' : '35px'}
                                height={activeTab === 2 ? '25px' : '35px'}
                            />
                        </div>

                        {/* Chat Box Tab */}
                        <div
                            className="d-flex align-items-center justify-content-center mb-4"
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "25px",
                                cursor: "pointer"
                            }}
                            role="button"
                            onClick={() => handleNavClick(3)}
                        >
                            <Image
                                src={activeTab === 3 ? ChatIconActive : ChatIcon}
                                alt="Chat Box"
                                width={activeTab === 3 ? '25px' : '35px'}
                                height={activeTab === 3 ? '25px' : '35px'}
                            />
                        </div>

                        {/* Customer Support Tab */}
                        <div
                            className="d-flex align-items-center justify-content-center mb-4"
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "25px",
                                border: '1px solid rgb(176, 213, 192)',
                                backgroundColor: activeTab === 4 ? "#EDFF8B" : "transparent",
                                cursor: "pointer"
                            }}
                            role="button"
                            onClick={() => handleNavClick(4)}
                        >
                            <SlEarphonesAlt style={{ color: activeTab === 4 ? '#3D3D3D' : 'rgb(176, 213, 192)' , fontWeight: '800' }} />
                        </div>

                        {/* Profile Tab */}
                        <div
                            className="d-flex align-items-center justify-content-center mb-4"
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "25px",
                                border: '1px solid rgb(176, 213, 192)',
                                backgroundColor: activeTab === 5 ? "#EDFF8B" : "transparent",
                                cursor: "pointer"
                            }}
                            role="button"
                            onClick={() => handleNavClick(5)}
                        >
                            <CiUser style={{ color: activeTab === 5 ? '#3D3D3D' : 'rgb(176, 213, 192)', fontSize: '20px' , fontWeight: '800' }} />
                        </div>

                    </div>
                    <div className="flex-grow-1">
                        <div className="container-fluid">
                            {/* Back Button - Only show when NIF submenu is active */}
                            {showNifSubmenu && (
                                <div className="d-flex align-items-center mb-3" style={{ padding: '20px 0 0 20px' }}>
                                    <button
                                        onClick={() => setShowNifSubmenu(false)}
                                        style={{
                                            backgroundColor: 'transparent',
                                            color: '#007C36',
                                            borderRadius: '20px',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                        }}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Back to Main Dashboard
                                    </button>
                                </div>
                            )}

                            {getTabComponent()}

                            {/* Dynamic step content */}

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
