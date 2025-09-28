"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import DashboardIcon from "@assets/img/sideNav/dashboard.png";
import DashboardIconActive from "@assets/img/sideNav/dashboard-active.png";
import ChatIcon from "@assets/img/sideNav/chat.png";
import ChatIconActive from "@assets/img/sideNav/chat-active.png";

import AnalyticDashboard from "./dashboard";
import ChatBox from "./ChatBox";

import CustomerSupport from "./CustomerSupport";
import Profile from "./Profile";

import { CiUser } from "react-icons/ci";
import { SlEarphonesAlt } from "react-icons/sl";

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
        return <ChatBox />;
      case 2:
        return <CustomerSupport />;
      case 3:
        return <Profile />;
      default:
        return <div className="text-muted">Coming soon...</div>;
    }
  };
  return (
    <>
      <Head>
        <title>Lawyer - Innovate360</title>
      </Head>

      <div className="d-flex flex-column" style={{ minHeight: "95vh" }}>


        <div className="d-flex flex-grow-1">
          {/* Left icon sidebar */}
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
                cursor: "pointer"
              }}
              role="button"
              onClick={() => handleNavClick(0)}
            >
              <Image
                src={activeTab === 0 ? DashboardIconActive : DashboardIcon}
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
                cursor: "pointer"
              }}
              role="button"
              onClick={() => handleNavClick(1)}
            >
              <Image
                src={activeTab === 1 ? ChatIconActive : ChatIcon}
                alt="Chat"
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
                border: '1px solid rgb(176, 213, 192)',
                backgroundColor: activeTab === 2 ? "#EDFF8B" : "transparent",
                cursor: "pointer"
              }}
              role="button"
              onClick={() => handleNavClick(2)}
            >
              <SlEarphonesAlt style={{ color: activeTab === 2 ? '#3D3D3D' : 'rgb(176, 213, 192)', fontWeight: '800' }} />
            </div>
            <div
              className="d-flex align-items-center justify-content-center mb-4"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "25px",
                border: '1px solid rgb(176, 213, 192)',
                backgroundColor: activeTab === 3 ? "#EDFF8B" : "transparent",
                cursor: "pointer"
              }}
              role="button"
              onClick={() => handleNavClick(3)}
            >
              <CiUser style={{ color: activeTab === 3 ? '#3D3D3D' : 'rgb(176, 213, 192)', fontSize: '20px', fontWeight: '800' }} />
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
