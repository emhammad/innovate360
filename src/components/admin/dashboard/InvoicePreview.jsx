"use client";
import { useState } from "react";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function InvoicePreview({ onClose }) {
    const handleBack = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{
            minHeight: "100vh",
            padding: "20px"
        }}>
            <div className="bg-white rounded-3" style={{
                width: "100%",
                padding: "30px"
            }}>
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center">
                        <button
                            onClick={handleBack}
                            className="btn btn-link p-0 me-3"
                            style={{ color: "#6c757d", textDecoration: "none" }}
                        >
                            <FaArrowLeft size={20} />
                        </button>
                        <h6 className="mb-0 fw-semibold" style={{ color: "#6c757d" }}>Preview</h6>
                    </div>
                </div>

                {/* Invoice Title and Number */}
                <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="fw-bold mb-2" style={{ color: "#3D3D3D", fontSize: "32px" }}>Invoice</h2>
                            <p className="mb-1" style={{ color: "#6c757d", fontSize: "14px" }}>Invoice Number</p>
                            <p className="fw-semibold mb-0" style={{ color: "#3D3D3D", fontSize: "16px" }}>UYWD9813GJHW</p>
                        </div>
                        <div className="text-end">
                            <Image
                                src="/assets/img/logo/innovate360.png"
                                alt="Innovate360 Logo"
                                width={180}
                                height={60}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </div>
                </div>

                {/* Billing Information */}
                <div className="rounded-4 px-3" style={{ border: "1px solid #3D3D3D", marginBottom: "40px" }}>
                    <div className="row" style={{ borderBottom: "1px solid #3D3D3D" }}>
                        <div className="col-md-6  p-4" style={{ borderRight: "1px solid #3D3D3D" }}>
                            <h6 className="fw-semibold mb-3" style={{ color: "#3D3D3D" }}>Billed to</h6>
                            <p className="fw-semibold mb-1" style={{ color: "#3D3D3D" }}>John Doe</p>
                            <p className="mb-2" style={{ color: "#6c757d" }}>john123@gmail.com</p>

                        </div>
                        <div className="col-md-6  p-4 text-md-end" style={{ borderLeft: "1px solid #3D3D3D" }}>
                            <h6 className="fw-semibold mb-3" style={{ color: "#3D3D3D" }}>Due Date</h6>
                            <p className="fw-semibold mb-0" style={{ color: "#3D3D3D", fontSize: "18px" }}>
                                12 September, 2025
                            </p>
                        </div>
                    </div>
                    <div className="p-2 pb-4">
                        <h6 className="fw-semibold mb-2 mt-3" style={{ color: "#3D3D3D" }}>Address</h6>
                        <p className="mb-0" style={{ color: "#6c757d", fontSize: "14px" }}>
                            123 Business Avenue, Suite 456,<br />
                            Metropolis, NY 10001, USA
                        </p>
                    </div>
                </div>

                {/* Subscription Plan */}
                <div className="mb-4 ">
                    <h6 className="fw-semibold mb-3" style={{ color: "#3D3D3D" }}>Subscription Plan</h6>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <span style={{ color: "#3D3D3D" }}>SARL-S</span>
                        <div className="d-flex align-items-center" style={{ flex: 1, margin: "0 20px" }}>
                            <div style={{
                                borderTop: "1px dashed #3D3D3D",
                                flex: 1,
                                height: "1px"
                            }}></div>
                        </div>
                        <span className="fw-semibold" style={{ color: "#3D3D3D" }}>€540</span>
                    </div>
                </div>

                {/* NIF Number */}
                <div className="mb-4">
                    <h6 className="fw-semibold mb-3" style={{ color: "#3D3D3D" }}>NIF Number</h6>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <span style={{ color: "#6c757d" }}>Tax Identification Number</span>
                        <div className="d-flex align-items-center" style={{ flex: 1, margin: "0 20px" }}>
                            <div style={{
                                borderTop: "1px dashed #3D3D3D",
                                flex: 1,
                                height: "1px"
                            }}></div>
                        </div>
                        <span className="fw-semibold" style={{ color: "#3D3D3D" }}>€50</span>
                    </div>
                </div>

                {/* Paid Stamp */}
                <div className="text-center my-5">
                    <Image
                        src="/assets/img/icon/stemp.png"
                        alt="Paid Stamp"
                        width={120}
                        height={120}
                        style={{ objectFit: "contain" }}
                    />
                </div>

                {/* Total Amount */}
                <div className="pt-4">
                    <h6 className="fw-semibold mb-3" style={{ color: "#3D3D3D" }}>Total Amount</h6>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <span className="fw-semibold" style={{ color: "#3D3D3D", fontSize: "18px" }}>Total</span>
                        <div className="d-flex align-items-center" style={{ flex: 1, margin: "0 20px" }}>
                            <div style={{
                                borderTop: "1px dashed #3D3D3D",
                                flex: 1,
                                height: "1px"
                            }}></div>
                        </div>
                        <span className="fw-bold" style={{ color: "#3D3D3D", fontSize: "24px" }}>€610</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
