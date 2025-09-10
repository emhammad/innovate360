import Link from 'next/link';
import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import logo_img from "@assets/img/logo/Logo.svg";

import H1Arrow from "@assets/img/icon/H1_Arrow.svg";
import PercentArrow from "@assets/img/icon/100_percent_Arrow.svg";
import Desktop from "@assets/img/icon/desktop_img.png";
import Insta from "@assets/img/icon/Instagram.svg";
import Linkedin from "@assets/img/icon/LINKEDIN.svg";
import FB from "@assets/img/icon/FB.svg"; 

import mq1 from "@assets/img/marquee/mq1.png";
import mq2 from "@assets/img/marquee/mq2.png";
import mq3 from "@assets/img/marquee/mq3.png";
import mq4 from "@assets/img/marquee/mq4.png";
import mq5 from "@assets/img/marquee/mq6.png";
import SplineImage from "@assets/img/hero/spline-preview.png";
import Sidebar from '@/src/modals/sidebar';

// Lazy load Spline
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const HeroArea = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Use Intersection Observer to load Spline only when visible
  const { ref: splineRef, inView: splineInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section className="tp-hero-area p-relative">
        <div className="tp-hero-2-wrapper p-relative">
          <div className="hero-container container-fluid">
            <div className="row p-0 m-0 hero-menu-container">
              <div className="fade-in-left mt-3 p-0 col-xl-3 col-lg-4 col-md-4 col-12">
                <div className="p-relative hero-section-header d-flex">
                  <Link href="/" className='me-3'>
                    <Image src={logo_img} alt="Home" />
                  </Link>
                  <div className="text-right offcanvas-open-btn">
                    <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
                      <span>
                        <img src='/assets/img/icon/header-hamburger-shape.svg' alt="menu"/>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Left Content */}
              <div className="tp-her-content-container col-lg-6 col-md-6 col-12">
                <div className="text-left tp-hero-2-content mt-70">
                  <div className='content-wraper'>
                    <div className="tp-hero-2-title-wrapper fadeUp">
                      <h3 className="fade-in-left tp-hero-2-title">
                        Building <br />
                        <Image className='me-3' src={H1Arrow} alt="H1 Arrow" />
                        <span>Digital Experience</span> <br />
                        <Image src={Desktop} alt="Desktop" /> That Sticks
                      </h3>
                    </div>
                    <div className="tp-hero-2-btn fadeUp">
                      <Link className="tp-hero-action1 btn btn-primary me-3" href="/call-us">
                        <span className='me-2'>Get Started</span> 
                        <i className="fa-solid fa-arrow-right rotate-icon"></i>
                      </Link>
                      <Link className="btn btn-secondary" href="/get-a-quote">Contact Us</Link>
                    </div>
                  </div>
                </div>

                <div className="tp-hero-2-side-text">
                  <div className='fade-in-right tp-hero-2-text'>
                    <a>
                      <Image className='me-3' src={PercentArrow} alt="Growth Arrow" /> 
                      <h3>100% Growth</h3>
                    </a>
                    <p>
                      OUR GROWTH RATE HIGHER THAN EXPECTED TRUST <br/>
                      US AND JUST RELAX WHILE WE HANDLE YOUR <br/> DIGITAL PRESENCE
                    </p>
                  </div>
                  <div className='fade-in-right tp-hero-2-bottom-text'>
                    <p>
                      OUR GROWTH RATE HIGHER THAN EXPECTED TRUST <br/>
                      US AND JUST RELAX WHILE WE HANDLE YOUR <br/> DIGITAL PRESENCE
                    </p>
                  </div>
                  <div className="fade-in-right tp-hero-2-mail">
                    <a className="mb-2" href="#"><Image src={Insta} alt="Instagram"/></a>
                    <a className="mb-2" href="#"><Image src={FB} alt="Facebook"/></a>
                    <a className="mb-2" href="#"><Image src={Linkedin} alt="LinkedIn"/></a>
                  </div>
                </div>
              </div>

              <div className='p-relative col-lg-6 col-md-6 col-12'>
                
                
              </div>
            </div>

            {/* Outside the grid — full-width centered */}
            <div className="spline-fullpage-wrapper" ref={splineRef} >
              <div className="spline-center">
                {splineInView ? (
                  <Suspense fallback={<div>Loading 3D...</div>}>
                    <Spline scene="https://prod.spline.design/Mskn2dL8Mpl2aFpa/scene.splinecode" />
                  </Suspense>
                ) : (
                  <Image
                    src={SplineImage}
                    alt="3D Preview"
                    width={600}
                    height={500}
                    placeholder="blur"
                  />
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Marquee Section */}
        <div className='row marquee_section'>
          <div className='col-12 marquee'>
            <div className='scrolling-text'>
              <Image src={mq1} alt='Marquee-1'/>
              <Image src={mq2} alt='Marquee-2'/>
              <Image src={mq3} alt='Marquee-3'/>
              <Image src={mq4} alt='Marquee-4'/>
              <Image src={mq5} alt='Marquee-5'/>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default HeroArea;
