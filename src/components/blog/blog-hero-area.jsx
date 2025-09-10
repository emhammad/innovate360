import Link from 'next/link'
import React,{useState} from 'react'
import Image from 'next/image';

import logo_img from "@assets/img/logo/Logo.svg";


import Sidebar from '@/src/modals/sidebar';



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
                  <div className="row" style={{height:"88vh"}}>
                     <div className='col-12 p-relative'>
                        <div className='blog-breadcrumb'>
                           <h1>View Insights</h1>
                           <h1>On Latest <span className='text_highlight'>Design</span> News</h1>
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