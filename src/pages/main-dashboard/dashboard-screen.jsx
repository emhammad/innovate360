import { FaArrowUp, FaArrowDown, FaSearch } from "react-icons/fa";
import { useState } from "react";
import AnalyticsIcon from "@assets/img/icon/chart.png";
import Image from "next/image";
import SearchIcon from "@assets/img/icon/search-icon.svg";
import { useRouter } from "next/router";

const data = [
    // NIF Service Cases
    {
        caseNumber: "NIF-001",
        caseName: "John Doe",
        email: "john.doe@nif.com",
        approvalRequests: "NIF Application, Tax Registration, Business License..",
        status: { text: "Pending", color: "text-danger", icon: <FaArrowDown size={12} /> },
        assignedTo: "Matthew Anderson",
        service: "nif"
    },


    // Company Service Cases
    {
        caseNumber: "COMP-001",
        caseName: "Emily Davis",
        email: "emily.davis@company.com",
        approvalRequests: "Company Registration, Business Name, Articles of Incorporation..",
        status: { text: "Name Applied", color: "text-danger", icon: <FaArrowDown size={12} /> },
        assignedTo: "Brooklyn Simmons",
        service: "company"
    },


    // Virtual Office Service Cases

    {
        caseNumber: "VO-003",
        caseName: "James Wilson",
        email: "james.wilson@virtual.com",
        approvalRequests: "Virtual Office Setup, Mail Forwarding, Business Address..",
        status: { text: "Case Closed", color: "text-success", icon: <FaArrowUp size={12} /> },
        assignedTo: "Alex Thompson",
        service: "virtual-office"
    },
];

export default function VirtualOfficeMainDashboard() {
    const [activeTab, setActiveTab] = useState(2); // Set Analytics as default

    const handleNavClick = (index) => {
        // Only allow Analytics tab (index 2)
        if (index === 2) {
            setActiveTab(index);
        }
    };

    return (

        <div className="container-fluid">
            <Content />
        </div>
    )
}

const Content = () => {
    const router = useRouter();
    const [step, setSetp] = useState('caseList');
    const [Id, setId] = useState(0);
    const [search, setSearch] = useState("");
    const [showCreateModal, setShowCreateModal] = useState(false);

    const handleViewClick = (id) => {
        const selectedCase = data[id];

        if (selectedCase.service === "nif") {
            // For NIF service, set flag and show NIF analytics as submenu
            localStorage.setItem('fromNifSuccess', 'true');
            window.location.href = '/main-dashboard';
        } else if (selectedCase.service === "company") {
            // For Company service, redirect to company dashboard
            window.location.href = '/company/dashboard';
        } else if (selectedCase.service === "virtual-office") {
            // For Virtual Office service, do nothing (no action)
            return;
        }
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleCreateCase = () => {
        setShowCreateModal(true);
    };

    const handleCloseModal = () => {
        setShowCreateModal(false);
    };

    const handleSubmitCase = (formData) => {
        // Handle form submission here
        console.log('New case data:', formData);
        setShowCreateModal(false);
        // You can add the new case to the data array here
    };

    // Filter data based on search term
    const filteredData = data.filter(item =>
        item.caseNumber.toLowerCase().includes(search.toLowerCase()) ||
        item.caseName.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.approvalRequests.toLowerCase().includes(search.toLowerCase()) ||
        item.assignedTo.toLowerCase().includes(search.toLowerCase()) ||
        item.status.text.toLowerCase().includes(search.toLowerCase())
    );

    const getStatusStyle = (status) => {
        const isSuccess = status.text === "Invoice Paid" || status.text === "Case Closed";
        return {
            backgroundColor: isSuccess ? "#E6F4EA" : "#FEE7E6",
            color: isSuccess ? "#28a745" : "#dc3545",
            fontWeight: 500,
            fontSize: "14px",
            borderRadius: "999px",
            padding: "4px 18px",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            width: "fit-content",
        };
    };
    return (
        <>
            {step == 'caseList'
                && (
                    <div style={{ padding: '35px 35px 20px' }}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 style={{ fontWeight: '600', color: '#3D3D3D' }}>Dashboard</h5>
                            <div className="d-flex gap-3 justify-content-between align-items-center">
                                <button
                                    className="btn btn-success rounded-pill px-4"
                                    onClick={handleCreateCase}
                                    style={{
                                        backgroundColor: '#007C36',
                                        color: '#fff',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        padding: '8px 24px',
                                    }}
                                >
                                    Create new Case
                                </button>
                                <div className="position-relative" style={{ maxWidth: "300px" }}>
                                    <input
                                        type="text"
                                        placeholder="Search here"
                                        className="form-control"
                                        style={{
                                            width: "100%",
                                            borderRadius: "25px",
                                            padding: "6px 20px 6px 50px",
                                            height: '42px',
                                            fontSize: '16px',
                                            backgroundColor: 'transparent',
                                            border: '1px solid rgba(61, 61, 61, 0.5)',
                                        }}
                                        value={search}
                                        onChange={handleSearchChange}
                                    />
                                    {/* <FaSearch
                                        style={{
                                            position: 'absolute',
                                            left: '18px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: 'rgba(61, 61, 61, 0.5)',
                                            fontSize: '16px',
                                            pointerEvents: 'none'
                                        }}
                                    /> */}
                                    <Image
                                        src={SearchIcon}
                                        alt="Search Icon"
                                        width={20}
                                        height={20}
                                        style={{
                                            position: 'absolute',
                                            left: '18px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="d-flex gap-4 mb-4">
                            {/* Total Cases Card */}
                            <div
                                className="flex-fill rounded-3 px-4 py-2"
                                style={{
                                    backgroundColor: '#E6F4EA',
                                    borderRadius: '16px',
                                    position: 'relative'
                                }}
                            >
                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center"
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            backgroundColor: '#28a745',
                                            color: 'white'
                                        }}
                                    >
                                        <Image
                                            src={AnalyticsIcon}
                                            alt="Analytics Icon"
                                            width={20}
                                            height={20}
                                            style={{
                                                filter: 'brightness(0) invert(1)'
                                            }}
                                        />
                                    </div>
                                    <h6 className="mb-0 fw-bold" style={{ color: '#3D3D3D', fontSize: '14px' }}>
                                        Total Cases
                                    </h6>
                                </div>
                                <div className="mb-2">
                                    <h2 className="mb-0 fw-bold" style={{ color: '#3D3D3D', fontSize: '28px' }}>
                                        {data.length}
                                    </h2>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FaArrowUp
                                        size={12}
                                        style={{ color: '#28a745', marginRight: '4px' }}
                                    />
                                    <small style={{ color: '#28a745', fontSize: '12px', fontWeight: '500' }}>
                                        {Math.round((data.length * 0.15))}% increase from last month
                                    </small>
                                </div>
                            </div>

                            {/* Invoice Paid Card */}
                            {/* <div
                                className="flex-fill rounded-3 px-4 py-2"
                                style={{
                                    backgroundColor: '#FFF3CD',
                                    borderRadius: '16px',
                                    position: 'relative'
                                }}
                            >
                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center"
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            backgroundColor: '#FFC107',
                                            color: '#3D3D3D'
                                        }}
                                    >
                                        <Image
                                            src={CardIconActive}
                                            alt="Card Icon"
                                            width={20}
                                            height={20}
                                            style={{
                                                filter: 'brightness(0) invert(1)'
                                            }}
                                        />
                                    </div>
                                    <h6 className="mb-0 fw-bold" style={{ color: '#3D3D3D', fontSize: '14px' }}>
                                        Invoice Paid
                                    </h6>
                                </div>
                                <div className="mb-2">
                                    <h2 className="mb-0 fw-bold" style={{ color: '#3D3D3D', fontSize: '28px' }}>
                                        $53,00932
                                    </h2>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FaArrowDown
                                        size={12}
                                        style={{ color: '#dc3545', marginRight: '4px' }}
                                    />
                                    <small style={{ color: '#dc3545', fontSize: '12px', fontWeight: '500' }}>
                                        10% decrease from last month
                                    </small>
                                </div>
                            </div> */}
                        </div>

                        <div
                            className="table-responsive p-0"
                            style={{
                                marginTop: '35px',
                                fontSize: '16px',
                                backgroundColor: "#fff",
                                borderRadius: "15px",
                                overflow: "hidden",
                                border: '1px solid rgba(61, 61, 61, 0.15)',
                                boxShadow: "0 0 4px rgba(0,0,0,0.05)",
                            }}
                        >
                            <table className="table table-borderless table-striped mb-0">
                                <thead>
                                    <tr style={{ backgroundColor: "#3D3D3D0D" }}>
                                        <th style={{ fontSize: '14px', padding: '12px', width: '10%' }}>Case #</th>
                                        <th style={{ fontSize: '14px', padding: '12px', width: '25%' }}>Client Details</th>
                                        <th style={{ fontSize: '14px', padding: '12px', width: '25%' }}>Approval Requests</th>
                                        <th style={{ fontSize: '14px', padding: '12px', width: '15%' }}>Status</th>
                                        <th style={{ fontSize: '14px', padding: '12px', width: '15%' }}>Assigned To</th>
                                        <th style={{ fontSize: '14px', padding: '12px', width: '10%' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.length > 0 ? (
                                        filteredData.map(({ caseNumber, caseName, email, approvalRequests, status, assignedTo }, i) => (
                                            <tr
                                                key={i}
                                                style={{
                                                    borderBottom: "1px solid #f2f2f2",
                                                    backgroundColor: i % 2 === 1 ? "#f8f9fa" : "#fff",
                                                    height: "48px",
                                                }}
                                            >
                                                <td style={{ fontSize: '14px', padding: '12px', verticalAlign: 'middle' }}>
                                                    <div className="fw-bold" style={{ color: "#007C36", fontSize: "13px" }}>{caseNumber}</div>
                                                </td>
                                                <td style={{ fontSize: '14px', padding: '12px', verticalAlign: 'middle' }}>
                                                    <div className="fw-semibold" style={{ color: "#3D3D3D" }}>{caseName}</div>
                                                    <div style={{ color: "#6c757d", fontSize: "12px" }}>{email}</div>
                                                </td>
                                                <td style={{ fontSize: '14px', padding: '12px', verticalAlign: 'middle' }}>{approvalRequests}</td>
                                                <td style={{ fontSize: '14px', padding: '12px', verticalAlign: 'middle' }}>
                                                    <span style={getStatusStyle(status)}>
                                                        {status.icon} {status.text}
                                                    </span>
                                                </td>
                                                <td style={{ fontSize: '14px', padding: '12px', verticalAlign: 'middle' }}>{assignedTo}</td>
                                                <td style={{ fontSize: '14px', padding: '12px', verticalAlign: 'middle' }}>
                                                    <button
                                                        className="btn btn-link fw-semibold"
                                                        type="button"
                                                        onClick={() => handleViewClick(i)}
                                                        style={{
                                                            color: "#007C36",
                                                            textDecoration: "none",
                                                            padding: 0,
                                                            fontSize: '14px',
                                                        }}
                                                    >
                                                        View
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="text-center py-4" style={{ color: '#6c757d' }}>
                                                No cases found matching your search criteria
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            {
                step == 'viewCase' &&
                (
                    <div style={{ padding: '35px 35px 20px' }}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 style={{ fontWeight: '600', color: '#3D3D3D', fontSize: '24px' }}>Virtual Office Dashboard</h5>
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => setSetp('caseList')}
                                style={{
                                    borderRadius: '25px',
                                    padding: '8px 24px',
                                    fontSize: '14px',
                                    fontWeight: '500'
                                }}
                            >
                                Back to Cases
                            </button>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="card" style={{ borderRadius: '16px', border: '1px solid #e9ecef' }}>
                                    <div className="card-body text-center">
                                        <div className="mb-3">
                                            <div
                                                className="rounded-circle d-flex align-items-center justify-content-center mx-auto"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    backgroundColor: '#007C36',
                                                    color: 'white'
                                                }}
                                            >
                                                <Image
                                                    src="/assets/img/icon/buildings.png"
                                                    alt="Virtual Office Icon"
                                                    width={30}
                                                    height={30}
                                                    style={{ filter: 'brightness(0) invert(1)' }}
                                                />
                                            </div>
                                        </div>
                                        <h6 className="card-title" style={{ color: '#3D3D3D', fontWeight: '600' }}>
                                            Active Virtual Offices
                                        </h6>
                                        <h3 className="mb-0" style={{ color: '#007C36', fontWeight: '700' }}>
                                            12
                                        </h3>
                                        <small className="text-muted">+2 this month</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 mb-4">
                                <div className="card" style={{ borderRadius: '16px', border: '1px solid #e9ecef' }}>
                                    <div className="card-body text-center">
                                        <div className="mb-3">
                                            <div
                                                className="rounded-circle d-flex align-items-center justify-content-center mx-auto"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    backgroundColor: '#ffc107',
                                                    color: 'white'
                                                }}
                                            >
                                                <Image
                                                    src="/assets/img/icon/chart.png"
                                                    alt="Revenue Icon"
                                                    width={30}
                                                    height={30}
                                                    style={{ filter: 'brightness(0) invert(1)' }}
                                                />
                                            </div>
                                        </div>
                                        <h6 className="card-title" style={{ color: '#3D3D3D', fontWeight: '600' }}>
                                            Monthly Revenue
                                        </h6>
                                        <h3 className="mb-0" style={{ color: '#ffc107', fontWeight: '700' }}>
                                            €2,400
                                        </h3>
                                        <small className="text-muted">+15% from last month</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ borderRadius: '16px', border: '1px solid #e9ecef' }}>
                            <div className="card-body">
                                <h6 className="card-title mb-3" style={{ color: '#3D3D3D', fontWeight: '600' }}>
                                    Recent Virtual Office Activities
                                </h6>
                                <div className="table-responsive">
                                    <table className="table table-borderless">
                                        <thead>
                                            <tr style={{ backgroundColor: '#f8f9fa' }}>
                                                <th style={{ fontSize: '14px', fontWeight: '600', color: '#6c757d' }}>Office ID</th>
                                                <th style={{ fontSize: '14px', fontWeight: '600', color: '#6c757d' }}>Client Name</th>
                                                <th style={{ fontSize: '14px', fontWeight: '600', color: '#6c757d' }}>Address</th>
                                                <th style={{ fontSize: '14px', fontWeight: '600', color: '#6c757d' }}>Status</th>
                                                <th style={{ fontSize: '14px', fontWeight: '600', color: '#6c757d' }}>Last Activity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ fontSize: '14px', color: '#007C36', fontWeight: '600' }}>VO-001</td>
                                                <td style={{ fontSize: '14px', color: '#3D3D3D' }}>Robert Johnson</td>
                                                <td style={{ fontSize: '14px', color: '#6c757d' }}>123 Business Ave, Lisbon</td>
                                                <td>
                                                    <span className="badge" style={{ backgroundColor: '#E6F4EA', color: '#28a745', padding: '4px 12px', borderRadius: '20px' }}>
                                                        Active
                                                    </span>
                                                </td>
                                                <td style={{ fontSize: '14px', color: '#6c757d' }}>2 hours ago</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontSize: '14px', color: '#007C36', fontWeight: '600' }}>VO-002</td>
                                                <td style={{ fontSize: '14px', color: '#3D3D3D' }}>Amanda Taylor</td>
                                                <td style={{ fontSize: '14px', color: '#6c757d' }}>456 Corporate St, Porto</td>
                                                <td>
                                                    <span className="badge" style={{ backgroundColor: '#FFF3CD', color: '#856404', padding: '4px 12px', borderRadius: '20px' }}>
                                                        Pending
                                                    </span>
                                                </td>
                                                <td style={{ fontSize: '14px', color: '#6c757d' }}>1 day ago</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontSize: '14px', color: '#007C36', fontWeight: '600' }}>VO-003</td>
                                                <td style={{ fontSize: '14px', color: '#3D3D3D' }}>James Wilson</td>
                                                <td style={{ fontSize: '14px', color: '#6c757d' }}>789 Enterprise Blvd, Braga</td>
                                                <td>
                                                    <span className="badge" style={{ backgroundColor: '#E6F4EA', color: '#28a745', padding: '4px 12px', borderRadius: '20px' }}>
                                                        Active
                                                    </span>
                                                </td>
                                                <td style={{ fontSize: '14px', color: '#6c757d' }}>3 days ago</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Create Case Modal */}
            {showCreateModal && (
                <CreateCaseModal
                    onClose={handleCloseModal}
                    onSubmit={handleSubmitCase}
                />
            )}
        </>
    );
}

// Create Case Modal Component
const CreateCaseModal = ({ onClose, onSubmit }) => {

    return (
        <div
            className="modal fade show d-block"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            tabIndex="-1"
        >
            <div className="container text-center d-flex justify-content-center align-items-center flex-column bg-white rounded-3 position-relative" style={{ minHeight: '85vh', marginTop: '80px' }}>
                <div className="position-absolute" style={{ top: '10px', right: '20px' }}>
                    <button className="btn btn-close" onClick={onClose}></button>
                </div>
                <h2 className="text-success" style={{ fontWeight: '600' }}>Welcome to Innovate360</h2>
                <p className="text-muted mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet.</p>
                <h6 className="mb-4" style={{ fontWeight: '600', fontSize: '16px', color: '#3D3D3D' }}>Choose the service you prefer to continue</h6>

                <div className="wc-screen row justify-content-center mt-4">
                    {/* Card 1: NIF Number */}
                    <div className="col-md-4 mb-4">
                        <div className="hm-custom-card" style={{ boxShadow: '0px 0px 40px 0px #0000001A' }}>
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
                                <h5 className="card-title mb-2" style={{ fontWeight: '400' }}>NIF Number</h5>
                                <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                                    Your invoice is not paid. Kindly pay it to complete your registration.
                                </p>
                                <a href="/nif-number" className="btn btn-success" style={{
                                    borderRadius: '25px',
                                    padding: '10px 24px',
                                    fontWeight: '500',
                                    width: '100%',
                                    background: '#007C36'
                                }} onClick={() => localStorage.setItem('selectedService', 'nif')}>Buy Now</a>
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
                                <h5 className="card-title mb-2" style={{ fontWeight: '400' }}>New Company</h5>
                                <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                                    Your invoice is not paid. Kindly pay it to complete your registration.
                                </p>
                                <a href="/company" className="btn btn-success" style={{
                                    borderRadius: '25px',
                                    padding: '10px 24px',
                                    fontWeight: '500',
                                    width: '100%',
                                    background: '#007C36'
                                }} onClick={() => localStorage.setItem('selectedService', 'company')}>Register Now</a>
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
                                <h5 className="card-title mb-2" style={{ fontWeight: '400' }}>Virtual Office Address</h5>
                                <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                                    Your invoice is not paid. Kindly pay it to complete your registration.
                                </p>
                                <a href="/virtual-office-address" className="btn btn-success" style={{
                                    borderRadius: '25px',
                                    padding: '10px 24px',
                                    fontWeight: '500',
                                    width: '100%',
                                    background: '#007C36'
                                }} onClick={() => localStorage.setItem('selectedService', 'virtual-office')}>Create Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
