"use client";
import { useState } from "react";
import Image from "next/image";

// Tick icon path
const tickIconPath = "/assets/img/icon/Tick.png";


export default function ChooseCompanyType({ onNext, onBack }) {
    const [selectedPackage, setSelectedPackage] = useState("");

    const packages = [
        {
            id: "standard",
            title: "Standard Package",
            subtitle: "(Company Registration in 4-5 Weeks)",
            description: "A simple, cost-effective option with standard processing.",
            highlight: "Ideal for those who want a budget-friendly setup without urgency.",
            features: [
                "Company Name Search",
                "Custom Approval (normal processing)",
                "Limited Business Activities (Up to 2)",
                "Standard Document Preparation",
                "Regular Registration with Authorities",
                "Activity Initiation in AT (Tax Office Registration)",
                "100% Digital Process - No Travel Needed"
            ],
            price: "€1,950",
            vat: "(incl. VAT)"
        },
        {
            id: "priority",
            title: "Priority Package",
            subtitle: "(Company Registration in Just 10 - 15 Days)",
            description: "Our fastest service with exclusive benefits for serious entrepreneurs.",
            highlight: "Ideal for entrepreneurs, startups, and investors who need their company ASAP with premium service.",
            features: [
                "Company Name Search",
                "Custom Approval (normal processing)",
                "Multiple Business Activities Included",
                "Expedited Document Preparation",
                "Accelerated Registration with Authorities",
                "Activity Initiation in AT (Tax Office Registration)",
                "Dedicated Account Manager for Assistance",
                "Priority Email Support (Faster Responses)",
                "Digital Signature Assistance",
                "100% Digital Process - No Travel Needed",
                "Bonus: 1st Month Accounting - FREE!"
            ],
            price: "€2,600",
            vat: "(incl. VAT)"
        }
    ];

    const handlePackageSelect = (packageId) => {
        setSelectedPackage(packageId);
    };

    const handleRegister = () => {
        // Navigate to payment method page
        window.location.href = '/company/payment-method';
    };

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', marginTop: '50px', marginBottom: '50px' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                {/* Header Section */}
                <div className="text-center mb-5">
                    <h2 className="mb-3" style={{ color: '#3D3D3D', fontSize: '24px', fontWeight: '600' }}>
                        Choose a company type
                    </h2>
                    <p className="mx-auto mb-0" style={{ maxWidth: '600px', fontSize: '16px', color: '#3D3D3D' }}>
                        Select the company structure that fits your needs.
                    </p>
                    <p className="mx-auto" style={{ maxWidth: '600px', fontSize: '16px', color: '#3D3D3D' }}>
                        Choose between a standard timeline or a faster priority option to get started.
                    </p>
                </div>

                {/* Package Cards */}
                <div className="row d-flex justify-content-center g-4 mt-4">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className="col-lg-5">
                            <div
                                className="card position-relative"
                                style={{
                                    border: selectedPackage === pkg.id ? '1px solid #28a745' : '1px solid  #79747E',
                                    borderRadius: '12px',
                                    backgroundColor: 'white',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onClick={() => handlePackageSelect(pkg.id)}
                            >

                                <div className="card-body p-4">
                                    {/* Package Title */}
                                    <h4 className="mb-1" style={{ color: '#3D3D3D', fontSize: '1.5rem', fontWeight: '600' }}>
                                        {pkg.title}
                                    </h4>

                                    {/* Registration Time */}
                                    <p className="mb-3" style={{ fontSize: '14px', color: '#3D3D3D' }}>
                                        {pkg.subtitle}
                                    </p>

                                    {/* Description */}
                                    <p className="mb-3" style={{ color: '#3D3D3D', fontSize: '14px' }}>
                                        {pkg.description}
                                    </p>

                                    {/* Highlight Box */}
                                    <div
                                        className="mb-4 p-3"
                                        style={{
                                            backgroundColor: '#e8f5e8',
                                            borderRadius: '8px',
                                            border: '1px solid #c8e6c9',
                                            height: '70px'
                                        }}
                                    >
                                        <p className="mb-0" style={{ color: '#3D3D3D', fontSize: '14px' }}>
                                            {pkg.highlight}
                                        </p>
                                    </div>

                                    {/* Features List */}
                                    <div className="mb-4">
                                        {pkg.features.map((feature, index) => (
                                            <div key={index} className="d-flex align-items-center gap-1 mb-1">
                                                <Image
                                                    src={tickIconPath}
                                                    alt="Completed"
                                                    width={12}
                                                    height={12}
                                                    style={{
                                                        filter: 'brightness(1) invert(1)'
                                                    }}
                                                />
                                                <span style={{ color: '#3D3D3D', fontSize: '14px' }}>
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Price Section */}
                                    <div
                                        className="text-left p-3"
                                        style={{
                                            backgroundColor: '#e8f5e8',
                                            borderRadius: '8px',
                                            border: '1px solid #c8e6c9'
                                        }}
                                    >
                                        <div className="fw-bold" style={{ color: '#3D3D3D', fontSize: '2rem' }}>
                                            {pkg.price}
                                        </div>
                                        <div className="text-muted" style={{ fontSize: '14px' }}>
                                            {pkg.vat}
                                        </div>
                                        <button
                                            className="btn w-100 mt-2"
                                            style={{
                                                backgroundColor: '#28a745',
                                                color: '#fff',
                                                border: 'none',
                                                borderRadius: '25px',
                                                fontWeight: '600',
                                                padding: '10px 12px'
                                            }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleRegister();
                                            }}
                                        >
                                            Register {pkg.title}
                                        </button>
                                    </div>

                                    {/* Register Button */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
