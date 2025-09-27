import Image from "next/image";
import SuccessImage from "@assets/img/company/completed.png";
import Topbar from "@/src/common/topbar";
import { useRouter } from "next/router";

export default function SuccessScreen() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/company/dashboard');
  }
return (
  <>
  <Topbar />
  <div className="container d-flex justify-content-center align-items-center bg-white" style={{ minHeight: '90vh' }}>
    <div className="text-center">
      {/* Placeholder image - replace src with your actual image path */}
      <Image
        src={SuccessImage}
        alt="Success"
        style={{ marginBottom: "20px" }}
      />

      <h5 className="fw-semibold mb-2" style={{ color: '#3D3D3D' }}>
        Great! We have received your company’s name
      </h5>

      <p className="text-muted mb-2" style={{ color: '#3D3D3D' }}>
        And we have created an account for you so that you can track your progress.
      </p>

      <p className="mb-4">
        Next step: <strong>Choose nature of your business</strong>
      </p>

      <button type="submit"
        className="btn btn-success mt-4"
        style={{
          backgroundColor: '#007C36',
          width: '80%',
          borderRadius: '25px',
          height: '42px',
          backgroundColor: '#007C36',
          fontSize: '16px',
          fontWeight: '600'
        }} onClick={handleContinue}>
        Continue
      </button>
    </div>
  </div>
  </>
);
}
