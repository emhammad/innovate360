"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Topbar from "@/src/common/topbar";

// Active state icons
import DashboardIconActive from "@assets/img/icon/buildings.png";
import CardIconActive from "@assets/img/icon/card.png";
import AnalyticsIconActive from "@assets/img/icon/chart.png";
import ChatIconActive from "@assets/img/icon/message-notif.png";

// Inactive state icons
import DashboardIcon from "@assets/img/sideNav/dashboard.png";
import CardIcon from "@assets/img/sideNav/card.png";
import AnalyticsIcon from "@assets/img/sideNav/analytics.png";
import ChatIcon from "@assets/img/sideNav/chat.png";
// Import your step components
import Stepper from "./stepper";
import Transactions from "./Transaction";
import AnalyticDashboard from "../AnalyticDashboard";
import ChatBox from "./ChatBox";
// import MainDashboard from "../main-dashboard";
export default function CompanySetupPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setactiveTab] = useState(0);
  const [initialStep, setInitialStep] = useState(0);
  const [initialCompletedSteps, setInitialCompletedSteps] = useState([]);

  useEffect(() => {
    // Check authentication status on component mount
    const authStatus = localStorage.getItem('isAuthenticated');
    const user = localStorage.getItem('currentUser');

    if (authStatus === 'true' && user) {
      setIsAuthenticated(true);
      setCurrentUser(JSON.parse(user));
    }

    // Set initial tab from localStorage or default to 0
    const savedTab = localStorage.getItem('companyActiveTab');
    if (savedTab) {
      const tabIndex = parseInt(savedTab);
      if (tabIndex >= 0 && tabIndex <= 2) {
        setactiveTab(tabIndex);
      }
    } else {
      setactiveTab(0);
    }

    // Set initial step from localStorage or default based on authentication
    const savedStep = localStorage.getItem('companyActiveStep');
    const savedCompletedSteps = localStorage.getItem('companyCompletedSteps');

    if (savedStep) {
      const stepNumber = parseInt(savedStep);
      setInitialStep(stepNumber);

      if (savedCompletedSteps) {
        setInitialCompletedSteps(JSON.parse(savedCompletedSteps));
      } else {
        // Mark all previous steps as completed
        const completedStepsArray = [];
        for (let i = 0; i < stepNumber; i++) {
          completedStepsArray.push(i);
        }
        setInitialCompletedSteps(completedStepsArray);
      }
    } else if (isAuthenticated) {
      // If user is authenticated and no saved step, go to step 1
      setInitialStep(1);
      setInitialCompletedSteps([0]);
    }
  }, []);
  const handleNavClick = (index) => {
    // Allow all tabs: Stepper (0), Transactions (1), Analytics (2), Chat (3), Company Name (4)
    if (index >= 0 && index <= 4) {
      setactiveTab(index);
      // Save active tab to localStorage
      localStorage.setItem('companyActiveTab', index.toString());
    }

    if (index === 0) {
      // For stepper tab, check if user is authenticated
      const authStatus = localStorage.getItem('isAuthenticated');
      const user = localStorage.getItem('currentUser');
      const isAuthenticated = authStatus === 'true' && user;

      // Set step based on authentication status
      if (isAuthenticated) {
        setInitialStep(1);
        setInitialCompletedSteps([0]);
        localStorage.setItem('companyActiveStep', '1');
        localStorage.setItem('companyCompletedSteps', JSON.stringify([0]));
      } else {
        setInitialStep(0);
        setInitialCompletedSteps([]);
        localStorage.setItem('companyActiveStep', '0');
        localStorage.setItem('companyCompletedSteps', JSON.stringify([]));
      }
    }
  };

  const handleStepChange = (step, completedSteps) => {
    // Save step and completed steps to localStorage
    localStorage.setItem('companyActiveStep', step.toString());
    localStorage.setItem('companyCompletedSteps', JSON.stringify(completedSteps));
  };

  const getTabComponent = () => {
    switch (activeTab) {
      case 0:
        return <Stepper
          initialStep={initialStep}
          initialCompletedSteps={initialCompletedSteps}
          onStepChange={handleStepChange}
        />;
      case 2:
        return <AnalyticDashboard />;
      default:
        return <AnalyticDashboard />;
    }
  };
  return (
    <>
      <Head>
        <title>Company Setup - Innovate360</title>
      </Head>

      {/* Topbar - Show only when authenticated */}
      {isAuthenticated && <Topbar />}

      <div className="d-flex flex-column" style={{ minHeight: "90vh" }}>
        <div className="d-flex flex-grow-1">
          {/* Left icon sidebar - Show only when authenticated */}
          {isAuthenticated && (
            <div
              className="text-white d-flex flex-column align-items-center py-3"
              style={{ width: "5vw", background: "#007C36" }}
            >
              <div
                className="d-flex align-items-center justify-content-center mb-4"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "25px",
                  backgroundColor: activeTab === 0 ? "#EDFF8B" : "transparent",
                  cursor: "pointer"
                }}
                role="button"
                onClick={() => handleNavClick(0)}
              >
                <Image
                  src={activeTab === 0 ? DashboardIconActive : DashboardIcon}
                  alt="Dashboard"
                  width={activeTab ? '25px' : '35px'}
                  height={activeTab ? '25px' : '35px'}
                />
              </div>

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
                  width={activeTab ? '25px' : '35px'}
                  height={activeTab ? '25px' : '35px'}
                />
              </div>

            </div>
          )}
          <div className="flex-grow-1">
            <div className="container-fluid p-0">
              {/* Back to Main Dashboard Button - Only show when authenticated */}
              {isAuthenticated && (
                <div className="d-flex align-items-center mb-3" style={{ padding: '20px 0 0 20px' }}>
                  <button
                    onClick={() => window.location.href = '/main-dashboard'}
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
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
