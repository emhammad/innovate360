import { useRouter } from "next/router";
import WalletImage from "@assets/img/icon/payment-success.png";
import Image from "next/image";

export function PaymentSuccess({ onDone }) {
    const router = useRouter();

    const handleDone = () => {
        // Clear localStorage data
        localStorage.removeItem('virtualOfficeInvoiceStep');
        localStorage.removeItem('virtualOfficePaymentMethod');
        localStorage.removeItem('virtualOfficeFormData');

        // Navigate to main dashboard
        router.push('/main-dashboard');
    };

    return (
        <div className="text-center py-5 w-100 d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '90vh', backgroundColor: '#f8f9fa' }}>
            <Image src={WalletImage} alt="Success" style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="mb-4" />
            <h5 style={{ color: '#3D3D3D', fontSize: '24px', fontWeight: '600' }}>Payment Successful</h5>
            <p className="mx-auto mt-2" style={{ maxWidth: '600px', fontSize: '16px', color: '#3D3D3D' }}>
                Payment receipt has been submitted. It usually takes 24 hours to review. In case of a weekend, we'll review on the next working day.
            </p>
            <button onClick={handleDone} className="btn btn-success rounded-pill px-5 mt-3" style={{
                height: '42px',
                fontSize: '16px',
                fontWeight: '600',
                minWidth: '350px',
                cursor: 'pointer',
                backgroundColor: '#007C36',
                color: '#fff',
                border: 'none'
            }}>
                Done
            </button>
        </div>
    );
}