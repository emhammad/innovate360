"use client";
import { useEffect, useState } from "react";
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
import VirtualAddressDashboard from '../../pages/virtual-office-address/dashboard'; // Import your dashboard

import { CiUser } from "react-icons/ci";
import { SlEarphonesAlt } from "react-icons/sl";

export default function MainDashboardPage() {
    const router = useRouter();
    const [activeTab, setactiveTab] = useState(1);
    const [showNifSubmenu, setShowNifSubmenu] = useState(false);
    const [showVirtualDashboard, setShowVirtualDashboard] = useState(false);
    const [isInInvoiceFlow, setIsInInvoiceFlow] = useState(false);

    // Persist tab state on mount and tab change
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (!isAuthenticated) {
            router.push('/signin');
            return;
        }

        // Check persisted tab
        const persistedTab = localStorage.getItem('activeTab');
        const persistedNif = localStorage.getItem('showNifSubmenu');
        const persistedVirtual = localStorage.getItem('showVirtualDashboard');

        if (persistedNif === 'true') {
            setShowNifSubmenu(true);
            setactiveTab(1);
        } else if (persistedVirtual === 'true') {
            setShowVirtualDashboard(true);
            setactiveTab(1);
        } else if (persistedTab) {
            setactiveTab(Number(persistedTab));
        }

        // Handle one-time flags
        if (localStorage.getItem('fromNifSuccess') === 'true') {
            setShowNifSubmenu(true);
            setactiveTab(1);
            localStorage.removeItem('fromNifSuccess');
            localStorage.setItem('showNifSubmenu', 'true');
        }
        if (localStorage.getItem('fromVirtalService') === 'true') {
            setShowVirtualDashboard(true);
            setactiveTab(1);
            localStorage.removeItem('fromVirtalService');
            localStorage.setItem('showVirtualDashboard', 'true');
        }
    }, [router]);

    // Persist tab and submenu state on change
    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
        localStorage.setItem('showNifSubmenu', showNifSubmenu);
        localStorage.setItem('showVirtualDashboard', showVirtualDashboard);
    }, [activeTab, showNifSubmenu, showVirtualDashboard]);

    const handleNavClick = (index) => {
        setactiveTab(index);
        setShowVirtualDashboard(false);
        setShowNifSubmenu(false);
    };

    const getTabComponent = () => {
        if (showVirtualDashboard) return <VirtualAddressDashboard />;
        if (showNifSubmenu) return <NifDashboard onPaymentFlowChange={setIsInInvoiceFlow} />;
        switch (activeTab) {
            case 1:
                return <MainDashboard />;
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
            <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
                <Topbar />


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
                            <SlEarphonesAlt style={{ color: activeTab === 4 ? '#3D3D3D' : 'rgb(176, 213, 192)', fontWeight: '800' }} />
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
                            <CiUser style={{ color: activeTab === 5 ? '#3D3D3D' : 'rgb(176, 213, 192)', fontSize: '20px', fontWeight: '800' }} />
                        </div>

                    </div>
                    <div className="flex-grow-1">
                        <div className="container-fluid">
                            {showNifSubmenu && !isInInvoiceFlow && (
                                <div className="d-flex align-items-center" style={{ padding: '10px 0 0 0px' }}>
                                    <button
                                        onClick={() => {
                                            setShowNifSubmenu(false);
                                            localStorage.setItem('showNifSubmenu', 'false');
                                        }}
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
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Back to Main Dashboard
                                    </button>
                                </div>
                            )}
                            {showVirtualDashboard && (
                                <div className="d-flex align-items-center" style={{ padding: '10px 0 0 0px' }}>
                                    <button
                                        onClick={() => {
                                            setShowVirtualDashboard(false);
                                            localStorage.setItem('showVirtualDashboard', 'false');
                                        }}
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
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Back to Main Dashboard
                                    </button>
                                </div>
                            )}
                            {getTabComponent()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
