import React,{ Suspense,useEffect, useState, useRef }  from "react";
import Image from 'next/image';
import Cursor from "@assets/img/design_flow/basil_cursor-solid.png";
import TopConnector from "@assets/img/design_flow/top_line.svg";
import MiddleConnector from "@assets/img/design_flow/middle_line.svg";
import BottomConnector from "@assets/img/design_flow/bottom_line.svg";
import { motion } from "framer-motion";

import CircleAnimation from "@assets/img/animations/design_flow.gif";

const CounterArea = ({about}) => {
  
      

  return (
    <> 
      <section className={`tp-counter-area pt-10 pb-10`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 my-3">
              <div className="text-center design_flow">

                <div className="p-relative">
                    <motion.h1
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    >
                      DESIGN FLOW

                    </motion.h1>
                    <motion.div 
                      className="design_and_idea"
                      initial={{opacity:0, x:-50}}
                      whileInView={{ opacity: 1, x: 0,amount:1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    >
                      <span>Design & Idea</span>
                    </motion.div>
                    <motion.div 
                      className="design_and_dev"
                      initial={{opacity:0, x:50}}
                      whileInView={{ opacity: 1, x: 0,amount:1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    >
                      <span>Design & Dev</span>
                    </motion.div>
                </div>
                <div className="p-relative">
                    <motion.h1

                    initial={{ opacity: 0, y: -120 }} // Start faded out and slightly above
                    whileInView={{ opacity: 1, y: 0,amount:1 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    >
                      DESIGN FLOW
                    </motion.h1>
                    <motion.div 
                      className="arrow_icon"
                      initial={{opacity:0, x:50}}
                      whileInView={{ opacity: 1, x: 0,amount:1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    >
                      <Image src={Cursor} alt="Cursor"/>
                    </motion.div>
                </div>
                <div className="p-relative">
                    <motion.h1
                    initial={{ opacity: 0, y: -241 }} // Start faded out and slightly above
                    whileInView={{ opacity: 1, y: 0,amount:1 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    >
                    DESIGN FLOW
                    </motion.h1>
                    <motion.div 
                      className="planning-fade-in-left planning"
                      initial={{opacity:0, x:-50}}
                      whileInView={{ opacity: 1, x: 0,amount:1,rotate:45 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    >
                      
                    </motion.div>
                    <span className="text-center planning_text">Planning <br/>&<br/> Ideation</span>
                </div>
                
                <motion.h1
                 initial={{ opacity: 0, y: -360 }} // Start faded out and slightly above
                 whileInView={{ opacity: 1, y: 0,amount:1 }}
                 transition={{ duration: 1.2, ease: "easeInOut" }}
                 viewport={{ once: true }}
                >
                  DESIGN FLOW
                </motion.h1>
              </div>
            </div>
          </div>
          <div className="row design_steps">
              <div className="col-12 text-center p-relative">
                 <div className="blur-section position-absolute w-100 h-100" style={{ zIndex: 0, top: 0, left: 0 }}>
                    <Image src={CircleAnimation} unoptimized />
                  </div>
                 <div className="step row" style={{ zIndex: 1 }}>
                   <div className="col-md-6 col-12">
                      <div className="mb-arrow research_and_planning">
                        <span>Research & Planning</span>
                      </div>
                   </div>
                   <div className="col-md-6 col-12 p-relative">
                       <div className="top_connector">
                          <Image src={TopConnector} alt="Top Connector"/>
                       </div>
                   </div>
                 </div>
                 <div className="step row" style={{ zIndex: 1 }}>
                    <div className="col-md-6 col-12 p-relative">
                       
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="mb-arrow concept_and_design">
                        <span>Conceptualization & Intial Design</span>
                      </div>
                    </div>
                 </div>
                 <div className="middle-step row">
                    <div className="col-12 text-center">
                      <div className="middle_connector">
                            <Image src={MiddleConnector} alt="Middle Connector"/>
                        </div>
                    </div>
                 </div>
                 <div className="step row" style={{ zIndex: 1 }}>
                    <div className="col-md-6 col-12">
                        <div className="mb-arrow development_and_refinment">
                          <span>Development & Refinment</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 p-relative">
                       
                    </div> 
                 </div>
                 <div className="step row" style={{ zIndex: 1 }}>
                  <div className="text-center col-md-6 col-12 p-relative">
                      <div className="bottom_connector">
                        <Image src={BottomConnector} alt="Top Connector"/>
                      </div>
                  </div>
                    <div className="col-md-6 col-12">
                      <div className="preparation">
                        <span>Preparation & Handoff</span>
                      </div>
                    </div>
                 </div>
                 
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CounterArea;
 