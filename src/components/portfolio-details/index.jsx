import HeaderOne from "@/src/layout/headers/header-2";
import React from "react";
import PortfolioDetailsArea from "./portfolio-details-area";
import HeroArea from "./cst-detail-hero";
import FooterThree from "@/src/layout/footers/footer-3";

const PortfolioDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroArea/>
        <PortfolioDetailsArea />
      </main>
      <FooterThree />
    </>
  );
};

export default PortfolioDetails;
