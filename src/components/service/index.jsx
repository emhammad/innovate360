import React from "react"; 
import HeaderOne from "@/src/layout/headers/header-2";
import ServiceArea from "./service-area";
import IndustryArea from "@/src/common/industry-area";
import FooterThree from "@/src/layout/footers/footer-3";
import HeroArea from "./services-hero";
import FAQS from "../homes/home-2/feature-area";
import QuoteForm from "../homes/home-2/brand-area";

const Sevice = () => {
  return (
    <>
      <HeaderOne />
      <main>
            <HeroArea/>
            <ServiceArea />
            <IndustryArea />
            <FAQS/>
            <QuoteForm/>
      </main>
      <FooterThree />
    </>
  );
};

export default Sevice;
