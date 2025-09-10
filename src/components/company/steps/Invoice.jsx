"use client";
import { useState } from "react";
import Image from "next/image";

export default function Invoice({ onNext, onBack }) {
    const [promoCode, setPromoCode] = useState("");
    const [isPromoApplied, setIsPromoApplied] = useState(false);

    const handleApplyPromo = () => {
        if (promoCode.trim()) {
            setIsPromoApplied(true);
            console.log("Promo code applied:", promoCode);
        }
    };

  const handleNext = () => {
    // Navigate to upload receipt page
    window.location.href = '/company/upload-receipt';
  };

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            <div className="container" style={{ maxWidth: '600px', marginTop: '80px', marginBottom: '50px' }}>

                {/* Invoice Section */}
                <div className="mb-4">
                    <div
                        className="card"
                        style={{
                            borderRadius: '16px',
                            border: 'none',
                            backgroundColor: 'white',
                            boxShadow: '0px 0px 24.8px 0px #00000026'
                        }}
                    >
                        <div className="card-body p-4">
                            {/* Logo */}
                            <div className="text-start mb-1">
                                <Image
                                    src="/assets/img/logo/innovate360.png"
                                    alt="INNOVATE 360°"
                                    width={180}
                                    height={60}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>

                            {/* Invoice Title */}
                            <h4 className="text-start mb-2" style={{ color: '#3D3D3D', fontSize: '24px', fontWeight: '600' }}>
                                Invoice
                            </h4>

                            {/* Invoice Number */}
                            <div className="mb-4 d-flex gap-2">
                                <label className="form-label" style={{ fontSize: '14px', color: '#3D3D3D', fontWeight: '500' }}>
                                    Invoice Number
                                </label>
                                <div style={{ fontSize: '15px', color: '#3D3D3D', fontWeight: '600' }}>
                                    UYWD9813GJHW
                                </div>
                            </div>

                            {/* Subscription Plan */}
                            <div className="mb-4">
                                <h6 className="fw-bold mb-3" style={{ color: '#3D3D3D', fontSize: '18px' }}>
                                    Subscription Plan
                                </h6>
                                <div className="d-flex justify-content-between align-items-center" style={{ position: 'relative' }}>
                                    <span style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                                        SARL-S
                                    </span>
                                    <div style={{
                                        flex: 1,
                                        height: '1px',
                                        background: 'repeating-linear-gradient(to right, #3D3D3D 0px, #3D3D3D 4px, transparent 4px, transparent 8px)',
                                        margin: '0 10px'
                                    }}></div>
                                    <span style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                                        €540
                                    </span>
                                </div>
                            </div>

                            {/* NIF Number */}
                            <div className="mb-4">
                                <h6 className="fw-bold mb-3" style={{ color: '#3D3D3D', fontSize: '18px' }}>
                                    NIF Number
                                </h6>
                                <div className="d-flex justify-content-between align-items-center" style={{ position: 'relative' }}>
                                    <span style={{ fontSize: '14px', color: '#3D3D3D', fontWeight: '400' }}>
                                        Tax Identification Number
                                    </span>
                                    <div style={{
                                        flex: 1,
                                        height: '1px',
                                        background: 'repeating-linear-gradient(to right, #3D3D3D 0px, #3D3D3D 4px, transparent 4px, transparent 8px)',
                                        margin: '0 10px'
                                    }}></div>
                                    <span style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                                        €50
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Apply Promo Code Section */}
                <div className="mb-4">
                    <div
                        className="card"
                        style={{
                            borderRadius: '16px',
                            border: 'none',
                            backgroundColor: 'white',
                            boxShadow: '0px 0px 24.8px 0px #00000026'
                        }}
                    >
                        <div className="card-body p-4">
                            <h5 className="fw-bold mb-4" style={{ color: '#3D3D3D', fontSize: '18px' }}>
                                Apply Promo Code
                            </h5>

                            <div className="d-flex gap-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Promo Code"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    style={{
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
                                <button
                                    type="button"
                                    className="btn"
                                    style={{
                                        height: '54px',
                                        borderRadius: '50px',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        backgroundColor: isPromoApplied ? '#28a745' : '#1D1B201F',
                                        color: isPromoApplied ? '#fff' : '#1D1B20',
                                        border: 'none',
                                        minWidth: '200px'
                                    }}
                                    onClick={handleApplyPromo}
                                    disabled={!promoCode.trim()}
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Total Amount Section */}
                <div className="mb-4">
                    <div
                        className="card"
                        style={{
                            borderRadius: '16px',
                            border: 'none',
                            backgroundColor: 'white',
                            boxShadow: '0px 0px 24.8px 0px #00000026'
                        }}
                    >
                        <div className="card-body p-4">
                            <h5 className="fw-bold mb-4" style={{ color: '#3D3D3D', fontSize: '18px' }}>
                                Total Amount
                            </h5>

                            {/* Total */}
                            <div className="d-flex justify-content-between align-items-center mb-3" style={{ position: 'relative' }}>
                                <span style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                                    Total
                                </span>
                                <div style={{
                                    flex: 1,
                                    height: '1px',
                                    background: 'repeating-linear-gradient(to right, #3D3D3D 0px, #3D3D3D 4px, transparent 4px, transparent 8px)',
                                    margin: '0 10px'
                                }}></div>
                                <span style={{ fontSize: '16px', color: '#28a745', fontWeight: '600' }}>
                                    €610
                                </span>
                            </div>

                            {/* Promo Discount */}
                            <div className="d-flex justify-content-between align-items-center" style={{ position: 'relative' }}>
                                <span style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                                    Promo Discount
                                </span>
                                <div style={{
                                    flex: 1,
                                    height: '1px',
                                    background: 'repeating-linear-gradient(to right, #3D3D3D 0px, #3D3D3D 4px, transparent 4px, transparent 8px)',
                                    margin: '0 10px'
                                }}></div>
                                <span style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                                    €560
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Button */}
                <div className="text-center">
                    <button
                        type="button"
                        className="btn"
                        style={{
                            height: '48px',
                            borderRadius: '50px',
                            fontSize: '16px',
                            fontWeight: '600',
                            backgroundColor: '#28a745',
                            color: '#fff',
                            border: 'none',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            minWidth: '100px'
                        }}
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
