import Link from 'next/link'
import React,{Suspense,useState} from 'react'
import Image from 'next/image';

import logo_img from "@assets/img/logo/Logo.svg";
import Asterik from "@assets/img/footer/Aesterisk.svg";
import H1Arrow from "@assets/img/icon/H1_Arrow.svg";
import PercentArrow from "@assets/img/icon/100_percent_Arrow.svg";

import CaseStudy1 from "@assets/img/case_studies/cst1.png";
import CaseStudy2 from "@assets/img/case_studies/cst2.png";
import CaseStudy3 from "@assets/img/case_studies/cst3.png";
import CaseStudy4 from "@assets/img/case_studies/cst4.png";

import Sidebar from '@/src/modals/sidebar';

const Spline = React.lazy(() => import('@splinetool/react-spline'));


const HeroArea = () => {

     const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
         <section className="tp-hero-area p-relative">
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
                  <div className="row case-studies-hero-section">
                     <div className='col-12 text-center'>
                        <h1>Case Studies</h1>
                     </div>
                  </div>
                  <div className='row my-2'>
                    <div className='col-md-4 col-12 my-3'>
                        <div className='portfolio_case_study_container'>
                            <div className='portfolio_cst_img'>
                              <Link href="/case-study-details">
                                 <Image src={CaseStudy1} alt=''/>
                                 <span className='cst_asterik'>
                                       <Image src={Asterik} alt='Asterik'/>
                                 </span>
                              </Link>
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-12 my-3'>
                        <div className='case_study_container'>
                            <div className='portfolio_cst_img'>
                                <Link href="/case-study-details">
                                    <Image src={CaseStudy2} alt=''/>
                                    <span className='cst_asterik'>
                                          <Image src={Asterik} alt='Asterik'/>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-12 my-3'>
                        <div className='case_study_container'>
                            <div className='portfolio_cst_img'>
                                <Link href="/case-study-details">
                                    <Image src={CaseStudy3} alt=''/>
                                    <span className='cst_asterik'>
                                          <Image src={Asterik} alt='Asterik'/>
                                    </span>
                                </Link>
                                
                                
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className='row mt-3 mb-3'>
                     <div className='col-12'>
                        <ul className='portfolio-nav'>
                           <li>
                              <Link href="#">
                              <span className='me-2'>
                                 <Image src={Asterik} alt='Asterik'/>
                              </span>
                              Projects
                              </Link>
                           </li>
                           <li>
                              <Link href="#">
                              <span className='me-2'>
                                 <Image src={Asterik} alt='Asterik'/>
                              </span>
                              Work
                              </Link>
                           </li>
                           <li>
                              <Link href="#">
                              <span className='me-2'>
                                 <Image src={Asterik} alt='Asterik'/>
                              </span>
                              Case Studies
                              </Link>
                           </li>
                           <li>
                              <Link href="#">
                              <span className='me-2'>
                                 <Image src={Asterik} alt='Asterik'/>
                              </span>
                              Projects
                              </Link>
                           </li>
                           <li>
                              <Link href="#">
                              <span className='me-2'>
                                 <Image src={Asterik} alt='Asterik'/>
                              </span>
                              Work
                              </Link>
                           </li>
                           <li>
                              <Link href="#">
                              <span className='me-2'>
                                 <Image src={Asterik} alt='Asterik'/>
                              </span>
                              Case Studies
                              </Link>
                           </li>
                           <li>
                              <Link href="#">
                              <span className='me-2'>
                                 <Image src={Asterik} alt='Asterik'/>
                              </span>
                              Projects
                              </Link>
                           </li>
                           <li>
                              <Link href="#">
                              <span className='me-2'>
                                 <Image src={Asterik} alt='Asterik'/>
                              </span>
                              Work
                              </Link>
                           </li>
                           <li>
                              <Link href="#">
                              <span className='me-2'>
                                 <Image src={Asterik} alt='Asterik'/>
                              </span>
                              Case Studies
                              </Link>
                           </li>
                        </ul>
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