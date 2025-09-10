import Link from 'next/link'
import React,{Suspense,useState} from 'react'
import Image from 'next/image';

import logo_img from "@assets/img/logo/Logo.svg";

import StarAnimation from "@assets/img/animations/star_animation.gif";
import UIUXFirstState from "@assets/img/services/ui_ux_first_state.svg";
import UIUX2ndtate from "@assets/img/services/ui_ux_2nd_state.svg";
import SaasDesignFirstState from "@assets/img/services/saas_design_first_state.svg";
import SaasDesign2ndState from "@assets/img/services/saas_design_2nd_state.svg";

import Sidebar from '@/src/modals/sidebar';

const Spline = React.lazy(() => import('@splinetool/react-spline'));


const HeroArea = () => {

     const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
         <section className="services-detail-hero-area p-relative">
            <div className="tp-hero-2-wrapper p-relative">
               <div className="container-fluid">
                  <div className='row p-0 m-0'>
                     <div className='
                              fade-in-left mt-3 p-0 
                              col-xl-3 
                              col-lg-4
                              col-md-4
                              col-12'>
                        <div className='p-relative hero-section-header d-flex'>
                           <Link href="/" className='me-3'>
                              <Image src={logo_img} alt="Home" />
                           </Link>
                           <div className="text-right offcanvas-open-btn"  
                           
                              >
                              <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
                                 <span>
                                    <img src='/assets/img/icon/header-hamburger-shape.svg'/>
                                 </span>
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className='
                              fade-in-right mt-3 p-0 
                              col-xl-9 
                              col-lg-8 
                              col-md-8
                              col-12 p-relative'>
                        <Link className='text-right btn btn-primary' href="#">
                          <span className='me-2'>Lets Talk</span>
                          <i className='rotate-icon fa fa-arrow-right'></i>
                        </Link>
                     </div>
                  </div>
                  <div className="fade-in-left mt-20 row">
                    <div className='col-12 my-3  pt-50'>
                        <h1>
                            <span className='me-2'>Branding</span> 
                            <span className='services_page_icon'>
                                <Image className='first_state' src={SaasDesignFirstState} alt="UI/UX Design"/>
                                <Image className='hide_2nd_state' src={SaasDesign2ndState} alt="UI/UX Design"/>
                            </span>
                            UI UX Design
                        </h1>
                        <h1>
                            <span className='me-2'>Design</span> 
                            <span className='services_page_icon'>
                                <Image className='first_state' src={UIUXFirstState} alt="UI/UX Design"/>
                                <Image className='hide_2nd_state' src={UIUX2ndtate} alt="UI/UX Design"/>
                            </span>
                            to Scale Your Digital Experience
                        </h1>
                    </div>
                    <div className='col-12 my-2'>
                        <Link className='btn btn-primary' href="#">
                            <span className='me-2'>Talk To a Designer</span>
                            <i className='rotate-icon fa fa-arrow-right'></i>
                        </Link>
                    </div>
                  </div>
                  <div className='row mb-2'>
                    <div className='p-relative col-md-4 col-12 my-2'>
                        <p className='text_bottom'>
                            Dedicate Design & Strategy Support To
                            Empower Every Digital Product
                        </p>
                    </div>
                    <div className='col-md-4 col-12 my-2'>
                        <div className='gif_container'>
                            <Image src={StarAnimation} unoptimized alt='Star Animation'/>
                        </div>
                    </div>
                    <div className='p-relative col-md-4 col-12 my-2'>
                        <p className='text_bottom'>
                            We Specialize Exclusively In Creating Exceptional User Interface and Experience.
                            We Cover the full spectrum of UI/UX Design To Ensure Your Product Is Not Just Beautiful
                            , But also functional, accessible and drives result.
                        </p>
                    </div>
                  </div>
               </div>
            </div>
         </section>
         <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  )
}

export default HeroArea