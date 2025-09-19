import Image from "next/image";
import SuccessImage from "@assets/img/icon/payment-success.png";
import { useRouter } from 'next/router';
import Topbar from '@/src/common/topbar';

export default function NIFSuccessStep() {
  const router = useRouter();

  const handleContinue = () => {
    // Navigate to dashboard after successful NIF submission
    router.push('/nif-number/dashboard');
  };

  return (
    <>
      <Topbar />
      <div className="py-5 d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '90vh', backgroundColor: '#fcfcfc' }}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="text-center">
              <Image
                src="/assets/img/icon/docs-success.png"
                alt="Success"
                width={200}
                height={200}
              />
              <h5 className="fw-semibold mb-2" style={{ color: '#3D3D3D' }}>
                Great! We have received your details
              </h5>

              <p className="text-muted mb-4" style={{ color: '#3D3D3D', width: '500px' }}>
                And we have created an account for you so that you can track your progress.
              </p>

              <button
                style={{
                  width: '100%',
                  height: '42px',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontWeight: '600',
                  backgroundColor: '#007C36',
                  color: '#fff',
                  border: 'none',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  maxWidth: '400px',
                  marginTop: "20px"
                }}
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
