"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import AnalyticsIcon from "@assets/img/sideNav/analytics.png";
import AnalyticsIconActive from "@assets/img/icon/chart.png";
import SideNavDashboardIcon from "@assets/img/icon/card.png";
import SideNavDashboardIconActive from "@assets/img/icon/card.png";
import VirtualOfficeIcon from "@assets/img/icon/document-text.png";
import VirtualOfficeIconActive from "@assets/img/icon/list-icon.png";
import CompanyIcon from "@assets/img/sideNav/dashboard.png";
import CompanyIconActive from "@assets/img/icon/buildings.png";
import CardIcon from "@assets/img/sideNav/card.png";
import CardIconActive from "@assets/img/icon/card.png";
import NifAnalyticDashboard from "../../components/nif/AnalyticDashboard"
import MainDashboard from "./dashboard-screen"
import Stepper from "../../components/company/dashboard/stepper"
import Transactions from "../../components/company/dashboard/Transaction"
import CompanyAnalyticDashboard from "../../components/company/AnalyticDashboard"
import ChatBox from "../../components/company/dashboard/ChatBox"
import CustomerSupport from "./CustomerSupport"
import Profile from "./Profile"
import Topbar from "@/src/common/topbar";

import { CiUser } from "react-icons/ci";
import { SlEarphonesAlt } from "react-icons/sl";

export default function MainDashboardPage() {
    const router = useRouter();
    const [activeTab, setactiveTab] = useState(1); // Set as default
    const [activeStep, setActiveStep] = useState(0); // Track the active step from AnalyticDashboard
    const [showPaymentFlow, setShowPaymentFlow] = useState(false); // Track payment flow state
    const [selectedService, setSelectedService] = useState('nif'); // Track selected service type

    useEffect(() => {
        // Check if user is authenticated
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (!isAuthenticated) {
            router.push('/signin');
            return;
        }


        // Read service from localStorage
        const service = localStorage.getItem('selectedService');
        if (service && ['nif', 'company', 'virtual-office'].includes(service)) {
            setSelectedService(service);
        } else {
            // If no service is set, default to 'nif' and save it
            setSelectedService('nif');
            localStorage.setItem('selectedService', 'nif');
        }
    }, [router]);


    // Define which tabs to show based on selected service
    const getVisibleTabs = () => {
        switch (selectedService) {
            case 'nif':
                return [1, 2, 7, 8]; // Dashboard, NifAnalyticDashboard, CustomerSupport, and Profile
            case 'company':
                return [1, 3, 4, 5, 6, 7, 8]; // All except NifAnalyticDashboard (case 2) + CustomerSupport + Profile
            case 'virtual-office':
                return [1, 7, 8]; // MainDashboard, CustomerSupport, and Profile
            default:
                return [1, 7, 8];
        }
    };

    const visibleTabs = getVisibleTabs();

    const handleNavClick = (index) => {
        // Only allow visible tabs based on selected service
        if (visibleTabs.includes(index)) {
            setactiveTab(index);
        }
    };

    const getTabComponent = () => {
        switch (activeTab) {
            case 1:
                return <MainDashboard />;
            case 2:
                return <NifAnalyticDashboard
                    onStepChange={setActiveStep}
                    onPaymentFlowChange={setShowPaymentFlow}
                />;
            case 3:
                return <Stepper />;
            case 4:
                return <Transactions />;
            case 5:
                return <CompanyAnalyticDashboard />;
            case 6:
                return <ChatBox />;
            case 7:
                return <CustomerSupport />;
            case 8:
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
                    {/* Left icon sidebar - Only hide when in actual payment flow (step 1 + showPaymentFlow) */}
                    {!(activeStep === 1 && showPaymentFlow) && (
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
                                    border: '1px solid ',
                                    filter: activeTab === 1 ? '' : 'brightness(3.5)',
                                    backgroundColor: activeTab === 1 ? "#EDFF8B" : "transparent",
                                    cursor: "pointer"
                                }}
                                role="button"
                                onClick={() => handleNavClick(1)}
                            >
                                <Image
                                    src={activeTab === 1 ? SideNavDashboardIconActive : SideNavDashboardIcon}
                                    alt="Dashboard"
                                    width={activeTab === 1 ? '25px' : '35px'}
                                    height={activeTab === 1 ? '25px' : '35px'}
                                />
                            </div>

                            {/* Analytics Tab - Only for NIF service */}
                            {visibleTabs.includes(2) && (
                                <div
                                    className="d-flex align-items-center justify-content-center mb-4"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "25px",
                                        backgroundColor: activeTab === 2 ? "#EDFF8B" : "transparent",
                                        cursor: "pointer"
                                    }}
                                    role="button"
                                    onClick={() => handleNavClick(2)}
                                >
                                    <Image
                                        src={activeTab === 2 ? AnalyticsIconActive : AnalyticsIcon}
                                        alt="Analytics"
                                        width={activeTab === 2 ? '25px' : '35px'}
                                        height={activeTab === 2 ? '25px' : '35px'}
                                    />
                                </div>
                            )}

                            {/* Virtual Office Tab - Only for Company service */}
                            {visibleTabs.includes(3) && (
                                <div
                                    className="d-flex align-items-center justify-content-center mb-4"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "25px",
                                        border: '1px solid ',
                                        filter: activeTab === 3 ? '' : 'brightness(3.5)',
                                        backgroundColor: activeTab === 3 ? "#EDFF8B" : "transparent",
                                        cursor: "pointer"
                                    }}
                                    role="button"
                                    onClick={() => handleNavClick(3)}
                                >
                                    <Image
                                        src={activeTab === 3 ? VirtualOfficeIconActive : VirtualOfficeIcon}
                                        alt="Virtual Office"
                                        width={activeTab === 3 ? '25px' : '35px'}
                                        height={activeTab === 3 ? '25px' : '35px'}
                                    />
                                </div>
                            )}

                            {/* Company Stepper Tab - Only for Company service */}
                            {visibleTabs.includes(4) && (
                                <div
                                    className="d-flex align-items-center justify-content-center mb-4"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "25px",
                                        backgroundColor: activeTab === 4 ? "#EDFF8B" : "transparent",
                                        cursor: "pointer"
                                    }}
                                    role="button"
                                    onClick={() => handleNavClick(4)}
                                >
                                    <Image
                                        src={activeTab === 4 ? CompanyIconActive : CompanyIcon}
                                        alt="Company Stepper"
                                        width={activeTab === 4 ? '25px' : '35px'}
                                        height={activeTab === 4 ? '25px' : '35px'}
                                    />
                                </div>
                            )}

                            {/* Transactions Tab - Only for Company service */}
                            {visibleTabs.includes(5) && (
                                <div
                                    className="d-flex align-items-center justify-content-center mb-4"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "25px",
                                        backgroundColor: activeTab === 5 ? "#EDFF8B" : "transparent",
                                        cursor: "pointer"
                                    }}
                                    role="button"
                                    onClick={() => handleNavClick(5)}
                                >
                                    <Image
                                        src={activeTab === 5 ? CardIconActive : CardIcon}
                                        alt="Transactions"
                                        width={activeTab === 5 ? '25px' : '35px'}
                                        height={activeTab === 5 ? '25px' : '35px'}
                                    />
                                </div>
                            )}

                            {/* Company Analytics Tab - Only for Company service */}
                            {visibleTabs.includes(6) && (
                                <div
                                    className="d-flex align-items-center justify-content-center mb-4"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "25px",
                                        backgroundColor: activeTab === 6 ? "#EDFF8B" : "transparent",
                                        cursor: "pointer"
                                    }}
                                    role="button"
                                    onClick={() => handleNavClick(6)}
                                >
                                    <Image
                                        src={activeTab === 6 ? AnalyticsIconActive : AnalyticsIcon}
                                        alt="Company Analytics"
                                        width={activeTab === 6 ? '25px' : '35px'}
                                        height={activeTab === 6 ? '25px' : '35px'}
                                    />
                                </div>
                            )}

                            {/* Customer Support Tab - Available for all services */}
                            {visibleTabs.includes(7) && (
                                <div
                                    className="d-flex align-items-center justify-content-center mb-4"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "25px",
                                        border: '1px solid ',
                                        filter: activeTab === 7 ? '' : 'brightness(3.5)',
                                        backgroundColor: activeTab === 7 ? "#EDFF8B" : "transparent",
                                        cursor: "pointer"
                                    }}
                                    role="button"
                                    onClick={() => handleNavClick(7)}
                                >
                                    <SlEarphonesAlt style={{ color: activeTab === 7 ? '#3D3D3D' : '#fff' }} />
                                </div>
                            )}

                            {/* Profile Tab - Available for all services */}
                            {visibleTabs.includes(8) && (
                                <div
                                    className="d-flex align-items-center justify-content-center mb-4"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "25px",
                                        border: '1px solid ',
                                        filter: activeTab === 8 ? '' : 'brightness(3.5)',
                                        backgroundColor: activeTab === 8 ? "#EDFF8B" : "transparent",
                                        cursor: "pointer"
                                    }}
                                    role="button"
                                    onClick={() => handleNavClick(8)}
                                >
                                    <CiUser style={{ color: activeTab === 8 ? '#3D3D3D' : '#fff', fontSize: '20px' }} />
                                </div>
                            )}

                        </div>
                    )}
                    <div className="flex-grow-1">
                        <div className="container-fluid">

                            {getTabComponent()}

                            {/* Dynamic step content */}

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
