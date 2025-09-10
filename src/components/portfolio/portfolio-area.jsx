import portfolio_data from '@/src/data/portfolio-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { motion } from "framer-motion";

import CaseStudy1 from "@assets/img/case_studies/cst1.png";
import CaseStudy2 from "@assets/img/case_studies/cst2.png";
import CaseStudy3 from "@assets/img/case_studies/cst3.png";
import CaseStudy4 from "@assets/img/case_studies/cst4.png";

const PortfolioArea = () => {
    return (
        <>
        <section className="tp-portfolio-area pt-60 pb-10">
            <div className="container-fluid">
                <div className="row">
                  <div className='col-12 mb-2'>
                     <motion.h1
                        initial={{ opacity: 0, y: -20 }} // Start faded out and slightly above
                        whileInView={{ opacity: 1 , y: 0,amount:1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }} // Customize timing
                        viewport={{ once: true }}
                     >
                        Selected <span className='text_hightlight'>Case Studies</span>
                     </motion.h1>
                  </div>
               </div>
               <div className='row my-3'>
                  <div className='col-12'>
                    <ul className='portfolio-services-list'>
                        <li>
                            <span className='active-menu'>All</span>
                        </li>
                        <li>
                            <span>UI UX Design</span>
                        </li>
                        <li>
                            <span>Web Design</span>
                        </li>
                        <li>
                            <span>Product Design</span>
                        </li>
                        <li>
                            <span>Saas Design</span>
                        </li>
                        <li>
                            <span>Branding</span>
                        </li>
                        <li>
                            <span>Development</span>
                        </li>
                    </ul>
                  </div>
               </div>
               <div className='row'>
                    <div className='my-3 col-lg-3 col-md-6 col-12'>
                        <div className='case_study_container'>
                            <div className='cst_img'>
                                <Image src={CaseStudy1} alt=''/>
                                <span className='cst_view_btn'>View Now</span>
                                <ul className='cst_tech_list'>
                                    <li>UI/UX Design</li>
                                    <li>Web Design</li>
                                    <li>Product Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='my-3 col-lg-3 col-md-6 col-12'>
                        <div className='case_study_container'>
                            <div className='cst_img'>
                                <Image src={CaseStudy2} alt=''/>
                                <span className='cst_view_btn'>View Now</span>
                                <ul className='cst_tech_list'>
                                    <li>UI/UX Design</li>
                                    <li>Web Design</li>
                                    <li>Product Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='my-3 col-lg-3 col-md-6 col-12'>
                        <div className='case_study_container'>
                            <div className='cst_img'>
                                <Image src={CaseStudy3} alt=''/>
                                <span className='cst_view_btn'>View Now</span>
                                <ul className='cst_tech_list'>
                                    <li>UI/UX Design</li>
                                    <li>Web Design</li>
                                    <li>Product Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='my-3 col-lg-3 col-md-6 col-12'>
                        <div className='case_study_container'>
                            <div className='cst_img'>
                                <Image src={CaseStudy4} alt=''/>
                                <span className='cst_view_btn'>View Now</span>
                                <ul className='cst_tech_list'>
                                    <li>UI/UX Design</li>
                                    <li>Web Design</li>
                                    <li>Product Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
        </>
    );
};

export default PortfolioArea;