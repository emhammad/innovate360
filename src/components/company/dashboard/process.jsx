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

    // Check URL parameters only once on component mount
    const urlParams = new URLSearchParams(window.location.search);
    const stepParam = urlParams.get('step');
    const tabParam = urlParams.get('tab');

    // Set initial tab based on URL parameters
    if (tabParam) {
      const tabIndex = parseInt(tabParam);
      if (tabIndex >= 0 && tabIndex <= 2) {
        setactiveTab(tabIndex);
      }
    } else if (stepParam) {
      // If there's a step parameter but no tab parameter, assume tab=0 (stepper)
      setactiveTab(0);
    } else {
      // If no parameters, set to stepper tab
      setactiveTab(0);
    }

    // Handle step parameter or set default based on authentication
    if (stepParam) {
      // Set the step from URL parameter
      const stepNumber = parseInt(stepParam);
      setInitialStep(stepNumber);

      // Mark all previous steps as completed
      const completedStepsArray = [];
      for (let i = 0; i < stepNumber; i++) {
        completedStepsArray.push(i);
      }
      setInitialCompletedSteps(completedStepsArray);
    } else if (isAuthenticated) {
      // If user is authenticated and no step parameter, go to step 1
      setInitialStep(1);
      setInitialCompletedSteps([0]);

      // Update URL to reflect this
      const url = new URL(window.location);
      url.searchParams.set('tab', '0');
      url.searchParams.set('step', '1');
      window.history.replaceState({}, '', url);
    }
  }, []);
  const handleNavClick = (index) => {
    // Allow all tabs: Stepper (0), Transactions (1), Analytics (2), Chat (3), Company Name (4)
    if (index >= 0 && index <= 4) {
      setactiveTab(index);
    }

    // Update URL parameters based on the selected tab
    const url = new URL(window.location);

    // Always set the tab parameter
    url.searchParams.set('tab', index.toString());

    if (index === 0) {
      // For stepper tab, check if user is authenticated
      const authStatus = localStorage.getItem('isAuthenticated');
      const user = localStorage.getItem('currentUser');
      const isAuthenticated = authStatus === 'true' && user;

      if (!url.searchParams.has('step')) {
        // If no step parameter, set based on authentication status
        if (isAuthenticated) {
          url.searchParams.set('step', '1');
          // Update initial state for authenticated users
          setInitialStep(1);
          setInitialCompletedSteps([0]);
        } else {
          url.searchParams.set('step', '0');
        }
      }
    } else {
      // For other tabs, remove step parameter
      url.searchParams.delete('step');
    }

    // Update the URL without causing a page reload
    window.history.pushState({}, '', url);
  };

  const handleStepChange = (step, completedSteps) => {
    // Update URL parameters when stepper step changes
    const url = new URL(window.location);
    url.searchParams.set('step', step.toString());
    url.searchParams.set('tab', '0'); // Ensure tab=0 is always present for stepper
    window.history.pushState({}, '', url);
  };

  const getTabComponent = () => {
    switch (activeTab) {
      case 0:
        return <Stepper
          initialStep={initialStep}
          initialCompletedSteps={initialCompletedSteps}
          shouldCheckUrlParams={activeTab === 0}
          onStepChange={handleStepChange}
          isAuthenticated={isAuthenticated}
          currentUser={currentUser}
        />;
      case 1:
        return <Transactions />;
      case 2:
        return <AnalyticDashboard />;
      case 3:
        return <ChatBox />;
      // case 4:
      //   return <MainDashboard />;
      default:
        return <div className="text-muted">Coming soon...</div>;
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
                  backgroundColor: activeTab === 1 ? "#EDFF8B" : "transparent",
                  cursor: "pointer"
                }}
                role="button"
                onClick={() => handleNavClick(1)}
              >
                <Image
                  src={activeTab === 1 ? CardIconActive : CardIcon}
                  alt="Card"
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
              <div
                className="d-flex align-items-center justify-content-center mb-4"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "25px",
                  backgroundColor: activeTab === 3 ? "#EDFF8B" : "transparent",
                  cursor: "pointer"
                }}
                role="button"
                onClick={() => handleNavClick(3)}
              >
                <Image
                  src={activeTab === 3 ? ChatIconActive : ChatIcon}
                  alt="Chat"
                  width={activeTab ? '25px' : '35px'}
                  height={activeTab ? '25px' : '35px'}
                />
              </div>
              <div
                className="d-flex align-items-center justify-content-center"
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
                  src={activeTab === 4 ? DashboardIconActive : DashboardIcon}
                  alt="Main Dashboard"
                  width={activeTab ? '25px' : '35px'}
                  height={activeTab ? '25px' : '35px'}
                />
              </div>
            </div>
          )}
          <div className="flex-grow-1">
            <div className="container-fluid p-0">
              {getTabComponent()}
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
