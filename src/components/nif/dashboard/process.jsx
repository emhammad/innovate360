"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import DashboardIcon from "@assets/img/sideNav/dashboard.png";
import CardIcon from "@assets/img/sideNav/card.png";
import AnalyticsIcon from "@assets/img/sideNav/analytics.png";
import ChatIcon from "@assets/img/sideNav/chat.png";
// Import your step components
import AnalyticDashboard from "../AnalyticDashboard"

export default function CompanySetupPage() {

    const [activeTab, setactiveTab] = useState(0);
    const handleNavClick = (index) => {
        // if (index !== activeTab) {
        // setCompletedSteps((prev) =>
        //     index > activeTab
        //     ? [...new Set([...prev, activeTab])]
        //     : prev.filter((step) => step !== activeTab)
        // );
        // }
        setactiveTab(index);
    };

    const getTabComponent = () => {
        switch (activeTab) {
        case 0:
            return <AnalyticDashboard />;
        case 1:
            return <Transactions />;
        case 2:
            return <AnalyticDashboard/>    
        default:
            return <div className="text-muted">Coming soon...</div>;
        }
    };
  return (
    <>
      <Head>
        <title>Company Setup - Innovate360</title>
      </Head>

      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        

        <div className="d-flex flex-grow-1">
          {/* Left icon sidebar */}
          <div
            className="text-white d-flex flex-column align-items-center py-3"
            style={{ width: "4vw",background:"#007C36" }}
          >
            <i className="bi bi-house-door-fill fs-4 mb-4" role="button" onClick={() => handleNavClick(0)}>
                <Image src={DashboardIcon} alt="Dashboard"/>
            </i>
            <i className="bi bi-briefcase-fill fs-4 mb-4" role="button" onClick={() => handleNavClick(1)}>
                <Image src={CardIcon} alt="Dashboard"/>
            </i>
            <i className="bi bi-people-fill fs-4 mb-4" role="button" onClick={() => handleNavClick(2)}>
                <Image src={AnalyticsIcon} alt="Dashboard"/>
            </i>
            <i className="bi bi-gear-fill fs-4" role="button" onClick={() => handleNavClick(3)}>
                <Image src={ChatIcon} alt="Dashboard"/>
            </i>
          </div>
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
