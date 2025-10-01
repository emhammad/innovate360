import Image from "next/image";
import { useState } from "react";
import logo_img from "@assets/img/logo/innovate360.png";

export function BankDetails({ onBack, onNext }) {
    const [promoCode, setPromoCode] = useState("");
    const [isPromoApplied, setIsPromoApplied] = useState(false);

    const handleApplyPromo = () => {
        if (promoCode.trim()) {
            setIsPromoApplied(true);
            console.log("Promo code applied:", promoCode);
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh', backgroundColor: '#f8f9fa' }}>
            <div className="container" style={{ maxWidth: '600px', marginTop: '80px', marginBottom: '50px' }}>

                {/* Bank Details Section */}
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
                                    src={logo_img}
                                    alt="INNOVATE 360°"
                                    width={180}
                                    height={60}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>

                            {/* Title */}
                            <h4 className="text-start mb-2" style={{ color: '#3D3D3D', fontSize: '24px', fontWeight: '600' }}>
                                Bank Details
                            </h4>

                            {/* Subtitle */}
                            <p className="text-start mb-4" style={{ fontSize: '14px', color: '#3D3D3D' }}>
                                Please pay your invoice to initiate your company registration process.
                            </p>

                            {/* Bank Information */}
                            <div className="mb-4">
                                <div className="mb-3 p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                                    <label className="form-label mb-1" style={{ fontSize: '12px', color: '#666', fontWeight: '500' }}>
                                        Account Holder
                                    </label>
                                    <div style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                                        Innovate360 LDA
                                    </div>
                                </div>

                                <div className="mb-3 p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                                    <label className="form-label mb-1" style={{ fontSize: '12px', color: '#666', fontWeight: '500' }}>
                                        IBAN
                                    </label>
                                    <div style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                                        PT50001000006191052000153
                                    </div>
                                </div>

                                <div className="mb-3 p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                                    <label className="form-label mb-1" style={{ fontSize: '12px', color: '#666', fontWeight: '500' }}>
                                        BIC/SWIFT
                                    </label>
                                    <div style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                                        BBPIPTPL
                                    </div>
                                </div>

                                <div className="mb-3 p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                                    <label className="form-label mb-1" style={{ fontSize: '12px', color: '#666', fontWeight: '500' }}>
                                        Bank Name
                                    </label>
                                    <div style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                                        Banco BPI
                                    </div>
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

                {/* Download Invoice Button */}
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
                            minWidth: '200px'
                        }}
                        onClick={onNext}
                    >
                        Download Invoice
                    </button>
                </div>
            </div>
        </div>
    );
}