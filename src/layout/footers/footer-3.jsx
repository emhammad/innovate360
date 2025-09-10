import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import footer_logo from "@assets/img/logo/footer-logo.png";
import SocialLinks, { CopyRight } from '@/src/common/social-links';
import Asterik from "@assets/img/footer/Aesterisk.svg";

const footer_contact = {
    footer_info: <>We work hand-in-hand with your team, integrating seamlessly into your process. Your Vision combined with our expertise lead to stronger, more impactful outcomes.</>,
    map_link: "https://www.google.com/maps/search/86+Road+Broklyn+Street,+600+New+York,+USA/@40.6897806,-74.0278086,12z/data=!3m1!4b1",
    address: <>86 Road Broklyn Street, 600 <br /> New York, USA</>,
    mail: "needhelp@company.com",
    phone: "+92 666 888 0000",
    service_links: [
        {title: "Home", link: "#"},
        {title: "Services", link: "#"},
        {title: "About Us", link: "#"},
        {title: "Hire Designers", link: "#"},
        {title: "Blog", link: "#"},
    ],
    policy:[
        {title:"Privacy & Policy",link:"#"},
        {title:"Laws & Regulations",link:"#"},
        {title:"NDA",link:"#"},
        {title:"Refund Policy",link:"#"}
    ],
    Case_studies:
    [
        {title:"Case Study 1",link:"#"},
        {title:"Case Study 2",link:"#"},
        {title:"Case Study 3",link:"#"},
        {title:"Case Study 4",link:"#"}
    ]
}
const {bg_img, footer_info, map_link, address, mail, phone, service_links,policy,Case_studies} = footer_contact

const FooterThree = () => {
    return (
        <>
           <footer className="tp-footer-3-area p-relative">
                    <div className="container-fluid">
                    <div className="tp-footer-3-main-area">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="tp-footer-widget tp-footer-3-col-1">
                                    <div className="tp-footer-logo">
                                        <Link href="/"> 
                                            <Image src={footer_logo} alt="theme-pure" />
                                        </Link>
                                    </div>
                                    <div className="tp-footer-widget-content">
                                        <div className="tp-footer-info">
                                        <p className="p">{footer_info}</p>
                                        <div className="">
                                            <Link className="btn btn-primary header-2-btn" href="#">
                                            <span className='me-2'>Company Profile</span>
                                            <i className="fa-solid fa-arrow-right rotate-icon"></i>
                                            </Link>
                                        </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="tp-footer-widget tp-footer-3-col-2">
                                    <h3 className="tp-footer-widget-title">Quick Links</h3>
                                    <div className="tp-footer-widget-content">
                                        <ul>
                                            {service_links.map((item, i) => <li key={i}><Link href={item.link}>{item.title}</Link></li>)} 
                                        </ul>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="tp-footer-widget tp-footer-3-col-3">
                                    <h3 className="tp-footer-widget-title">Policies</h3>
                                    <div className="tp-footer-widget-content">
                                        <ul>
                                            {policy.map((item, i) => <li key={i}><Link href={item.link}>{item.title}</Link></li>)} 
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12'>
                                <div className='tp-footer-widget tp-footer-3-col-3'>
                                    <h3 className="tp-footer-widget-title">Selected Case Studies</h3>
                                    <div>
                                        <ul>
                                            {
                                                Case_studies.map((item,i)=><li key={i}><Link href={item.link}>{item.title}</Link></li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-footer-copyright-area p-relative">
                        <div className='row'>
                            <div className='col-12'>
                                <div className='tp-footer-copyright-inner text-lg-end mr-20'>
                                    <Link href="#">Red Panda Network LLC @ 2025</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="tp-footer-copyright-inner">
                                <Link href="#">Instagram</Link>
                                <Link href="#" className="ml-20">Facebook</Link>
                                <Link className="ml-20" href="#"> Linkedin</Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-8">
                            <div className='tp-footer-copyright-inner'>
                                <h2>
                                    <span className='me-3'>Award Wining Agency</span>
                                    <Image src={Asterik} alt='Icon'/>
                                    <span className='ml-20'>Grow Digital</span>
                                </h2>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </footer> 
        </>
    );
};

export default FooterThree;