import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useSticky from '@/src/hooks/use-sticky';
import logo_img from "@assets/img/logo/innovate.svg";
import loginIcon from "@assets/img/icon/login.png";

const Topbar = () => {
   const { sticky } = useSticky()
   const [businessName] = useState("BusinessName"); // You can get this from props or context
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   useEffect(() => {
      // Check authentication status on component mount
      const authStatus = localStorage.getItem('isAuthenticated');
      const token = localStorage.getItem('authToken');

      if (authStatus === 'true' && token) {
         setIsAuthenticated(true);
      }
   }, []);

   const handleLogout = () => {
      // Clear authentication data
      localStorage.removeItem('authToken');
      localStorage.removeItem('isAuthenticated');
      // Update state
      setIsAuthenticated(false);
      // Redirect to login page
      window.location.href = '/';
   };

   return (
      <>
         <header className="tp-header-2-area tp-header-height p-relative">

            <div id="header-sticky" className={`tp-header-2-bottom header__sticky p-relative ${sticky && "tp-header-sticky"}`}>
               <div className="tp-header-2-bottom-inner p-relative">
                  <div className="container-fluid gx-0">
                     <div className="row gx-0 px-3 align-items-center justify-content-between">
                        <div className="col-md-4">
                           <div className="tp-header-2-main-left d-flex align-items-center justify-content-xl-start justify-content-xxl-start p-relative">
                              <div className="tp-header-2-logo">
                                 <Link href="/">
                                    <Image src={logo_img} alt="theme-pure" />
                                 </Link>

                              </div>
                           </div>
                        </div>

                        <div className="col-md-3">
                           <div className="tp-header-main-right d-flex align-items-end justify-content-xl-end">
                              {/* Login/Logout Section */}
                              {isAuthenticated ? (
                                 <div className="d-flex align-items-center" style={{ gap: '12px' }}>
                                    {/* Business Name Tag */}
                                    <div
                                       style={{
                                          backgroundColor: '#FCFCFC4D',
                                          color: '#EDFF8B',
                                          padding: '4px 16px',
                                          borderRadius: '20px',
                                          fontSize: '14px',
                                          fontWeight: '500',
                                          border: 'none',
                                          cursor: 'default'
                                       }}
                                    >
                                       {businessName}
                                    </div>

                                    {/* Logout Button */}
                                    <button
                                       onClick={handleLogout}
                                       style={{
                                          width: '40px',
                                          height: '40px',
                                          borderRadius: '50%',
                                          backgroundColor: '#EDFF8B',
                                          border: 'none',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          cursor: 'pointer',
                                          transition: 'all 0.2s ease'
                                       }}
                                       onMouseEnter={(e) => {
                                          e.target.style.backgroundColor = '#d4ed6b';
                                       }}
                                       onMouseLeave={(e) => {
                                          e.target.style.backgroundColor = '#EDFF8B';
                                       }}
                                    >
                                       <Image
                                          src={loginIcon}
                                          alt="Logout"
                                          width={20}
                                          height={20}
                                          style={{
                                             filter: 'brightness(0) saturate(100%) invert(20%) sepia(20%) saturate(2000%) hue-rotate(100deg) brightness(0.3)'
                                          }}
                                       />
                                    </button>
                                 </div>
                              ) : (
                                 /* Login Button - Only show when not authenticated */
                                 <Link href="/company/signin">
                                    <button
                                       style={{
                                          backgroundColor: '#FCFCFC4D',
                                          color: '#EDFF8B',
                                          padding: '5px 20px',
                                          borderRadius: '20px',
                                          border: 'none',
                                          fontSize: '14px',
                                          fontWeight: '500',
                                          cursor: 'pointer',
                                          transition: 'all 0.2s ease',
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '8px'
                                       }}
                                    >
                                       Login
                                    </button>
                                 </Link>
                              )}
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>
   );
};

export default Topbar;