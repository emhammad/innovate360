import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header-2";
import React from "react";
import PostboxArea from "./postbox-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";
import HeroArea from "./blog-hero-area";
import Quoteform from "../homes/home-2/brand-area";

const Blog = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroArea/>
        <PostboxArea />
        <Quoteform/>
      </main>
      <FooterThree />
    </>
  );
};

export default Blog;
