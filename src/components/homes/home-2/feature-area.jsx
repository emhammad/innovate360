import React,{ Suspense,useEffect, useState, useRef }  from "react";
import { motion } from "framer-motion";

import Image from 'next/image';
import ArrowDown from "@assets/img/icon/arrow-down-solid.svg";

const FeatureArea = () => {


    return (
        <>
            <section className="tp-feature-area pt-20">
                <div className="container-fluid">
                    <div className="row">
                        <div className='col-12'>
                            <motion.h1
                                
                                initial={{ opacity: 0, y: -10 }} // Start faded out and slightly above
                                whileInView={{ opacity: 1 , y: 0,amount:1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }} // Customize timing
                                viewport={{ once: true }}
                            >
                                Frequently Asked <br/>
                                <span className='text_highlight'>Questions</span>
                            </motion.h1>
                        </div>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }} // Start faded out and slightly above
                        whileInView={{ opacity: 1 , x: 0,amount:1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }} // Customize timing
                        viewport={{ once: true }}
                        className='row mt-3'
                    >
                        <div className=' col-12 text-center faq-container'>
                            <div className='mb-2 faq'>
                                <span className='faq-text'>
                                    How much will it cost?
                                </span>
                                <span className='faq-arrow'>
                                    <Image src={ArrowDown} alt='Arrow Down'/>
                                </span>
                            </div>
                            <div className='mb-2 faq'>
                                <span className='faq-text'>
                                    How much will it cost?
                                </span>
                                <span className='faq-arrow'>
                                    <Image src={ArrowDown} alt='Arrow Down'/>
                                </span>
                            </div>
                            <div className='mb-2 faq'>
                                <span className='faq-text'>
                                    How much will it cost?
                                </span>
                                <span className='faq-arrow'>
                                    <Image src={ArrowDown} alt='Arrow Down'/>
                                </span>
                            </div>
                            
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default FeatureArea;