"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Topbar from '@/src/common/topbar';

export default function VirtualOfficeSuccess() {
  const router = useRouter();

  const handleContinue = () => {
      // Set flag in localStorage to indicate coming from NIF success
    localStorage.setItem('fromVirtalService', 'true');
    // Navigate to payment page
    router.push('/virtual-office-address/payment');
  };

  return (
    <>
      <Topbar />
      <div className="container d-flex justify-content-center align-items-center bg-transparent" style={{ minHeight: '75vh' }}>
        <div className="text-center">
          {/* Success Image */}
          <Image
            src="/assets/img/company/completed.png"
            alt="Success"
            width={200}
            height={200}
            style={{ objectFit: "contain", marginBottom: "20px" }}
          />

          <h5 className="fw-semibold mb-2">
            Great! We have received your details
          </h5>
          <p className="text-muted mb-4">
            Your virtual office address application has been submitted successfully.
          </p>

          <button 
            className="btn text-white"
            onClick={handleContinue}
            style={{
              borderRadius: '25px',
              height: '42px',
              fontSize: '16px',
              fontWeight: '600',
              minWidth: '350px',
              width: '400px',
              cursor: 'pointer',
              backgroundColor: '#007C36',
              border: 'none'
            }}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </>
  );
}
