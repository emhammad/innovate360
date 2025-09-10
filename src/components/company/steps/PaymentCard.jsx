"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PaymentCard({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    fullName: "",
    country: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onNext) {
      onNext(formData);
    }
  };

  const isFormValid = formData.email && formData.cardNumber && formData.expiryDate &&
    formData.cvv && formData.fullName && formData.country;

  return (
    <div className="d-flex flex-column flex-lg-row" style={{ minHeight: '100vh' }}>
      {/* Left Section - Logo and Price */}
      <div
        className="d-flex flex-column justify-content-start align-items-start col-12 col-lg-5 px-3 px-lg-5"
        style={{
          backgroundColor: 'white',
          paddingTop: '80px',
          paddingLeft: '60px',
        }}
      >
        {/* Back Arrow and Logo */}
        <div className="d-flex align-items-center mb-3 mb-lg-5" style={{ width: '100%' }}>
          <button
            onClick={onBack}
            className="btn btn-link p-0 me-3"
            style={{
              color: '#28a745',
              textDecoration: 'none',
              fontSize: '24px'
            }}
          >
            ←
          </button>
          <Image
            src="/assets/img/logo/innovate360.png"
            alt="INNOVATE 360°"
            width={180}
            height={80}
            style={{ objectFit: 'contain', maxWidth: '100%' }}
            className="img-fluid"
          />
        </div>

        {/* Subscribe Text */}
        <div className="text-center text-lg-start mb-2 ms-4 ps-3">
          <p style={{ color: '#3D3D3D', fontSize: '16px', margin: 0 }}>
            Subscribe to Plan Name
          </p>
        </div>

        {/* Price */}
        <div className="text-center text-lg-start ms-4 ps-3">
          <span style={{ color: '#007C36', fontSize: 'clamp(28px, 8vw, 36px)', fontWeight: '600' }}>
            €540
          </span>
          <span style={{ color: '#3D3D3D', fontSize: 'clamp(14px, 3vw, 16px)', marginLeft: '8px' }}>
            per month
          </span>
        </div>
      </div>

      {/* Line - Hidden on mobile */}
      <div className="d-none d-lg-block" style={{ width: '0.5%', backgroundColor: '#f8f9fa' }}></div>

      {/* Right Section - Payment Form */}
      <div
        className="d-flex flex-column justify-content-center col-12 col-lg-6 px-3 px-lg-5"
        style={{
          backgroundColor: 'transparent',
          paddingTop: '80px'
        }}
      >
        <div className="w-100" style={{ maxWidth: '500px', margin: '0 auto' }}>
          {/* Title */}
          <h4 className="fw-bold mb-2" style={{ color: '#3D3D3D', fontSize: 'clamp(20px, 4vw, 24px)' }}>
            Pay with Card
          </h4>

          {/* Subtitle */}
          <p className="text-muted mb-4" style={{ fontSize: 'clamp(14px, 3vw, 16px)' }}>
            Please add your card details
          </p>

          {/* Payment Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Address */}
            <div className="mb-3 position-relative">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  height: '54px',
                  borderRadius: '50px',
                  paddingTop: '15px',
                  paddingRight: '20px',
                  paddingBottom: '15px',
                  paddingLeft: '50px',
                  opacity: 1,
                  borderWidth: '1px',
                  border: '1px solid #3D3D3D40',
                  background: 'transparent',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <Image
                src="/assets/img/icon/sms.png"
                alt="Email Icon"
                width={20}
                height={20}
                className="position-absolute"
                style={{
                  top: '50%',
                  left: '20px',
                  transform: 'translateY(-50%)',
                  zIndex: 10
                }}
              />
            </div>

            {/* Card Number */}
            <div className="mb-3 position-relative">
              <input
                type="text"
                name="cardNumber"
                className="form-control"
                placeholder="1234 1234 1234 1234"
                value={formData.cardNumber}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  height: '54px',
                  borderRadius: '50px',
                  paddingTop: '15px',
                  paddingRight: '200px',
                  paddingBottom: '15px',
                  paddingLeft: '20px',
                  opacity: 1,
                  borderWidth: '1px',
                  border: '1px solid #3D3D3D40',
                  background: 'transparent',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              {/* Payment Method Logos - Inside the input field */}
              <div
                className="position-absolute d-flex align-items-center"
                style={{
                  top: '50%',
                  right: '15px',
                  transform: 'translateY(-50%)',
                  gap: '8px',
                  pointerEvents: 'none'
                }}
              >
                {/* VISA */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '3px',
                    padding: '4px 6px',
                    minWidth: '20px',
                    height: '20px',
                    border: 'none'
                  }}
                >
                  <span style={{ fontSize: '8px', fontWeight: 'bold', color: '#1A1F71' }}>VISA</span>
                </div>

                {/* Mastercard */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: '#000',
                    borderRadius: '3px',
                    padding: '4px 6px',
                    minWidth: '20px',
                    height: '20px'
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#EB001B',
                        marginRight: '-2px',
                        zIndex: 2
                      }}
                    ></div>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#F79E1B',
                        zIndex: 1
                      }}
                    ></div>
                  </div>
                </div>

                {/* JCB */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '3px',
                    padding: '4px 6px',
                    minWidth: '20px',
                    height: '20px',
                    border: 'none'
                  }}
                >
                  <div className="d-flex">
                    <div style={{ width: '2px', height: '12px', backgroundColor: '#0066CC', marginRight: '1px' }}></div>
                    <div style={{ width: '2px', height: '12px', backgroundColor: '#CC0000', marginRight: '1px' }}></div>
                    <div style={{ width: '2px', height: '12px', backgroundColor: '#00AA44' }}></div>
                  </div>
                </div>

                {/* PayPal */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: '#0070BA',
                    borderRadius: '3px',
                    padding: '4px 6px',
                    minWidth: '20px',
                    height: '20px'
                  }}
                >
                  <span style={{ fontSize: '7px', fontWeight: 'bold', color: 'white' }}>PayPal</span>
                </div>
              </div>
            </div>

            {/* Expiry Date and CVV */}
            <div className="row mb-3 g-3">
              <div className="col-12 col-sm-6">
                <input
                  type="text"
                  name="expiryDate"
                  className="form-control"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    height: '54px',
                    borderRadius: '50px',
                    paddingTop: '15px',
                    paddingRight: '20px',
                    paddingBottom: '15px',
                    paddingLeft: '20px',
                    opacity: 1,
                    borderWidth: '1px',
                    border: '1px solid #3D3D3D40',
                    background: 'transparent',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>
              <div className="col-12 col-sm-6">
                <input
                  type="text"
                  name="cvv"
                  className="form-control"
                  placeholder="CVV/CVC"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    height: '54px',
                    borderRadius: '50px',
                    paddingTop: '15px',
                    paddingRight: '20px',
                    paddingBottom: '15px',
                    paddingLeft: '20px',
                    opacity: 1,
                    borderWidth: '1px',
                    border: '1px solid #3D3D3D40',
                    background: 'transparent',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Full Name on Card */}
            <div className="mb-3">
              <input
                type="text"
                name="fullName"
                className="form-control"
                placeholder="Full Name on Card"
                value={formData.fullName}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  height: '54px',
                  borderRadius: '50px',
                  paddingTop: '15px',
                  paddingRight: '20px',
                  paddingBottom: '15px',
                  paddingLeft: '20px',
                  opacity: 1,
                  borderWidth: '1px',
                  border: '1px solid #3D3D3D40',
                  background: 'transparent',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>

            {/* Country or Region */}
            <div className="mb-4 position-relative">
              <input
                type="text"
                name="country"
                className="form-control"
                placeholder="Country or Region"
                value={formData.country}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  height: '54px',
                  borderRadius: '50px',
                  paddingTop: '15px',
                  paddingRight: '50px',
                  paddingBottom: '15px',
                  paddingLeft: '20px',
                  opacity: 1,
                  borderWidth: '1px',
                  border: '1px solid #3D3D3D40',
                  background: 'transparent',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <div
                className="position-absolute"
                style={{
                  top: '50%',
                  right: '20px',
                  transform: 'translateY(-50%)',
                  color: '#3D3D3D',
                  fontSize: '16px',
                  pointerEvents: 'none'
                }}
              >
                ▼
              </div>
            </div>

            {/* Subscribe Button */}
            <button
              type="submit"
              className="btn w-100 mb-3"
              style={{
                height: '48px',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: '600',
                backgroundColor: isFormValid ? '#28a745' : '#1D1B201F',
                color: isFormValid ? '#fff' : '#1D1B20',
                border: 'none',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              disabled={!isFormValid}
            >
              Subscribe
            </button>

            {/* Disclaimer */}
            <p className="text-center mb-4 mt-2" style={{ fontSize: '12px', lineHeight: '1.4' , color: '#3D3D3D' }}>
              By confirming you allow Innovate360 to charge you for future payments in accordance with their terms. You can always cancel your subscription.
            </p>

            {/* Footer */}
            <div className="text-center">
              <p className="mb-0" style={{ fontSize: '12px' , color: '#3D3D3D' }}>
                Powered by <Link href="#" className="text-success fw-semibold text-decoration-none">stripe</Link> |
                <Link href="#" className="text-success fw-semibold text-decoration-none ms-1">Terms of Service</Link> |
                <Link href="#" className="text-success fw-semibold text-decoration-none ms-1">Privacy Policy</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
