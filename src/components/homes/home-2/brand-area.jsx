import React,{ useEffect, useState, useRef }  from "react";
import Image from 'next/image';
import star from "@assets/img/testimonial/star.svg";
import { motion } from "framer-motion";

const BrandArea = () => {

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
      color: isSelected ? '#d31f23' : '',
      border: isSelected ?'1px solid #d31f23':'1px solid black',
      padding: '8px 12px',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '5px',
      display: 'inline-block'
   });

    return (
        <>
            <div className="tp-brand-area p-relative pt-120 pb-80">
               <div className="container-fluid">
                  {/* {CustomCursor('get-a-quote-tracker')} */}
                  <div className='row'>
                     <div className='col-12'>
                        <motion.h1

                           initial={{ opacity: 0, y: -10 }} // Start faded out and slightly above
                           whileInView={{ opacity: 1 , y: 0,amount:1 }}
                           transition={{ duration: 0.5, ease: "easeInOut" }} // Customize timing
                           viewport={{ once: true }}
                        >
                           Start your
                           <br/>
                           <span className='tp-brand-text-highlight'>Journey</span>
                        </motion.h1>
                     </div>
                  </div>
                  <div className='row'>
                     <motion.div 

                        initial={{ opacity: 0, x: -20 }} // Start faded out and slightly above
                        whileInView={{ opacity: 1 , x: 0,amount:1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }} // Customize timing
                        viewport={{ once: true }}
                        className='col-lg-3 col-md-4 col-12 my-3'
                     >
                        <h2 className='rating'>4.9</h2>
                           <div className='rating_stars'>
                              <Image src={star} alt='star'/>
                              <Image src={star} alt='star'/>
                              <Image src={star} alt='star'/>
                              <Image src={star} alt='star'/>
                              <Image src={star} alt='star'/>
                           </div>
                           <div className='rating_info'>
                              <div className='overall_rating_text'>
                                    <h3>Overall Rating</h3>
                              </div>
                              <div className='refference'>
                                    <span>Many Ceo's Reffer Red Panda Network</span>
                              </div>
                              
                           </div>
                           <button className='services_cta btn btn-primary mt-20'>
                                       <span className="me-2">Schedual a call</span>
                                       <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                     </motion.div>
                     <motion.div

                        initial={{ opacity: 0, x: 80 }} // Start faded out and slightly above
                        whileInView={{ opacity: 1 , x: 0,amount:1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }} // Customize timing
                        viewport={{ once: true }} 
                        className='col-lg-9 col-md-8 col-12 my-2 px-3'
                     >
                        <div className='services'>
                           <span className='title'>Services*</span>
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
                           <span className='title'>Your Budget on That Project In USD*</span>
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
                           <span className='title'>
                              Your Contact Information
                           </span>
                           <form onSubmit={handleSubmit} className="contact-form">
                              

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
                                 <label>
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
                     </motion.div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default BrandArea;