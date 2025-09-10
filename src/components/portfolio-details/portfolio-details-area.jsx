import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CstImg from "@assets/img/case_studies/cst_detail.png";
import CstImg1 from "@assets/img/case_studies/cst_detail_1.png";
import CstImg2 from "@assets/img/case_studies/cst_detail_2.png";

import Figma from "@assets/img/case_studies/Figma.png";
import Photoshop from "@assets/img/case_studies/devicon_photoshop.png";
import Balsamiq from "@assets/img/case_studies/hugeicons_smile.png";
import Illustrator from "@assets/img/case_studies/skill-icons_illustrator.png";
import Webflow from "@assets/img/case_studies/skill-icons_webflow.png";

const PortfolioDetailsArea = () => {
    return (
        <>
            <section className="tp-portfolio-details-area pt-20 pb-20 px-3">
                <div className="container-fluid">
                    <div className="row mb-20">
                        <div className='col-12 text-center'>
                            <div className="pfg-img-container">
                                <Image  src={CstImg} alt="Detail Image"/>
                                <div className='pf-btn-container'>
                                    <Link className='rotate-icon btn btn-primary' href="#">
                                       <span className='me-2'>View Site</span>
                                       <i className='fa fa-arrow-right'></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-md-6 col-12 my-3'>
                            <h6>Services</h6>
                            <ul className='portfolio-services-list'>
                                <li>
                                    <span className='active-menu'>Design</span>
                                </li>
                                <li>
                                    <span>Development</span>
                                </li>
                                <li>
                                    <span>Illustration</span>
                                </li>
                                <li>
                                    <span>Photoshoot</span>
                                </li>
                                <li>
                                    <span>UX Design</span>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-6 col-12 my-3'>
                            <h6>About <span className='text_hightlight'>Client</span></h6>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                            </p>
                        </div>
                    </div>
                    <div className='row mt-20 mb-20'>
                        <div className='col-md-6 col-12 my-3'>
                            <h6>The <span className='text_hightlight'>Solution</span></h6>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                            </p>
                        </div>
                        <div className='col-md-6 col-12 my-3'>
                            <h6>
                                <span className='text_hightlight me-2'>Problems</span>
                                client was facing / or <span className='text_highlight'>challenge</span> 
                            </h6>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                            </p>
                        </div>
                    </div>
                    <div className='row mt-20'>
                        <div className='col-12 mb-3'>
                            <h2>Design <span className='text_highlight'>Info</span></h2>
                        </div>
                        <div className='col-md-6 col-12 my-3'>
                            <h6>Colors</h6>
                            <div className='color_list'>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 my-3'>
                            <h6>Typeface <span className='text_highlight'>used</span></h6>
                            <span className='typeface'>Chillax</span>
                        </div>
                    </div>
                    <div className='row mb-20'>
                        <div className='col-md-6 col-12 my-3'>
                            <h6>Tool <span className='text_highlight'>Used</span></h6>
                            <ul className='tool_list'>
                                <li>
                                    <span>
                                        <Image className='' src={Figma} alt="Figma"/>
                                        Figma
                                    </span>
                                    
                                </li>
                                <li>
                                    <span>
                                        <Image className='' src={Photoshop} alt="Figma"/>
                                        Adob Photoshop
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <Image className='' src={Illustrator} alt="Figma"/>
                                        Adob Illustrator
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <Image className='' src={Balsamiq} alt="Figma"/>
                                        Balsamiq
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <Image className='' src={Webflow} alt="Figma"/>
                                        Webflow
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-6 col-12 my-3'>
                            <h6>Design <span className='text_highlight'>Preview</span></h6>
                            <Link href="#" className="mt-2 btn btn-primary">
                                <span className='me-3'>Figma File</span>
                                <i className='rotate-icon fa fa-arrow-right'></i>
                            </Link>
                        </div>
                    </div>
                    <div className='row mb-20'>
                        <div className='col-12 text-center'>
                            <div className="pfg-img-container">
                                <Image  src={CstImg} alt="Detail Image"/>
                               
                            </div>
                        </div>
                        <div className='text-center col-md-6 col-12 my-3'>
                            <div>
                                <Image className="w-100"  src={CstImg1} alt="Detail Image"/>
                               
                            </div>
                        </div>
                        <div className='text-center col-md-6 col-12 my-3'>
                            <div>
                                <Image className="w-100"  src={CstImg2} alt="Detail Image"/>
                               
                            </div>
                        </div>
                    </div>
                    <div className='justify-content-center row mt-20'>
                        <div className='col-12 mb-10'>
                            <h2>
                                More <span className='text_highlight'>Projects</span>
                            </h2>
                        </div>
                        <div className='col-md-6'>
                            <div className="w-100 button-card prev" >
                                <span className="button-label">Prev</span>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="w-100 button-card next">
                                <span className="button-label">Next</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioDetailsArea;