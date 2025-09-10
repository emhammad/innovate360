import Link from 'next/link';
import Image from 'next/image';
import ImagePopup from './ImagePopup';
import React, { useState } from 'react';

import Logo from "@assets/img/logo/Logo.svg";

import MobileMenus from '../layout/headers/mobile-menus';



const Sidebar = ({sidebarOpen, setSidebarOpen, home_three}) => {
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images


    return (
        <>
            <div className={`offcanvas__area ${sidebarOpen ? "offcanvas-opened" : ""} ${home_three ? "home-3-pos" : ""}`}>
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__close">
                        <button className="offcanvas__close-btn offcanvas-close-btn" onClick={() => setSidebarOpen(false)}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1 1L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                <div className="offcanvas__content">
                    <div className="offcanvas__top mb-50 d-flex justify-content-between align-items-center">
                        <div className="offcanvas__logo logo">
                            <Link href="/">
                            <Image src={Logo} alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="mobile-menu fix d-lg-none"></div>
                    <div className="tp-mobile-menu-pos mean-container">
                        <MobileMenus />
                    </div>
                    
                    <div className="offcanvas__contact">
                        <div className='row p-0 m-0'>
                            <div className='col-6'>
                            <span>Terms & Conditions</span>
                            </div>
                            <div className='col-6'>
                                <span>Privacy Policy</span>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
         <div className={`body-overlay ${sidebarOpen && "opened"}`} onClick={() => setSidebarOpen(false)}></div>

         {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
        </>
    );
};

export default Sidebar;