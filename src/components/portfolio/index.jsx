import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import PortfolioArea from "./portfolio-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";
import HeroArea from "./cst-hero-area";
import Gravity from "../homes/home-2/testimonial-area";
import FAQS from "../homes/home-2/feature-area";
import QuoteForm from "../homes/home-2/brand-area";
import Feedback from "../../common/industry-area";

const Portfolio = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <HeroArea/>
        {/* <Breadcrumb top_title="Case Studies"  page_title="Case Studies" /> */}
        <PortfolioArea />
        <Gravity/>
        <Feedback/>
        <FAQS/>
        <QuoteForm/>
      </main>
      <FooterThree />
    </>
  );
};

export default Portfolio;

