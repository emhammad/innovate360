import { FaArrowUp, FaArrowDown, FaSearch } from "react-icons/fa";
import { useState } from "react";
import AnalyticsIcon from "@assets/img/icon/chart.png";
import CardIconActive from "@assets/img/icon/card.png";
import SideNavAnalyticsIcon from "@assets/img/sideNav/analytics.png";
import SideNavAnalyticsIconActive from "@assets/img/icon/chart.png";
import Image from "next/image";
import Topbar from '@/src/common/topbar';
import SearchIcon from "@assets/img/icon/search-icon.svg";

const data = [
    {
        caseName: "John Doe",
        email: "olivia@untitledui.com",
        approvalRequests: "Maxfter Inc, CodeNova, ByteCrafters..",
        status: { text: "Pending", color: "text-danger", icon: <FaArrowDown size={12} /> },
        assignedTo: "Matthew Anderson",
    },
    {
        caseName: "John Doe",
        email: "olivia@untitledui.com",
        approvalRequests: "Maxfter Inc, CodeNova, ByteCrafters..",
        status: { text: "Invoice Paid", color: "text-success", icon: <FaArrowUp size={12} /> },
        assignedTo: "Jane Cooper",
    },
    {
        caseName: "John Doe",
        email: "olivia@untitledui.com",
        approvalRequests: "Maxfter Inc, CodeNova, ByteCrafters..",
        status: { text: "Name Applied", color: "text-danger", icon: <FaArrowDown size={12} /> },
        assignedTo: "Wade Warren",
    },
    {
        caseName: "John Doe",
        email: "olivia@untitledui.com",
        approvalRequests: "Maxfter Inc, CodeNova, ByteCrafters..",
        status: { text: "Invoice Paid", color: "text-success", icon: <FaArrowUp size={12} /> },
        assignedTo: "Brooklyn Simmons",
    },
    {
        caseName: "John Doe",
        email: "olivia@untitledui.com",
        approvalRequests: "Maxfter Inc, CodeNova, ByteCrafters..",
        status: { text: "Case Closed", color: "text-success", icon: <FaArrowUp size={12} /> },
        assignedTo: "Jenny Wilson",
    },
    {
        caseName: "John Doe",
        email: "olivia@untitledui.com",
        approvalRequests: "Maxfter Inc, CodeNova, ByteCrafters..",
        status: { text: "Case Closed", color: "text-success", icon: <FaArrowUp size={12} /> },
        assignedTo: "Esther Howard",
    },
    {
        caseName: "John Doe",
        email: "olivia@untitledui.com",
        approvalRequests: "Maxfter Inc, CodeNova, ByteCrafters..",
        status: { text: "Name Applied", color: "text-danger", icon: <FaArrowDown size={12} /> },
        assignedTo: "Leslie Alexander",
    },
    {
        caseName: "John Doe",
        email: "olivia@untitledui.com",
        approvalRequests: "Maxfter Inc, CodeNova, ByteCrafters..",
        status: { text: "Case Closed", color: "text-success", icon: <FaArrowUp size={12} /> },
        assignedTo: "Guy Hawkins",
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
        <>
            <Topbar />
            <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
                <div className="d-flex flex-grow-1">
                    {/* Left icon sidebar */}
                    <div
                        className="text-white d-flex flex-column align-items-center py-3"
                        style={{ width: "5vw", background: "#007C36" }}
                    >
                        <div
                            className="d-flex align-items-center justify-content-center mb-4"
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "25px",
                                backgroundColor: activeTab === 2 ? "#EDFF8B" : "transparent",
                                cursor: "pointer"
                            }}
                            role="button"
                            onClick={() => handleNavClick(2)}
                        >
                            <Image
                                src={activeTab === 2 ? SideNavAnalyticsIconActive : SideNavAnalyticsIcon}
                                alt="Analytics"
                                width={activeTab === 2 ? '25px' : '35px'}
                                height={activeTab === 2 ? '25px' : '35px'}
                            />
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <div className="container-fluid">
                            <Content />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Content = () => {
    const [step, setSetp] = useState('caseList');
    const [Id, setId] = useState(0);
    const [search, setSearch] = useState("");
    const [showCreateModal, setShowCreateModal] = useState(false);

    const handleViewClick = (id) => {
        setSetp("viewCase")
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
                    <div style={{ padding: '35px' }}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 style={{ fontWeight: '600', color: '#3D3D3D' }}>Virtual Office Dashboard</h5>
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
                                        1,274
                                    </h2>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FaArrowUp
                                        size={12}
                                        style={{ color: '#28a745', marginRight: '4px' }}
                                    />
                                    <small style={{ color: '#28a745', fontSize: '12px', fontWeight: '500' }}>
                                        12% increase from last month
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
                                        <th style={{ fontSize: '14px', padding: '12px ' }}>Cases</th>
                                        <th style={{ fontSize: '14px', padding: '12px ' }}>Approval Requests</th>
                                        <th style={{ fontSize: '14px', padding: '12px ' }}>Status</th>
                                        <th style={{ fontSize: '14px', padding: '12px ' }}>Assigned To</th>
                                        <th style={{ fontSize: '14px', padding: '12px ' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.length > 0 ? (
                                        filteredData.map(({ caseName, email, approvalRequests, status, assignedTo }, i) => (
                                            <tr
                                                key={i}
                                                style={{
                                                    borderBottom: "1px solid #f2f2f2",
                                                    backgroundColor: i % 2 === 1 ? "#f8f9fa" : "#fff",
                                                    height: "48px",
                                                }}
                                            >
                                                <td style={{ fontSize: '14px', padding: '12px ' }}>
                                                    <div className="fw-semibold" style={{ color: "#3D3D3D" }}>{caseName}</div>
                                                    <div style={{ color: "#6c757d", fontSize: "12px" }}>{email}</div>
                                                </td>
                                                <td style={{ fontSize: '14px', padding: '12px ' }}>{approvalRequests}</td>
                                                <td style={{ fontSize: '14px', padding: '12px ' }}>
                                                    <span style={getStatusStyle(status)}>
                                                        {status.icon} {status.text}
                                                    </span>
                                                </td>
                                                <td style={{ fontSize: '14px', padding: '12px ' }}>{assignedTo}</td>
                                                <td style={{ fontSize: '14px', padding: '12px ' }}>
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
                                            <td colSpan="5" className="text-center py-4" style={{ color: '#6c757d' }}>
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
                    <div>Case Detail Component</div>
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

                <div className="wc-screen row justify-content-center mt-4 px-3">
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
                                }}>Create Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
