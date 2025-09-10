import React, { useState,useRef,useEffect } from 'react';
import { motion } from "framer-motion";
import ImagePhysics from './gravity-area';



const TestimonialArea = () => {


    return (
        <>
        <section className="tp-testimonial-area p-relative pt-50 pb-20">
            <div className='container-fluid'>
                <div className='row mb-3'>
                    <div className='col-12'>
                        <motion.h1
                            initial={{ opacity: 0, y: -10 }} // Start faded out and slightly above
                            whileInView={{ opacity: 1 , y: 0,amount:1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }} // Customize timing
                            viewport={{ once: true }}
                        >
                            Where <span className='text_highlight'>Creativity</span><br/>
                            Meets Functionality
                            
                        </motion.h1>
                    </div>
                </div>
                <div className='row'>
                        <ImagePhysics/>
                </div>
            </div>
        </section>
        </>
    );
};

export default TestimonialArea;