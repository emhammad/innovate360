"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import AnalyticsIcon from "@assets/img/sideNav/analytics.png";
import AnalyticsIconActive from "@assets/img/icon/chart.png";
// Import your step components
import AnalyticDashboard from "../AnalyticDashboard"

export default function CompanySetupPage() {

    const [activeTab, setactiveTab] = useState(2); // Set Analytics as default
    const handleNavClick = (index) => {
        // Only allow Analytics tab (index 2)
        if (index === 2) {
            setactiveTab(index);
        }
    };

    const getTabComponent = () => {
        // Only return Analytics component
        return <AnalyticDashboard />;
    };
  return (
    <>
      <Head>
        <title>Company Setup - Innovate360</title>
      </Head>

      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        

        <div className="d-flex flex-grow-1">
          {/* Left icon sidebar - Only Analytics tab */}
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
