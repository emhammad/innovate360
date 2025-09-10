import React, { useState,useRef,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import star from "@assets/img/testimonial/star.svg";
import GoogleIcon from "@assets/img/testimonial/google_icon.svg";

import { motion } from "framer-motion";



const IndustryArea = ({service}) => {

function CustomCursor(SelectedClass) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      className={SelectedClass}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}



      //change tracker cursor code

    const containerRef = useRef(null);
    const [scrollDir, setScrollDir] = useState(null); // "left" or "right"
    const lastScrollLeft = useRef(0);

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
        const currentScrollLeft = container.scrollLeft;
        
        console.log(currentScrollLeft);

        if (currentScrollLeft > lastScrollLeft.current) {
            setScrollDir('right');
        } else if (currentScrollLeft < lastScrollLeft.current) {
            setScrollDir('left');
        }

        lastScrollLeft.current = currentScrollLeft;
        };
        
        console.log(scrollDir);

        container.addEventListener('scroll', handleScroll);

        return () => {
        container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <> 
            <section className={`tp-industry-area p-relative pt-100 pb-90`}>
                    
                    <div className="container-fluid testimonial">
                        <div className="row">
                            <div className='col-12'>
                                <motion.h1
                                
                                initial={{ opacity: 0, y: -10 }} // Start faded out and slightly above
                                whileInView={{ opacity: 1 , y: 0,amount:1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }} // Customize timing
                                viewport={{ once: true }}
                                >
                                    What Our <br/> 
                                    <span className='text_highlight'>Client Say About Us</span>
                                </motion.h1>
                            </div>
                        </div>
                        <div className='testimonial_section row'>
                            <motion.div
                               
                                initial={{ opacity: 0, x: -20 }} // Start faded out and slightly above
                                whileInView={{ opacity: 1 , x: 0,amount:1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }} // Customize timing
                                viewport={{ once: true }} 
                               className='col-lg-3 col-lg-offset-1 col-md-5 col-12'
                            >
                                <h2 className='rating'>4.9</h2>
                                <div className='rating_stars'>
                                    <Image src={star} alt='star'/>
                                    <Image src={star} alt='star'/>
                                    <Image src={star} alt='star'/>
                                    <Image src={star} alt='star'/>
                                    <Image src={star} alt='star'/>
                                </div>
                                <div className='rating_info'>
                                    <div className='overall_rating_text'>
                                        <h3>Overall Rating</h3>
                                    </div>
                                    <div className='refference'>
                                        <span>Many Ceo's Reffer Red Panda Network</span>
                                    </div>
                                    <div className='google_icon'>
                                        <div className='icon_container'>
                                            <div className='icon_inner'>
                                                <Image src={GoogleIcon} alt='Google'/>
                                            </div>
                                            <div className='icon_text'>
                                                <h6>Google Rating</h6>
                                                <p>See all our reviews</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </motion.div>
                            <div className='col-lg-9 col-md-7 col-12'>
                                
                                <motion.div
                                    ref={containerRef}
                                    initial={{ opacity: 0, x: 30 }} // Start faded out and slightly above
                                    whileInView={{ opacity: 1 , x: 0,amount:1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }} // Customize timing
                                    viewport={{ once: true }} 
                                   className={`row testimonial_row`}
                                   
                                 >
                                    <div
                                    
                                    style={{position:"absolute"}}
                                    // className={`${scrollDir === 'right' ? 'cursor-right' : scrollDir === 'left' ? 'cursor-left' : ''}`}
                                    >
                                    {
                                        
                                    CustomCursor((scrollDir=='right')?'tp-industry-cursor-right':'tp-industry-cursor-left')
                                    }   
                                    </div>
                                    <div className='col-lg-3 col-md-4 col-auto testimonial_card'>
                                        <h6>Highly Recommended</h6>
                                        <div className='testimonial_card_body'>
                                            <p>
                                                Great professionals with awesome value and response time. They are great at communicating and carry out the brief. I love working with them long term.​
                                            </p>
                                        </div>
                                        <div className='testimonial_card_footer'>
                                            <h6>Amir</h6>
                                            <span>Ceo</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-4 col-auto testimonial_card'>
                                        <h6>Highly Recommended</h6>
                                        <div className='testimonial_card_body'>
                                            <p>
                                                Great professionals with awesome value and response time. They are great at communicating and carry out the brief. I love working with them long term.​
                                            </p>
                                        </div>
                                        <div className='testimonial_card_footer'>
                                            <h6>Amir</h6>
                                            <span>Ceo</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-4 col-auto testimonial_card'>
                                        <h6>Highly Recommended</h6>
                                        <div className='testimonial_card_body'>
                                            <p>
                                                Great professionals with awesome value and response time. They are great at communicating and carry out the brief. I love working with them long term.​
                                            </p>
                                        </div>
                                        <div className='testimonial_card_footer'>
                                            <h6>Amir</h6>
                                            <span>Ceo</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-4 col-auto testimonial_card'>
                                        <h6>Highly Recommended</h6>
                                        <div className='testimonial_card_body'>
                                            <p>
                                                Great professionals with awesome value and response time. They are great at communicating and carry out the brief. I love working with them long term.​
                                            </p>
                                        </div>
                                        <div className='testimonial_card_footer'>
                                            <h6>Amir</h6>
                                            <span>Ceo</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-4 col-auto testimonial_card'>
                                        <h6>Highly Recommended</h6>
                                        <div className='testimonial_card_body'>
                                            <p>
                                                Great professionals with awesome value and response time. They are great at communicating and carry out the brief. I love working with them long term.​
                                            </p>
                                        </div>
                                        <div className='testimonial_card_footer'>
                                            <h6>Amir</h6>
                                            <span>Ceo</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-4 col-auto testimonial_card'>
                                        <h6>Highly Recommended</h6>
                                        <div className='testimonial_card_body'>
                                            <p>
                                                Great professionals with awesome value and response time. They are great at communicating and carry out the brief. I love working with them long term.​
                                            </p>
                                        </div>
                                        <div className='testimonial_card_footer'>
                                            <h6>Amir</h6>
                                            <span>Ceo</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-4 col-auto testimonial_card'>
                                        <h6>Highly Recommended</h6>
                                        <div className='testimonial_card_body'>
                                            <p>
                                                Great professionals with awesome value and response time. They are great at communicating and carry out the brief. I love working with them long term.​
                                            </p>
                                        </div>
                                        <div className='testimonial_card_footer'>
                                            <h6>Amir</h6>
                                            <span>Ceo</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-4 col-auto testimonial_card'>
                                        <h6>Highly Recommended</h6>
                                        <div className='testimonial_card_body'>
                                            <p>
                                                Great professionals with awesome value and response time. They are great at communicating and carry out the brief. I love working with them long term.​
                                            </p>
                                        </div>
                                        <div className='testimonial_card_footer'>
                                            <h6>Amir</h6>
                                            <span>Ceo</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            
                        </div>
                    </div>
            </section>
        </>
    );
};

export default IndustryArea;