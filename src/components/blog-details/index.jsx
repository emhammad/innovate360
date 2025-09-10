import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header-2";
import React from "react";
import BlogDetailsPostbox from "./blog-details-postbox";
import HeroArea from "./blog-detail-hero-area";
import FooterThree from "@/src/layout/footers/footer-3";

const BlogDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroArea/>
        <BlogDetailsPostbox />
      </main>
      <FooterThree />
    </>
  );
};

export default BlogDetails;
