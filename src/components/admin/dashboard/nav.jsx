"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import AnalyticsIcon from "@assets/img/sideNav/analytics.png";
import CardIcon from "@assets/img/sideNav/card.png";
import ChatIcon from "@assets/img/sideNav/chat.png";
import AnalyticsIconActive from "@assets/img/icon/chart.png";
import CardIconActive from "@assets/img/icon/card.png";
import ChatIconActive from "@assets/img/icon/message-notif.png";
import { LuUserRound } from "react-icons/lu";
// Import your step components

import AnalyticDashboard from "./dashboard";
import Transaction from "./Transaction";
import ChatBox from "./ChatBox";
import AllLawyers from "./AllLawyers";
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
        return <Transaction />;
      case 2:
        return <ChatBox />;
      case 3:
        return <AllLawyers />;
      default:
        return <div className="text-muted">Coming soon...</div>;
    }
  };
  return (
    <>
      <Head>
        <title>Admin - Innovate360</title>
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
                backgroundColor: activeTab === 0 ? "#EDFF8B" : "transparent",
                cursor: "pointer"
              }}
              role="button"
              onClick={() => handleNavClick(0)}
            >
              <Image
                src={activeTab === 0 ? AnalyticsIconActive : AnalyticsIcon}
                alt="Analytics"
                width={activeTab === 0 ? '25px' : '35px'}
                height={activeTab === 0 ? '25px' : '35px'}
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
                alt="Transactions"
                width={activeTab === 1 ? '25px' : '35px'}
                height={activeTab === 1 ? '25px' : '35px'}
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
                src={activeTab === 2 ? ChatIconActive : ChatIcon}
                alt="Chat"
                width={activeTab === 2 ? '25px' : '35px'}
                height={activeTab === 2 ? '25px' : '35px'}
              />
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "25px",
                backgroundColor: activeTab === 3 ? "#EDFF8B" : "transparent",
                cursor: "pointer",
                border: '1px solid #a5d0b8'
              }}
              role="button"
              onClick={() => handleNavClick(3)}
            >
              <LuUserRound
                size={activeTab === 3 ? 20 : 25}
                color={activeTab === 3 ? "#007C36" : "#a5d0b8"}
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
