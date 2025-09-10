import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './nav-menu';
import useSticky from '@/src/hooks/use-sticky';

import logo_img from "@assets/img/logo/innovate.svg";
import logo_shape from "@assets/img/hero/hero-2/logo-shape.png";
import SearchPopup from '@/src/modals/search-popup';
import Sidebar from '@/src/modals/sidebar';

const HeaderTwo = () => {
   const {sticky}  =  useSticky()
   const [searchOpen, setSearchOpen] = useState(false)
   const [sidebarOpen, setSidebarOpen] = useState(false)



    return (
        <>
            <header className="tp-header-2-area tp-header-height p-relative">
               
               <div id="header-sticky" className={`tp-header-2-bottom header__sticky p-relative ${sticky && "tp-header-sticky"}`}>
                  <div className="tp-header-2-bottom-inner p-relative">
                     <div className="container-fluid gx-0">
                        <div className="row gx-0 align-items-center">
                           <div className="col-xxl-2 col-xl-2 col-lg-10 col-md-6">
                           <div className="tp-header-2-main-left d-flex align-items-center justify-content-xl-center justify-content-xxl-end p-relative">
                              <div className="tp-header-2-logo">
                                 <Link href="/">
                                    <Image src={logo_img} alt="theme-pure" />
                                 </Link>

                              </div>
                           </div>
                           </div>
                           <div className="col-xxl-6 col-xl-7 d-none d-xl-block">
                              <div className="tp-main-menu-2-area d-flex align-items-center">
                                 <div className="tp-main-menu">
                                    <nav id="tp-mobile-menu">
                                       
                                       <ul> 

                                          
                                       </ul> 
                                    </nav>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xxl-3 col-xl-3">
                           <div className="tp-header-main-right d-flex align-items-center justify-content-xl-end">
                              
                              </div>
                           </div>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> 


        </>
    );
};

export default HeaderTwo;