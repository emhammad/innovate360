import Link from 'next/link';
import React, { useRef } from 'react';
import Image from 'next/image';

import StarAnimation from "@assets/img/animations/star_animation.gif";
import ballAnimation from "@assets/img/animations/ball.gif";
import LeftScrollAnimation from "@assets/img/animations/Left-Scroll-Animation@2x.png";
import RightScrollAnimation from "@assets/img/animations/Right-Scroll-Animation@2x.png";
import Leftframe from "@assets/img/animations/Wirefram-left-Scroll-Animation.png";
import Rightframe from "@assets/img/animations/Wirefram-right-Scroll-Animation.png";



const ServiceArea = () => {
  

    return (
        <>
           <section style={{position:"relative",top:"-10px"}}>
              <div className='container-fluid p-0'>
                    <div className='row m-0 p-0  bg-black'>
                        <div className='col-md-3'>
                            <div className='sp-img-container py-3'>
                                <Image src={LeftScrollAnimation} alt='Animation'/>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 d-flex justify-content-center align-items-center text-center'>
                            <h1 style={{fontSize:"79px"}}>
                                <span className='text-white me-2'>
                                From Concept To Actual
                                </span> 
                                <span className='text_highlight'>Design</span>
                            </h1>
                        </div>
                        <div className='col-md-3'>
                            <div className='sp-img-container py-3'>
                                <Image src={RightScrollAnimation} alt='Animation'/>
                            </div>
                        </div>
                    </div>
              </div>
              
           </section>
           <section className="tp-service-area pt-20">
                <div className="container-fluid px-3">
                    <div className='row my-3 p-relative' >
                        <div className='col-md-6 col-12 my-3'>
                            <div className='heading'>
                                <h6>
                                    <span className='circle-text me-1'>Red</span>
                                    Panda
                                </h6>
                                <h1>
                                    <span className='me-2'>UI UX</span>
                                    <span className='text_highlight'>Design</span>
                                </h1>
                            </div>
                            <p className='service-pg-text'>
                                Bulding user interface and user Experience that work seamlessly.
                                We research,stratgize and design to create clear navigation, engaging interactions and
                                a postive Experience.
                            </p>
                            <Link className='mt-3 btn btn-primary' href="#">
                             <span className='me-2'>Get a Quote</span>
                             <i className='rotate-icon fa fa-arrow-right'></i>
                            </Link>
                        </div>
                        <div className='col-md-6 col-12 my-3'>
                            <div className='services-page-list px-2'>
                                <ul>
                                    <li className='p-relative'>
                                        <span className=''>User Research & Stratgey</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Information Architecture</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Wireframing & Prototyping</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Visual Design</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Usability Testing</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Developer Collaboration</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-12 overlay-bg text-center'>
                            <Image src={ballAnimation} unoptimized alt='animation'/>
                        </div>
                    </div>
                    <div className='row mt-90'>
                        <div className='col-md-6 col-12 my-3'>
                            <div className='services-page-list px-2'>
                                <ul>
                                    <li className='p-relative'>
                                        <span className=''>Responsive Web Design</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Landing Page Design</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>E-commerce Website Design</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Website Redesign</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Usability Testing</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 my-3'>
                            <div className='heading'>
                                <h6>
                                    <span className='circle-text me-1'>Red</span>
                                    Panda
                                </h6>
                                <h1>
                                    <span className='me-2'>Web</span>
                                    <span className='text_highlight'>Design</span>
                                </h1>
                            </div>
                            <p className='service-pg-text'>
                                Bulding user interface and user Experience that work seamlessly.
                                We research,stratgize and design to create clear navigation, engaging interactions and
                                a postive Experience.
                            </p>
                            <Link className='mt-3 btn btn-primary' href="#">
                             <span className='me-2'>Get a Quote</span>
                             <i className='rotate-icon fa fa-arrow-right'></i>
                            </Link>
                        </div>
                    </div>
                    <div className='row mt-90 p-relative'>
                        <div className='col-md-6 col-12 my-3'>
                            <div className='heading'>
                                <h6>
                                    <span className='circle-text me-1'>Red</span>
                                    Panda
                                </h6>
                                <h1>
                                    <span className='me-2'>Product</span>
                                    <span className='text_highlight'>Design</span>
                                </h1>
                            </div>
                            <p className='service-pg-text'>
                                Bulding user interface and user Experience that work seamlessly.
                                We research,stratgize and design to create clear navigation, engaging interactions and
                                a postive Experience.
                            </p>
                            <Link className='mt-3 btn btn-primary' href="#">
                             <span className='me-2'>Get a Quote</span>
                             <i className='rotate-icon fa fa-arrow-right'></i>
                            </Link>
                        </div>
                        <div className='col-md-6 col-12 my-3'>
                            <div className='services-page-list px-2'>
                                <ul>
                                    <li className='p-relative'>
                                        <span className=''>Product Stratgey & Defination</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Feature Planning & Proritization</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>End-to-End UI/UX Design</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Prototyping & Testing</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Minimum Viable Product (MVP) Design</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Design for scalability & Developent</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-12 overlay-bg text-center'>
                            <Image src={ballAnimation} unoptimized alt='animation'/>
                        </div>
                    </div>
                    <div className='row mt-90'>
                        <div className='col-md-6 col-12 my-3'>
                            <div className='services-page-list px-2'>
                                <ul>
                                    <li className='p-relative'>
                                        <span className=''>Saas UI/UX Design</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Dashboard & Analytics Design</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Integration Point Design</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Scalable UI Component Design for Development</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>User Onboarding Design</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 my-3'>
                            <div className='heading'>
                                <h6>
                                    <span className='circle-text me-1'>Red</span>
                                    Panda
                                </h6>
                                <h1>
                                    <span className='me-2'>Saas</span>
                                    <span className='text_highlight'>Design</span>
                                </h1>
                            </div>
                            <p className='service-pg-text'>
                                Bulding user interface and user Experience that work seamlessly.
                                We research,stratgize and design to create clear navigation, engaging interactions and
                                a postive Experience.
                            </p>
                            <Link className='mt-3 btn btn-primary' href="#">
                             <span className='me-2'>Get a Quote</span>
                             <i className='rotate-icon fa fa-arrow-right'></i>
                            </Link>
                        </div>
                    </div>
                    <div className='row mt-3 p-relative'>
                        <div className='col-md-6 col-12 my-3'>
                            <div className='heading'>
                                <h6>
                                    <span className='circle-text me-1'>Red</span>
                                    Panda
                                </h6>
                                <h1>
                                    <span className='me-2'>Branding</span>
                                    <span className='text_highlight'>Design</span>
                                </h1>
                            </div>
                            <p className='service-pg-text'>
                                Bulding user interface and user Experience that work seamlessly.
                                We research,stratgize and design to create clear navigation, engaging interactions and
                                a postive Experience.
                            </p>
                            <Link className='mt-3 btn btn-primary' href="#">
                             <span className='me-2'>Get a Quote</span>
                             <i className='rotate-icon fa fa-arrow-right'></i>
                            </Link>
                        </div>
                        <div className='col-md-6 col-12 my-3'>
                            <div className='services-page-list px-2'>
                                <ul>
                                    <li className='p-relative'>
                                        <span className=''>Product Stratgey & Defination</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Feature Planning & Proritization</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>End-to-End UI/UX Design</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Prototyping & Testing</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Minimum Viable Product (MVP) Design</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Design for scalability & Developent</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-12 overlay-bg text-center'>
                            <Image src={StarAnimation} unoptimized alt='animation'/>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-md-6 col-12 my-3'>
                            <div className='services-page-list px-2'>
                                <ul>
                                    <li className='p-relative'>
                                        <span className=''>Saas UI/UX Design</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Dashboard & Analytics Design</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Integration Point Design</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>Scalable UI Component Design for Development</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    <li className='p-relative'>
                                        <span className=''>User Onboarding Design</span>
                                        <i className='text-right fa fa-arrow-down'></i>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 my-3'>
                            <div className='heading'>
                                <h6>
                                    <span className='circle-text me-1'>Red</span>
                                    Panda
                                </h6>
                                <h1>
                                    <span className='me-2'>Development</span>
                                </h1>
                            </div>
                            <p className='service-pg-text'>
                                Bulding user interface and user Experience that work seamlessly.
                                We research,stratgize and design to create clear navigation, engaging interactions and
                                a postive Experience.
                            </p>
                            <Link className='mt-3 btn btn-primary' href="#">
                             <span className='me-2'>Get a Quote</span>
                             <i className='rotate-icon fa fa-arrow-right'></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default ServiceArea;