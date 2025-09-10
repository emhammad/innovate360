"use client";
import { useState } from "react";

export default function BankDetails({ onNext, onBack }) {
    const [isInvoiceDownloaded, setIsInvoiceDownloaded] = useState(false);

    const handleDownloadInvoice = () => {
        // Navigate to invoice page
        window.location.href = '/company/invoice';
    };

    const handleNext = () => {
        if (onNext) {
            onNext("bank-payment");
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            <div className="container" style={{ maxWidth: '600px', marginTop: '100px', marginBottom: '100px' }}>
                {/* Bank Details Section */}
                <div className="mb-4">
                    <h4 className=" text-center mb-2" style={{ color: '#3D3D3D', fontSize: '24px' }}>
                        Bank Details
                    </h4>
                    <p className="text-center" style={{ fontSize: '16px', color: '#3D3D3D', marginBottom: '40px' }}>
                        Please pay your invoice to initiate your company registration process.
                    </p>

                    {/* Bank Details Card */}
                    <div
                        className="card"
                        style={{
                            borderRadius: '24px',
                            border: 'none',
                            backgroundColor: 'white',
                            boxShadow: '0px 0px 24.8px 0px #00000026',
                        }}
                    >
                        <div className="card-body p-4">
                            <h5 className="fw-bold mb-4" style={{ color: '#3D3D3D', fontSize: '18px' }}>
                                Pay via Bank
                            </h5>

                            {/* Bank Information Fields */}
                            <div className="mb-4">
                                {/* Account Name */}
                                <div className="mb-3">
                                    <label className="form-label" style={{ fontSize: '14px', color: '#3D3D3D', fontWeight: '500' }}>
                                        Account Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Innovate360 LDA"
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
                                            outline: 'none',
                                            backgroundColor: '#f8f9fa'
                                        }}
                                    />
                                </div>

                                {/* IBAN */}
                                <div className="mb-3">
                                    <label className="form-label" style={{ fontSize: '14px', color: '#3D3D3D', fontWeight: '500' }}>
                                        IBAN
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="PT50001000006191052000153"
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
                                            outline: 'none',
                                            backgroundColor: '#f8f9fa'
                                        }}
                                    />
                                </div>

                                {/* SWIFT/BIC */}
                                <div className="mb-3">
                                    <label className="form-label" style={{ fontSize: '14px', color: '#3D3D3D', fontWeight: '500' }}>
                                        SWIFT/BIC
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="BBPIPTPL"
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
                                            outline: 'none',
                                            backgroundColor: '#f8f9fa'
                                        }}
                                    />
                                </div>

                                {/* Bank Name */}
                                <div className="mb-4">
                                    <label className="form-label" style={{ fontSize: '14px', color: '#3D3D3D', fontWeight: '500' }}>
                                        Bank Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Banco BPI"
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
                                            outline: 'none',
                                            backgroundColor: '#f8f9fa'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Download Invoice Button */}
                            <button
                                type="button"
                                className="btn w-100 mb-3"
                                style={{
                                    height: '48px',
                                    borderRadius: '50px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    backgroundColor: '#28a745',
                                    color: '#fff',
                                    border: 'none',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}
                                onClick={handleDownloadInvoice}
                            >
                                {isInvoiceDownloaded ? 'Invoice Downloaded' : 'Download Invoice'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Total Amount Section */}
                <div className="mb-4">

                    {/* Total Amount Card */}
                    <div
                        className="card"
                        style={{
                            borderRadius: '24px',
                            border: 'none',
                            backgroundColor: 'white',
                            boxShadow: '0px 0px 24.8px 0px #00000026'
                        }}
                    >
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-3" style={{ color: '#3D3D3D', fontSize: '18px' }}>
                                Total Amount
                            </h4>
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
                            <div className="d-flex justify-content-between align-items-center mb-3" style={{ position: 'relative' }}>
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

                            {/* Total After Discount */}
                            <div className="d-flex justify-content-between align-items-center" style={{ position: 'relative' }}>
                                <span style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '500' }}>
                                    Total After Discount
                                </span>
                                <div style={{ 
                                    flex: 1, 
                                    height: '1px', 
                                    background: 'repeating-linear-gradient(to right, #3D3D3D 0px, #3D3D3D 4px, transparent 4px, transparent 8px)',
                                    margin: '0 10px'
                                }}></div>
                                <span style={{ fontSize: '16px', color: '#3D3D3D', fontWeight: '600' }}>
                                    €560
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        type="button"
                        className="btn"
                        onClick={handleNext}
                        style={{
                            height: '48px',
                            width: '100px',
                            borderRadius: '50px',
                            fontSize: '16px',
                            fontWeight: '600',
                            backgroundColor: '#28a745',
                            color: '#fff',
                            border: 'none',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
