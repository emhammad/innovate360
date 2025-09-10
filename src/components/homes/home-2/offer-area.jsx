import React,{Suspense,useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import UIUXFirstState from "@assets/img/services/ui_ux_first_state.svg";
import ProductFirstState from "@assets/img/services/product_design_first.svg";
import WebDesignFirstState from "@assets/img/services/web_design_first_state.svg";
import SaasDesignFirstState from "@assets/img/services/saas_design_first_state.svg";
import Branding from "@assets/img/services/Branding_Icon.svg";
import WebDevelopment from "@assets/img/services/web_development.svg";

import UIUX2ndtate from "@assets/img/services/ui_ux_2nd_state.svg";
import Product2ndState from "@assets/img/services/product_design_2nd_state.svg";
import WebDesign2ndState from "@assets/img/services/web_design_2nd_state.svg";
import SaasDesign2ndState from "@assets/img/services/saas_design_2nd_state.svg";
import Branding2ndState from "@assets/img/services/Branding_Icon_2nd_state.svg";
import WebDevelopment2ndState from "@assets/img/services/web_development_2nd_state.svg";  

import StarAnimation from "@assets/img/animations/star_animation.gif";

const Spline = React.lazy(() => import('@splinetool/react-spline'));



function readText(reader_obj)
{
   let text = document.getElementsByClassName(reader_obj);
   text = text[0].innerText;
   
   let max_id = 0;
   let upd='';
   [...text].map((char, i) => {
      const delay = i * 50; // 50ms delay per character
      let objId = "chr_"+i;
      

      upd = upd + `<span id="${objId}">${char}</span>`;
      
      let update_txt = document.getElementsByClassName(reader_obj);
      update_txt[0].innerHTML = upd;
      max_id = i;
   }).join('');
   
   let iterator=0;
   let start_seconds =0;
   let end_seconds = 0.5; 
   while(iterator<max_id)
   {
      let id = "chr_"+iterator;
        
      document.getElementById(id).style.animation="change "+start_seconds+"s ease-in-out "+end_seconds+"s forwards";
      start_seconds = end_seconds + 0.1;
      end_seconds = end_seconds + 0.06;
      iterator = iterator + 1;
   }
   
}   
   

const OfferArea = () => {



    return (
        <>
           <section className="tp-offer-area p-relative pt-20 pb-20">
            
            <div className="container-fluid px-3">

               <div className="row align-items-center">
                  <div className="col-lg-7 col-lg-offset-5 col-12">
                     <div className="tp-feature-title-wrapper">
                        
                        <p className='services-heading staggered-text'>
                           <span className='animated_text_1' onMouseEnter={()=>readText('animated_text_1')}>Expert UI/UX design that transform ideas into intutive, engaging </span>
                           <span className='text_highlight'>digital experiences</span>
                           <span className='me-2'>.</span>
                           <span className='animated_text' onMouseEnter={()=>readText('animated_text')}>Let's build something remarkable together.</span>
                        </p>
                     </div>
                  </div>
               </div>
               <div className="row mt-50">
                 <div className='col-md-6 col-12'>
                    <div className='services-list'>
                        <ul>
                           <li>
                              <span> UI/UX Design</span>
                              <span className='services_icon'>
                                 <Image className='first_state' src={UIUXFirstState} alt="UI/UX Design"/>
                                 <Image className='hide_2nd_state' src={UIUX2ndtate} alt="UI/UX Design"/>
                              </span>
                              
                           </li>
                           <li>
                              <span>Product Design</span>
                              <span className='services_icon'>
                                 <Image className='first_state' src={ProductFirstState} alt="Product Design"/>
                                 <Image className='hide_2nd_state' src={Product2ndState} alt="Product Design"/>
                              </span>
                           </li>
                           <li>
                              <span>Web Design</span>
                              <span className='services_icon'>
                                 <Image className='first_state' src={WebDesignFirstState} alt="Web Design"/>
                                 <Image className='hide_2nd_state' src={WebDesign2ndState} alt="Web Design"/>
                              </span>
                           </li>
                           <li>
                              <span>Saas Design</span>
                              <span className='services_icon'>
                                 <Image className='first_state' src={SaasDesignFirstState} alt="Saas Design"/>
                                 <Image className='hide_2nd_state' src={SaasDesign2ndState} alt="Saas Design"/>
                              </span>
                           </li>
                           <li>
                              <span>Branding</span>
                              <span className='services_icon'>
                                 <Image className='first_state' src={Branding} alt="Branding"/>
                                 <Image className='hide_2nd_state' src={Branding2ndState} alt="Branding"/>
                              </span>
                           </li>
                           <li>
                              <span>Web Development</span>
                              <span className='services_icon'>
                                 <Image className='first_state' src={WebDevelopment} alt='Web Development'/>
                                 <Image className='hide_2nd_state' src={WebDevelopment2ndState} alt='Web Development'/>
                              </span>
                           </li>
                        </ul>
                    </div>
                 </div>
                 <div className='col-md-6 col-12'>
                     <div className='col-12 services-right-side p-relative '>
                        <div className='text-center'><Image src={StarAnimation} alt="Animation" unoptimized/></div>
                        <div className='services_content'>
                        <p>
                           we specialize exclusively in creating exceptional user 
                           interfaces and experiences. We cover the full spectrum of UI/UX design to ensure your product is not just beautiful, but also functional, accessible, and drives results.
                        </p>
                        <Link className="btn btn-primary services_cta arrow-right-up me-3" href="/contact">
                           <span className='me-2'>Get a Quote</span> 
                           <i className="fa-solid fa-arrow-right rotate-icon"></i>
                        </Link>
                     </div>
                     </div>
                 </div>
               </div>
            </div>
          </section> 
        </>
    );
};


export default OfferArea;