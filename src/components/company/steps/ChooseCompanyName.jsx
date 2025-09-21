import { useState, useEffect } from 'react';

export default function ChooseCompanyName({ onNext }) {
  const [names, setNames] = useState(['', '', '', '', '']);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem('isAuthenticated');
    const user = localStorage.getItem('currentUser');
    
    if (authStatus === 'true' && user) {
      setIsAuthenticated(true);
    }

    // Load saved company names from localStorage
    const savedNames = localStorage.getItem('companyNames');
    if (savedNames) {
      try {
        const parsedNames = JSON.parse(savedNames);
        // Ensure we have at least 5 empty strings if saved data is shorter
        const paddedNames = [...parsedNames];
        while (paddedNames.length < 5) {
          paddedNames.push('');
        }
        setNames(paddedNames);
      } catch (error) {
        console.error('Error parsing saved company names:', error);
      }
    }
  }, []);

  const updateName = (index, value) => {
    const updated = [...names];
    updated[index] = value;
    setNames(updated);
    
    // Save to localStorage whenever names change
    localStorage.setItem('companyNames', JSON.stringify(updated));
  };

  const addMore = () => {
    const updated = [...names, ''];
    setNames(updated);
    // Save to localStorage when adding more names
    localStorage.setItem('companyNames', JSON.stringify(updated));
  };

  // Check if all 5 fields are filled
  const isAllFieldsFilled = names.slice(0, 5).every(name => name.trim() !== '');

  const handleNext = () => {
    if (isAuthenticated && onNext) {
      // If user is authenticated, use stepper navigation
      onNext();
    } else {
      // If user is not authenticated, redirect to signup
      window.location.href = '/company/signup';
    }
  };

  return (
    <div className='w-100'>
      {/* Main Title */}
      <h2 className="fw-bold mb-1" style={{ fontSize: '1.8rem', fontWeight: '600', color: '#007C36' }}>
        Your path to incorporation
      </h2>

      {/* Description */}
      <p className="text-muted mb-4" style={{ fontSize: '14px', lineHeight: '1.5' }}>
        Here are the main steps to open a company in Portugal.
        <br />
        <strong className='mt-1' style={{ fontWeight: '600', color: '#3D3D3D' }}>Entire process takes 5 days.</strong>
      </p>

      {/* Divider Line */}
      <hr className="my-3" style={{ borderBottom: '1px solid #3D3D3D40' }} />

      {/* Form Section */}
      <div className="text-center d-flex flex-column justify-content-center" style={{ width: '100%', maxWidth: '580px', margin: '30px auto 60px auto', minHeight: '75vh' }}>
        <h4 className="fw-bold mb-1" style={{ fontSize: '1.5rem', color: '#333' }}>
          Select your company name
        </h4>

        <p className="text-muted mb-4" style={{ fontSize: '14px', lineHeight: '1.4' }}>
          We need to verify the availability of your business name. Provide at least 5 names since some names may already be in use.
        </p>

        {/* Input Fields */}
        <div className="d-flex flex-column align-items-center">
          {names.map((name, index) => (
            <div className="mb-2" key={index} style={{ width: '70%' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Your company name"
                value={name}
                onChange={(e) => updateName(index, e.target.value)}
                style={{
                  width: '100%',
                  height: '48px',
                  borderRadius: '50px',
                  paddingTop: '15px',
                  paddingRight: '20px',
                  paddingBottom: '15px',
                  paddingLeft: '20px',
                  opacity: 1,
                  borderWidth: '1px',
                  border: '1px solid #79747E',
                  background: 'transparent',
                  fontSize: '14px'
                }}
              />
            </div>
          ))}
        </div>

        {/* Add More Button */}
        <div className="mb-3 d-flex justify-content-start mx-auto ps-4" style={{ width: '80%' }}>
          <button
            className="btn btn-link text-success p-0"
            onClick={addMore}
            style={{
              fontSize: '18px',
              fontWeight: '500',
              textDecoration: 'none'
            }}
          >
            + Add name option
          </button>
        </div>

        {/* Next Button */}
        <div className="d-flex justify-content-end mx-auto mt-2" style={{ width: '70%' }}>
          <button
            className="btn "
            style={{
              width: '100%',
              borderRadius: '25px',
              height: '48px',
              fontSize: '16px',
              fontWeight: '600',
              paddingLeft: '32px',
              paddingRight: '32px',
              backgroundColor: isAllFieldsFilled ? '#28a745' : '#1D1B201F',
              border: 'none',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              color: isAllFieldsFilled ? 'white' : '#1D1B20',
              marginBottom: '80px'
            }}
            onClick={(e) => {
              e.preventDefault();
              handleNext();
            }}
            disabled={!isAllFieldsFilled}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
