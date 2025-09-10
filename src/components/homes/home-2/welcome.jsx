import Image from "next/image";

export default function Home() {
  return (
    <div className="container text-center my-5 d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '80vh' }}>
      <h2 className="text-success" style={{fontWeight: '600'}}>Welcome to Innovate360</h2>
      <p className="text-muted mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet.</p>
      <h6 className="mb-4" style={{fontWeight: '600' , fontSize: '16px',color : '#3D3D3D'}}>Choose the service you prefer to continue</h6>

      <div className="wc-screen row justify-content-center mt-4">
        {/* Card 1: NIF Number */}
        <div className="col-md-4 mb-4">
          <div className="hm-custom-card" style={{boxShadow: '0px 0px 40px 0px #0000001A'}}>
            <div className="card-body text-start">
              <div className="mb-3">
              <Image
                src="/assets/img/icon/list-icon.png" 
                alt="NIF Number Icon"
                width={50}
                height={50}
                style={{ objectFit: 'contain' }}
              />
              </div>
              <h5 className="card-title mb-2" style={{fontWeight : '400'}}>NIF Number</h5>
              <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                Your invoice is not paid. Kindly pay it to complete your registration.
              </p>
              <a href="/nif-number" className="btn btn-success"  style={{
              borderRadius: '25px',
              padding: '10px 24px',
              fontWeight: '500',
              width: '100%',
              background:'#007C36'
            }}>Buy Now</a>
            </div>
          </div>
        </div>

        {/* Card 2: New Company */}
        <div className="col-md-4 mb-4">
          <div className="hm-custom-card">
            <div className="card-body text-start">
              <div className="mb-3">
                <Image
                  src="/assets/img/icon/list-icon.png" 
                  alt="New Company Icon"
                  width={50}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h5 className="card-title mb-2" style={{fontWeight : '400'}}>New Company</h5>
              <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                Your invoice is not paid. Kindly pay it to complete your registration.
              </p>
              <a href="/company" className="btn btn-success"  style={{
              borderRadius: '25px',
              padding: '10px 24px',
              fontWeight: '500',
              width: '100%',
              background:'#007C36'
            }}>Register Now</a>
            </div>
          </div>
        </div>

        {/* Card 3: Bank Account */}
        <div className="col-md-4 mb-4">
          <div className="hm-custom-card">
            <div className="card-body text-start">
              <div className="mb-3">
                <Image
                  src="/assets/img/icon/list-icon.png" 
                  alt="Virtual Office Address Icon"
                  width={50}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h5 className="card-title mb-2" style={{fontWeight : '400'}}>Virtual Office Address</h5>
              <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                Your invoice is not paid. Kindly pay it to complete your registration.
              </p>
              <a href="/virtual-office-address" className="btn btn-success"  style={{
              borderRadius: '25px',
              padding: '10px 24px',
              fontWeight: '500',
              width: '100%',
              background:'#007C36'
            }}>Create Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
