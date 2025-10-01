'use client'; // If using Next.js 13+ app directory

import { useState, useEffect } from 'react';;
import InvoicePreview from '../admin/dashboard/InvoicePreview';
import { PaymentSuccess } from './invoice/PaymentSuccess';
import { PaymentHistory } from './invoice/PaymentHistory';
import { UploadReceipt } from './invoice/UploadRecipt';
import { BankDetails } from './invoice/BankDetail';
import { CardPayment } from './invoice/CardPayment';
import { PaymentMethodSelector } from './invoice/PaymentMethod';
import { InvoiceSummary } from './invoice/InvoiceSummary';


export default function InvoiceFlow() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(null); // 'card' or 'bank'
  const [showInvoicePreview, setShowInvoicePreview] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Handle hydration and localStorage initialization
  useEffect(() => {
    setIsHydrated(true);

    // Initialize from localStorage after hydration
    if (typeof window !== 'undefined') {
      const savedStep = localStorage.getItem('virtualOfficeInvoiceStep');
      const savedMethod = localStorage.getItem('virtualOfficePaymentMethod');

      if (savedStep) {
        setStep(parseInt(savedStep, 10));
      }

      if (savedMethod) {
        setPaymentMethod(savedMethod);
      }
    }
  }, []);

  // Persist step changes to localStorage
  useEffect(() => {
    if (isHydrated && typeof window !== 'undefined') {
      localStorage.setItem('virtualOfficeInvoiceStep', step.toString());
    }
  }, [step, isHydrated]);

  // Persist paymentMethod changes to localStorage
  useEffect(() => {
    if (isHydrated && typeof window !== 'undefined') {
      if (paymentMethod) {
        localStorage.setItem('virtualOfficePaymentMethod', paymentMethod);
      } else {
        localStorage.removeItem('virtualOfficePaymentMethod');
      }
    }
  }, [paymentMethod, isHydrated]);

  const handleViewInvoice = () => {
    setShowInvoicePreview(true);
  };

  const handleCloseInvoice = () => {
    setShowInvoicePreview(false);
  };

  // Show loading state until hydrated
  if (!isHydrated) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {showInvoicePreview ? (
        <InvoicePreview onClose={handleCloseInvoice} />
      ) : (
        <div>
          {step === 1 && <InvoiceSummary onNext={() => setStep(2)} onBack={() => window.history.back()} />}
          {step === 2 && (
            <PaymentMethodSelector
              selected={paymentMethod}
              onSelect={setPaymentMethod}
              onNext={() => {
                if (paymentMethod) {
                  // redirect or move to next step based on method
                  if (paymentMethod === 'card') {
                    setStep(3)
                  } else {
                    setStep(4)
                  }
                }
              }}
              onBack={() => setStep(1)}
            />
          )}
          {step === 3 && <CardPayment onBack={() => setStep(2)} onSuccess={() => setStep(6)} />}
          {step === 4 && <BankDetails onBack={() => setStep(2)} onNext={() => setStep(5)} />}
          {step === 5 && <UploadReceipt onBack={() => setStep(4)} onNext={() => setStep(6)} />}
          {step === 6 && <PaymentSuccess onDone={() => setStep(6)} />}
          {step === 7 && <PaymentHistory />}

        </div>
      )}
    </>
  );
}
