import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import BlogImage from "@assets/img/blog/blog_2.png";
import Topic1 from "@assets/img/blog/topic_1.png";
import Topic2 from "@assets/img/blog/topic_2.png";
const BlogDetailsPostbox = () => {


    return (
        <>
         <section className="postbox__area pt-120 pb-100">
            <div className="container">
               <div className="row">
                  <div className='col-12 d-flex align-items-center'>
                     <Image src={BlogImage} alt='Blog Detail'/>
                  </div>
               </div>
               <div className='mt-50 row'>
                  <div className='col-12'>
                     <h1>Learn About Latest Trends In Tech Industry</h1>
                     <p className='text text-justify'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     </p>
                  </div>
                  <div className='col-12 mt-10'>
                     <h1>Why do we use it?</h1>
                     <p className='text text-justify'>
                        it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                     </p>
                  </div>
               </div>
               <div className="row">
                  <div className='col-12 d-flex align-items-center'>
                     <Image src={BlogImage} alt='Blog Detail'/>
                  </div>
               </div>
               
            </div>
            <div className='container-fluid'>
               <div className='row mt-70'>
                  <div className='col-12'>
                     <h1>
                        Explore <span className='text_highlight'>Similar Topics</span>
                     </h1>
                  </div>
               </div>
               <div className='mt-30 similar-topics'>
                  <div className='col-lg-4 col-md-6 col-12 topic_card'>
                     <Image className='w-100' src={Topic2} alt='first topic'/>
                     <div className='mt-20 topic_detail'>
                        <h6>UI UX Design</h6>
                        <div className='d-flex p-relative'>
                           <div>
                              <h2>
                                 Learn About Latest Trends In Tech Industry
                              </h2>
                           </div>
                           <Link className='tex-end btn btn-primary' href="/blog-details" style={{marginLeft:"16px",borderRadius:"100%"}}>
                           <i className='rotate-icon fa fa-arrow-right'></i>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-12 topic_card'>
                     <Image className='w-100' src={Topic1} alt='first topic'/>
                     <div className='mt-20 topic_detail'>
                        <h6>UI UX Design</h6>
                        <div className='d-flex p-relative'>
                           <div>
                              <h2>
                                 Learn About Latest Trends In Tech Industry
                              </h2>
                           </div>
                           <Link className='tex-end btn btn-primary' href="/blog-details" style={{marginLeft:"16px",borderRadius:"100%"}}>
                           <i className='rotate-icon fa fa-arrow-right'></i>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-12 topic_card'>
                     <Image className='w-100' src={Topic2} alt='first topic'/>
                     <div className='mt-20 topic_detail'>
                        <h6>UI UX Design</h6>
                        <div className='d-flex p-relative'>
                           <div>
                              <h2>
                                 Learn About Latest Trends In Tech Industry
                              </h2>
                           </div>
                           <Link className='tex-end btn btn-primary' href="/blog-details" style={{marginLeft:"16px",borderRadius:"100%"}}>
                           <i className='rotate-icon fa fa-arrow-right'></i>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-12 topic_card'>
                     <Image className='w-100' src={Topic1} alt='first topic'/>
                     <div className='mt-20 topic_detail'>
                        <h6>UI UX Design</h6>
                        <div className='d-flex p-relative'>
                           <div>
                              <h2>
                                 Learn About Latest Trends In Tech Industry
                              </h2>
                           </div>
                           <Link className='tex-end btn btn-primary' href="/blog-details" style={{marginLeft:"16px",borderRadius:"100%"}}>
                           <i className='rotate-icon fa fa-arrow-right'></i>
                           </Link>
                        </div>
                     </div>
                     <div className='topic_card'>
                     <Image className='w-100' src={Topic2} alt='first topic'/>
                     <div className='mt-20 topic_detail'>
                        <h6>UI UX Design</h6>
                        <div className='d-flex p-relative'>
                           <div>
                              <h2>
                                 Learn About Latest Trends In Tech Industry
                              </h2>
                           </div>
                           <Link className='tex-end btn btn-primary' href="/blog-details" style={{marginLeft:"16px",borderRadius:"100%"}}>
                           <i className='rotate-icon fa fa-arrow-right'></i>
                           </Link>
                        </div>
                     </div>
                  </div>
                  </div>
               </div>
            </div>
         </section>
        </>
    );
};

export default BlogDetailsPostbox;