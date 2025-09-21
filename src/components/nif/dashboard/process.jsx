"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import AnalyticsIcon from "@assets/img/sideNav/analytics.png";
import AnalyticsIconActive from "@assets/img/icon/chart.png";
import SideNavDashboardIcon from "@assets/img/icon/card.png";
import SideNavDashboardIconActive from "@assets/img/icon/card.png";
// Import your step components
import AnalyticDashboard from "../AnalyticDashboard"
// import VirtualOfficeMainDashboard from "../../virtual-office/main-dashboard"
// import MainDashboard from "../../../pages/nif-number/main-dashboard"

export default function CompanySetupPage() {
  const router = useRouter();
  const [activeTab, setactiveTab] = useState(1); // Set Analytics as default
  const [activeStep, setActiveStep] = useState(0); // Track the active step from AnalyticDashboard
  const [showPaymentFlow, setShowPaymentFlow] = useState(false); // Track payment flow state

  const handleNavClick = (index) => {

    setactiveTab(index);

  };

  const getTabComponent = () => {
    switch (activeTab) {
      case 1:
        return <AnalyticDashboard
          onStepChange={setActiveStep}
          onPaymentFlowChange={setShowPaymentFlow}
        />;
      default:
        return <AnalyticDashboard
          onStepChange={setActiveStep}
          onPaymentFlowChange={setShowPaymentFlow}
        />;
    }
  };
  return (
    <>
      <Head>
        <title>Company Setup - Innovate360</title>
      </Head>

      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>


        <div className="d-flex flex-grow-1">
          {/* Left icon sidebar - Only hide when in actual payment flow (step 1 + showPaymentFlow) */}
          {!(activeStep === 1 && showPaymentFlow) && (
            <div
              className="text-white d-flex flex-column align-items-center py-3"
              style={{ width: "5vw", background: "#007C36" }}
            >


              {/* Analytics Tab */}
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
                onClick={() => handleNavClick(2)}
              >
                <Image
                  src={activeTab === 1 ? AnalyticsIconActive : AnalyticsIcon}
                  alt="Analytics"
                  width={activeTab === 1 ? '25px' : '35px'}
                  height={activeTab === 1 ? '25px' : '35px'}
                />
              </div>
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
