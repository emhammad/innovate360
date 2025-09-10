"use client";
import Image from "next/image";

export default function PaymentSuccess({ onNext, onBack }) {
  const handleDone = () => {
    if (onNext) {
      onNext("payment-successful");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <div className="text-center" style={{ padding: '40px' }}>
        
        {/* Payment Success Icon */}
        <div className="mb-4">
          <Image
            src="/assets/img/icon/payment-success.png"
            alt="Payment Successful"
            width={120}
            height={120}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Title */}
        <h4 className="mb-4" style={{ color: '#3D3D3D', fontSize: '24px' }}>
          Payment Successful
        </h4>

        {/* Description */}
        <p className="mb-4" style={{ fontSize: '16px', color: '#3D3D3D', lineHeight: '1.5', maxWidth: '550px' }}>
          Payment receipt has been submitted, and it will take normally 24 hours to review and in case of weekend we will review on very next working day.
        </p>

        {/* Done Button */}
        <div className="text-center">
          <button
            type="button"
            className="btn"
            style={{
              height: '46px',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: '600',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              minWidth: '200px',
              width: '80%'
            }}
            onClick={handleDone}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
