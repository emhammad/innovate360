
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BlogIMage from "@assets/img/blog/blog_3.png"; 

 

const PostboxArea = () => {
    return (
        <>
            <section className="postbox__area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-12 text-center">
                     <ul className='justify-content-center blog-type-list'>
                        <li className='active'>All</li>
                        <li>UI UX Design</li>
                        <li>Web Design</li>
                        <li>Product Design</li>
                        <li>Saas Design</li>
                        <li>Branding</li>
                        <li>Development</li>
                     </ul>
                  </div>
               </div>
               <div className='mt-20 row postbox'>
                  <div className='p-relative col-md-7 col-12 my-3'>
                     <div className='blog-content'>
                        <ul className='blog-tags blog-type-list'>
                           <li className='my-1'>Design</li>
                           <li className='my-1'>Development</li>
                           <li className='my-1'>Illustration</li>
                           <li className='my-1'>Photoshop</li>
                           <li className='my-1'>UX Design</li>
                        </ul>
                        <div className='blog-detail'>
                           <h6 className='text_highlight'>
                              Tech Industry
                           </h6>
                           <div className='d-flex p-relative'>
                              <h4>
                                 Learn About Latest Trend In Tech Industry
                              </h4>
                              <Link className='tex-end btn btn-primary' href="/blog-details" style={{marginLeft:"16px",borderRadius:"100%"}}>
                              <i className='rotate-icon fa fa-arrow-right'></i>
                              </Link>
                           </div>

                        </div>
                     </div>
                  </div>
                  <div className='col-md-5 col-12 my-3'>
                     <Image  src={BlogIMage} alt="Blog Image"/>
                  </div>
               </div>
               <div className='mt-20 row postbox'>
                  <div className='p-relative col-md-7 col-12 my-3'>
                     <div className='blog-content'>
                        <ul className='blog-tags blog-type-list'>
                           <li className='my-1'>Design</li>
                           <li className='my-1'>Development</li>
                           <li className='my-1'>Illustration</li>
                           <li className='my-1'>Photoshop</li>
                           <li className='my-1'>UX Design</li>
                        </ul>
                        <div className='blog-detail'>
                           <h6 className='text_highlight'>
                              Tech Industry
                           </h6>
                           <div className='d-flex p-relative'>
                              <h4>
                                 Learn About Latest Trend In Tech Industry
                              </h4>
                              <Link className='tex-end btn btn-primary' href="/blog-details" style={{marginLeft:"16px",borderRadius:"100%"}}>
                              <i className='rotate-icon fa fa-arrow-right'></i>
                              </Link>
                           </div>

                        </div>
                     </div>
                  </div>
                  <div className='col-md-5 col-12 my-3'>
                     <Image  src={BlogIMage} alt="Blog Image"/>
                  </div>
               </div>
               <div className='mt-20 row postbox'>
                  <div className='p-relative col-md-7 col-12 my-3'>
                     <div className='blog-content'>
                        <ul className='blog-tags blog-type-list'>
                           <li className='my-1'>Design</li>
                           <li className='my-1'>Development</li>
                           <li className='my-1'>Illustration</li>
                           <li className='my-1'>Photoshop</li>
                           <li className='my-1'>UX Design</li>
                        </ul>
                        <div className='blog-detail'>
                           <h6 className='text_highlight'>
                              Tech Industry
                           </h6>
                           <div className='d-flex p-relative'>
                              <h4>
                                 Learn About Latest Trend In Tech Industry
                              </h4>
                              <Link className='tex-end btn btn-primary' href="/blog-details" style={{marginLeft:"16px",borderRadius:"100%"}}>
                              <i className='rotate-icon fa fa-arrow-right'></i>
                              </Link>
                           </div>

                        </div>
                     </div>
                  </div>
                  <div className='col-md-5 col-12 my-3'>
                     <Image  src={BlogIMage} alt="Blog Image"/>
                  </div>
               </div>
            </div>
         </section>
        </>
    );
};

export default PostboxArea;