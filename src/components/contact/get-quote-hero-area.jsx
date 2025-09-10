import Link from 'next/link'
import React,{useState} from 'react'
import Image from 'next/image';

import logo_img from "@assets/img/logo/Logo.svg";


import Sidebar from '@/src/modals/sidebar';



const HeroArea = () => {

   const [sidebarOpen, setSidebarOpen] = useState(false);
   const [selectedServices, setSelectedServices] = useState([]);
      const [selectedBudget, setSelectedBudget] = useState('');
      const [formData, setFormData] = useState({
         name: '',
         email: '',
         phone: '',
         company: '',
         services: selectedServices,
         budget: selectedBudget,
         nda: false
      });
   
      const handleSubmit = async (e) => {
      e.preventDefault();
   
      const data = formData;
   
      try {
         const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
         });
   
         const result = await response.json();
         alert(result.message);
      } catch (err) {
         alert('Failed to send message.');
      }
   };
   
   const handleChange = (e) => {
         const { name, value, type, checked } = e.target;
         setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
         }));
      };
   
      const servicesOptions = [
         'UI UX Design',
         'Product Design',
         'Saas Design',
         'Web Design',
         'Branding',
         'Development'
      ];
   
      const budgetOptions = [
         'Less than 2k',
         '5k',
         '10k',
         'More than 20k',
         "I Don't Know"
      ];
   
      const toggleService = (service) => {
         setSelectedServices((prev) =>
            prev.includes(service)
               ? prev.filter((s) => s !== service)
               : [...prev, service]
         );
      };
   
      const selectBudget = (budget) => {
         setSelectedBudget(budget);
      };
   
      const getButtonStyle = (isSelected) => ({
         backgroundColor: isSelected ? 'white' : '',
         color: isSelected ? '#d31f23' : 'white',
         border: isSelected ?'1px solid #d31f23':'1px solid white',
         padding: '8px 12px',
         borderRadius: '15px',
         cursor: 'pointer',
         margin: '5px',
         display: 'inline-block'
      });

  return (
    <>
         <section className="get-quote-hero-area bg-black p-relative">
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
                  <div className='row mt-30'>
                     <div className='col-12 mb-3'>
                        <h1>
                           <span className='text-white me-2'>Get a</span>
                           <span className='text_highlight'>Quote</span>
                        </h1>
                     </div>
                  </div>
                  <div className='row mt-10'>
                     <div className='col-md-4 col-12 my-3'>
                        <div className='location-list'>
                            <ul>
                               <li className='p-relative'>
                                  <div className='d-flex'>
                                    <span className='loc-dot me-1'></span>
                                    <span className='country'>
                                       USA
                                    </span>
                                  </div>
                                  <div className='loc-address'>
                                     <Link href="#">
                                       location address here
                                     </Link>
                                  </div>
                               </li>
                               <li className='p-relative'>
                                  <div className='d-flex'>
                                    <span className='loc-dot me-1'></span>
                                    <span className='country'>
                                       Portugal
                                    </span>
                                  </div>
                                  <div className='loc-address'>
                                     <Link href="#">
                                       location address here
                                     </Link>
                                  </div>
                               </li>
                               <li className='p-relative'>
                                  <div className='d-flex'>
                                    <span className='loc-dot me-1'></span>
                                    <span className='country'>
                                       Malaysia
                                    </span>
                                  </div>
                                  <div className='loc-address'>
                                     <Link href="#">
                                       location address here
                                     </Link>
                                  </div>
                               </li>
                               <li className='p-relative'>
                                  <div className='d-flex'>
                                    <span className='loc-dot me-1'></span>
                                    <span className='country'>
                                       Au
                                    </span>
                                  </div>
                                  <div className='loc-address'>
                                     <Link href="#">
                                       location address here
                                     </Link>
                                  </div>
                               </li>
                            </ul>
                        </div>
                     </div>
                     <div className='col-md-8 col-12 my-3'>
<div className='services'>
                           <span style={{color:"white"}}>Services*</span>
                           <div className='services_list'>
                              {servicesOptions.map((service) => (
                                 <div
                                    key={service}
                                    style={getButtonStyle(selectedServices.includes(service))}
                                    onClick={() => toggleService(service)}
                                 >
                                    {service}
                                 </div>
                              ))}
                           </div>
                        </div>
                        <div className='budget'>
                           <span style={{color:"white"}}>Your Budget on That Project In USD*</span>
                            <div className='services_list'>
                              {budgetOptions.map((budget) => (
                                 <div
                                    key={budget}
                                    style={getButtonStyle(selectedBudget === budget)}
                                    onClick={() => selectBudget(budget)}
                                 >
                                    {budget}
                                 </div>
                              ))}
                           </div>
                        </div>
                        <div className='contact-form'>
                           <span style={{color:"white"}}>
                              Your Contact Information
                           </span>
                           <form onSubmit={handleSubmit} className="get-quote-contact-form">
                              

                              <div className="row">
                                 <div className="col-md-6 col-12 my-3">
                                    <input
                                       className="form-control"
                                       type="text"
                                       name="name"
                                       placeholder="Your Name"
                                       value={formData.name}
                                       onChange={handleChange}
                                       required
                                    />
                                    <input
                                       className="form-control my-3"
                                       type="tel"
                                       name="phone"
                                       placeholder="Phone*"
                                       value={formData.phone}
                                       onChange={handleChange}
                                       required
                                    />
                                 </div>
                                 <div className="col-md-6 col-12 my-3">
                                    <input
                                       className="form-control"
                                       type="email"
                                       name="email"
                                       placeholder="Your Email"
                                       value={formData.email}
                                       onChange={handleChange}
                                       required
                                    />
                                    <input
                                       className="form-control my-3"
                                       type="text"
                                       name="company"
                                       placeholder="Company"
                                       value={formData.company}
                                       onChange={handleChange}
                                    />
                                 </div>
                              </div>

                              <div className="form-group my-3">
                                 <label style={{color:"white"}}>
                                    <input
                                       type="checkbox"
                                       name="nda"
                                       checked={formData.nda}
                                       onChange={handleChange}
                                       className="me-2"
                                    />
                                    Please send me a non-disclosure agreement
                                 </label>
                              </div>

                              <button type="submit" className="services_cta btn btn-primary">
                                 <span className="me-2">Start Your Journey</span>
                                 <i className="fa-solid fa-arrow-right"></i>
                              </button>
                           </form>
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