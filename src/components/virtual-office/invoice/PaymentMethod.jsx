export function PaymentMethodSelector({ selected, onSelect, onNext, onBack }) {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
            <div className='my-4'>
                {/* Title */}
                <h4 className="fw-bold mb-3 text-center" style={{ color: '#3D3D3D', fontSize: '1.5rem' }}>
                    Payment Method
                </h4>

                {/* Subtitle */}
                <p className="mb-4 text-center mx-auto" style={{ fontSize: '16px', color: '#3D3D3D', width: '500px' }}>
                    Please select a payment method to initiate your company registration process.
                </p>

                {/* Payment Card */}
                <div
                    className="card mx-auto my-3"
                    style={{
                        width: '100%',
                        maxWidth: '600px',
                        minHeight: '400px',
                        borderRadius: '24px',
                        border: 'none',
                        backgroundColor: 'white',
                        boxShadow: '0px 0px 8.4px 0px #00000026',
                    }}
                >
                    <div className="card-body p-4 d-flex flex-column justify-content-between">
                        <div>
                            {/* Payment System Header */}
                            <h5 className="fw-bold mb-3 text-left" style={{ color: '#28a745', fontSize: '1.2rem' }}>
                                Payment System
                            </h5>

                            {/* Description */}
                            <p className=" mb-1 text-left" style={{ fontSize: '14px', color: '#3D3D3D' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet.
                            </p>
                            <p className="text-left" style={{ fontSize: '14px', fontWeight: '600', color: '#3D3D3D' }}>
                                Choose the method you prefer to continue.
                            </p>

                            <hr className="mb-4 " />

                            {/* Payment Options */}
                            <div className="d-flex flex-column gap-3">
                                {/* Pay via Bank */}
                                {/* <label
                                        className={`border rounded-pill d-flex align-items-center ${selected === "bank"
                                            ? "border-success"
                                            : "border-secondary"
                                            }`}
                                        style={{
                                            cursor: "pointer",
                                            padding: '10px 20px',
                                            userSelect: "none",
                                            borderWidth: selected === "bank" ? '2px' : '1px',
                                            borderColor: selected === "bank" ? '#28a745' : '#e0e0e0',
                                            backgroundColor: selected === "bank" ? '#f8fff8' : 'transparent'
                                        }}
                                        >
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="bank"
                                            checked={selected === "bank"}
                                            onChange={() => onSelect("bank")}
                                            className="form-check-input me-3"
                                            style={{
                                            cursor: "pointer",
                                            width: '20px',
                                            height: '20px',
                                            border: selected === "bank" ? '2px solid #28a745' : '2px solid #e0e0e0',
                                            backgroundColor: selected === "bank" ? '#28a745' : 'white'
                                            }}
                                        />
                                        <span style={{
                                            color: '#3D3D3D',
                                            fontSize: '16px',
                                            fontWeight: '500'
                                        }}>
                                            Pay via Bank
                                        </span>
                                        </label> */}
                                {/* Pay via Card */}
                                <label
                                    className={`border rounded-pill d-flex align-items-center ${selected === "card"
                                        ? "border-success"
                                        : "border-secondary"
                                        }`}
                                    style={{
                                        cursor: "pointer",
                                        padding: '10px 20px',
                                        userSelect: "none",
                                        borderWidth: selected === "card" ? '2px' : '1px',
                                        borderColor: selected === "card" ? '#28a745' : '#e0e0e0',
                                        backgroundColor: selected === "card" ? '#f8fff8' : 'transparent'
                                    }}
                                >
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="card"
                                        checked={selected === "card"}
                                        onChange={() => onSelect("card")}
                                        className="form-check-input me-3"
                                        style={{
                                            cursor: "pointer",
                                            width: '20px',
                                            height: '20px',
                                            border: selected === "card" ? '2px solid #28a745' : '2px solid #e0e0e0',
                                            backgroundColor: selected === "card" ? '#28a745' : 'white'
                                        }}
                                    />
                                    <span style={{
                                        color: '#3D3D3D',
                                        fontSize: '16px',
                                        fontWeight: '500'
                                    }}>
                                        Pay via Card
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="d-flex justify-content-between mt-4">
                            <button
                                type="button"
                                className="btn"
                                onClick={onBack}
                                style={{
                                    backgroundColor: 'transparent',
                                    color: '#007C36',
                                    border: '2px solid #007C36',
                                    borderRadius: '8px',
                                    padding: '10px 24px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    minWidth: '80px'
                                }}
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                className="btn"
                                style={{
                                    backgroundColor: '#28a745',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '10px 24px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    minWidth: '80px'
                                }}
                                onClick={onNext}
                                disabled={!selected}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}