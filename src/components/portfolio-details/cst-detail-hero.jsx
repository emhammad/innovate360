import Link from 'next/link'
import React,{Suspense,useState} from 'react'
import Image from 'next/image';

import logo_img from "@assets/img/logo/Logo.svg";

import H1Arrow from "@assets/img/icon/H1_Arrow.svg";

import CaseStudy3 from "@assets/img/case_studies/cst3.png";


import Sidebar from '@/src/modals/sidebar';

const Spline = React.lazy(() => import('@splinetool/react-spline'));


const HeroArea = () => {

     const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
         <section className="cst-detail-hero-area p-relative">
            <div className="tp-hero-2-wrapper p-relative">
               <div className="container-fluid">
                  <div className='row p-0 m-0'>
                     <div className='
                              fade-in-left mt-3 p-0 
                              col-xl-3 col-xl-offset-3 
                              col-lg-4 col-lg-offset-5 
                              col-md-4 col-md-offset-5
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
                     <div className='col-xl-3 col-md-3 col-12'>

                     </div>
                  </div>
                  <div className="mt-20 row">
                    <div className='p-relative col-lg-6 col-12 my-3  pt-50'>
                        <h1>UI UX Design</h1>
                        <h1><Image className='me-3' src={H1Arrow} alt="H1 Arrow"/>REDPANDA AGENCY</h1>
                        <p className='pt-30'>
                            we specialize exclusively in creating exceptional user interfaces and experiences. We cover the full spectrum of UI/UX design to ensure your product is not just beautiful, but also functional, accessible, and drives results.
                        </p>
                        <div className='project_info_container'>
                            <ul className='project_info_list'>
                                <li>
                                    <div className='client_name'>
                                        <h5>Client</h5>
                                        <span>Uzair Niazi</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='industry'>
                                        <h5>Industry</h5>
                                        <span>Sports</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='timeline'>
                                        <h5>TimeLine</h5>
                                        <span>May, 2025</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 my-3'>
                        <div className='cst-hero-img'>
                            <Image src={CaseStudy3} alt='First Case Study'/>
                        </div>
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