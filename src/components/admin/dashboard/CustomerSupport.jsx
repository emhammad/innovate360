import { FaSearch, FaPlus } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import SearchIcon from "@assets/img/icon/search-icon.svg";
import NoDate from "@assets/img/icon/cusomer-page.png";

const supportData = [
    {
        id: 1,
        subject: "Login not working",
        date: "18/09/2025",
        status: "Pending",
        assignedTo: "Matthew Anderson",
    },
    {
        id: 2,
        subject: "Payment Submitted but no response",
        date: "18/09/2025",
        status: "Resolved",
        assignedTo: "Jane Cooper",
    },
    {
        id: 3,
        subject: "NIF Documents not received",
        date: "18/09/2025",
        status: "Pending",
        assignedTo: "Wade Warren",
    },
    {
        id: 4,
        subject: "Company registration delay",
        date: "17/09/2025",
        status: "In Progress",
        assignedTo: "Brooklyn Simmons",
    },
    {
        id: 5,
        subject: "Virtual office address issue",
        date: "17/09/2025",
        status: "Resolved",
        assignedTo: "Jenny Wilson",
    },
    {
        id: 6,
        subject: "Document verification pending",
        date: "16/09/2025",
        status: "Pending",
        assignedTo: "Esther Howard",
    },
];

export default function CustomerSupport() {
    const [search, setSearch] = useState("");
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [tickets, setTickets] = useState(supportData); // Use state for tickets to allow adding new ones

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleCreateTicket = () => {
        setShowCreateModal(true);
    };

    const handleCloseModal = () => {
        setShowCreateModal(false);
    };

    const handleViewTicket = (ticket) => {
        setSelectedTicket(ticket);
        setShowViewModal(true);
    };

    const handleCloseViewModal = () => {
        setShowViewModal(false);
        setSelectedTicket(null);
    };

    const handleSubmitTicket = (formData) => {
        // Handle form submission here
        console.log('New ticket data:', formData);

        // Add new ticket to the list
        const newTicket = {
            id: tickets.length + 1,
            subject: formData.subject,
            date: new Date().toLocaleDateString('en-GB'),
            status: "Pending",
            assignedTo: "Unassigned"
        };

        setTickets([...tickets, newTicket]);
        setShowCreateModal(false);
    };

    // Filter data based on search term
    const filteredData = tickets.filter(item =>
        item.subject.toLowerCase().includes(search.toLowerCase()) ||
        item.assignedTo.toLowerCase().includes(search.toLowerCase()) ||
        item.status.toLowerCase().includes(search.toLowerCase())
    );

    const getStatusStyle = (status) => {
        switch (status) {
            case "Resolved":
                return {
                    backgroundColor: "#E6F4EA",
                    color: "#28a745",
                    fontWeight: 500,
                    fontSize: "14px",
                    borderRadius: "999px",
                    padding: "4px 12px",
                    display: "inline-flex",
                    alignItems: "center",
                    width: "fit-content",
                };
            case "Pending":
                return {
                    backgroundColor: "#FEE7E6",
                    color: "#dc3545",
                    fontWeight: 500,
                    fontSize: "14px",
                    borderRadius: "999px",
                    padding: "4px 12px",
                    display: "inline-flex",
                    alignItems: "center",
                    width: "fit-content",
                };
            case "In Progress":
                return {
                    backgroundColor: "#FFF3CD",
                    color: "#856404",
                    fontWeight: 500,
                    fontSize: "14px",
                    borderRadius: "999px",
                    padding: "4px 12px",
                    display: "inline-flex",
                    alignItems: "center",
                    width: "fit-content",
                };
            default:
                return {
                    backgroundColor: "#f8f9fa",
                    color: "#6c757d",
                    fontWeight: 500,
                    fontSize: "14px",
                    borderRadius: "999px",
                    padding: "4px 12px",
                    display: "inline-flex",
                    alignItems: "center",
                    width: "fit-content",
                };
        }
    };

    return (
        <>
            <div style={{ padding: '35px' }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 style={{ fontWeight: '600', color: '#3D3D3D', fontSize: '24px' }}>Customer Support</h5>
                    <div className="d-flex gap-3 justify-content-between align-items-center">
                        <div className="position-relative" style={{ maxWidth: "300px" }}>
                            <input
                                type="text"
                                placeholder="Search invoices"
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

                {tickets.length === 0 ? (
                    // Empty State - No Table
                    <div
                        className="d-flex flex-column align-items-center justify-content-center py-5"
                        style={{
                            marginTop: '40px',
                            backgroundColor: "#fff",
                            borderRadius: "15px",
                            minHeight: '400px'
                        }}
                    >
                        <Image
                            src={NoDate}
                            alt="No Data"
                            width={200}
                            height={150}
                            style={{ objectFit: 'contain', marginBottom: '20px' }}
                        />
                        <h5 style={{ color: '#6c757d', fontWeight: '500', marginBottom: '8px' }}>
                            No data to show yet
                        </h5>
                        <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0 }}>
                            Create your first support ticket to get started
                        </p>
                    </div>
                ) : (
                    // Table with Data
                    <div
                        className="table-responsive p-0"
                        style={{
                            marginTop: '20px',
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
                                    <th style={{ fontSize: '14px', padding: '12px', width: '10%' }}>Sr#</th>
                                    <th style={{ fontSize: '14px', padding: '12px', width: '30%' }}>Subject</th>
                                    <th style={{ fontSize: '14px', padding: '12px', width: '15%' }}>Date</th>
                                    <th style={{ fontSize: '14px', padding: '12px', width: '15%' }}>Status</th>
                                    <th style={{ fontSize: '14px', padding: '12px', width: '20%' }}>Assigned To</th>
                                    <th style={{ fontSize: '14px', padding: '12px', width: '10%' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.length > 0 ? (
                                    filteredData.map(({ id, subject, date, status, assignedTo }, i) => (
                                        <tr
                                            key={i}
                                            style={{
                                                borderBottom: "1px solid #f2f2f2",
                                                backgroundColor: i % 2 === 1 ? "#f8f9fa" : "#fff",
                                                height: "48px",
                                            }}
                                        >
                                            <td style={{ fontSize: '14px', padding: '12px', verticalAlign: 'middle' }}>
                                                <div className="fw-bold" style={{ color: "#3D3D3D", fontSize: "14px" }}>{id}</div>
                                            </td>
                                            <td style={{ fontSize: '14px', padding: '12px', verticalAlign: 'middle' }}>
                                                <div className="fw-semibold" style={{ color: "#3D3D3D" }}>{subject}</div>
                                            </td>
                                            <td style={{ fontSize: '14px', padding: '12px', verticalAlign: 'middle' }}>{date}</td>
                                            <td style={{ fontSize: '14px', padding: '12px', verticalAlign: 'middle' }}>
                                                <span style={getStatusStyle(status)}>
                                                    {status}
                                                </span>
                                            </td>
                                            <td style={{ fontSize: '14px', padding: '12px', verticalAlign: 'middle' }}>{assignedTo}</td>
                                            <td style={{ fontSize: '14px', padding: '12px', verticalAlign: 'middle' }}>
                                                <button
                                                    className="btn btn-link fw-semibold"
                                                    type="button"
                                                    onClick={() => handleViewTicket({ id, subject, date, status, assignedTo })}
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
                                        <td colSpan="6" className="text-center py-5" style={{ color: '#6c757d' }}>
                                            <div className="d-flex flex-column align-items-center">
                                                <Image
                                                    src="/assets/img/icon/customer-page.png"
                                                    alt="No Data"
                                                    width={200}
                                                    height={150}
                                                    style={{ objectFit: 'contain', marginBottom: '20px' }}
                                                />
                                                <h5 style={{ color: '#6c757d', fontWeight: '500', marginBottom: '8px' }}>
                                                    No data to show yet
                                                </h5>
                                                <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0 }}>
                                                    No support tickets found matching your search criteria
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Floating Action Button */}
                <button
                    className="btn btn-success rounded-circle position-fixed"
                    onClick={handleCreateTicket}
                    style={{
                        width: '60px',
                        height: '60px',
                        bottom: '30px',
                        right: '30px',
                        backgroundColor: '#007C36',
                        border: 'none',
                        boxShadow: '0 4px 12px rgba(0, 124, 54, 0.3)',
                        zIndex: 1000,
                    }}
                >
                    <FaPlus size={24} color="white" />
                </button>
            </div>

            {/* Create Ticket Modal */}
            {showCreateModal && (
                <CreateTicketModal
                    onClose={handleCloseModal}
                    onSubmit={handleSubmitTicket}
                />
            )}

            {/* View Ticket Modal */}
            {showViewModal && selectedTicket && (
                <ViewTicketModal
                    ticket={selectedTicket}
                    onClose={handleCloseViewModal}
                />
            )}
        </>
    );
}

// Create Ticket Modal Component
const CreateTicketModal = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div
            className="modal fade show d-block"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
            tabIndex="-1"
        >
            <div className="modal-dialog" style={{ maxWidth: '500px' }}>
                <div
                    className="modal-content"
                    style={{
                        borderRadius: '24px',
                        border: 'none',
                        boxShadow: '0px 0px 24.8px 0px #00000026',
                        padding: '24px'
                    }}
                >
                    <div
                        className="modal-header"
                        style={{
                            borderBottom: 'none',
                            padding: '0 0 20px 0'
                        }}
                    >
                        <h4
                            className="modal-title fw-bold"
                            style={{
                                color: '#3D3D3D',
                                fontSize: '20px',
                                margin: 0,
                                fontWeight: '400'
                            }}
                        >
                            Customer Support Form
                        </h4>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                            style={{
                                fontSize: '16px',
                                opacity: 0.7
                            }}
                        ></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div
                            className="modal-body"
                            style={{
                                padding: '0 0 20px 0'
                            }}
                        >
                            {/* Name Field */}
                            <div className="mb-3 position-relative">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    style={{
                                        width: '100%',
                                        height: '54px',
                                        borderRadius: '50px',
                                        paddingTop: '15px',
                                        paddingRight: '20px',
                                        paddingBottom: '15px',
                                        paddingLeft: '50px',
                                        opacity: 1,
                                        borderWidth: '1px',
                                        border: '1px solid #3D3D3D40',
                                        background: 'transparent',
                                        fontSize: '14px'
                                    }}
                                />
                                <Image
                                    src="/assets/img/icon/sms.png"
                                    alt="Name Icon"
                                    width={20}
                                    height={20}
                                    className="position-absolute"
                                    style={{
                                        top: '50%',
                                        left: '20px',
                                        transform: 'translateY(-50%)',
                                        zIndex: 10
                                    }}
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-3 position-relative">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    style={{
                                        width: '100%',
                                        height: '54px',
                                        borderRadius: '50px',
                                        paddingTop: '15px',
                                        paddingRight: '20px',
                                        paddingBottom: '15px',
                                        paddingLeft: '50px',
                                        opacity: 1,
                                        borderWidth: '1px',
                                        border: '1px solid #3D3D3D40',
                                        background: 'transparent',
                                        fontSize: '14px'
                                    }}
                                />
                                <Image
                                    src="/assets/img/icon/sms.png"
                                    alt="Email Icon"
                                    width={20}
                                    height={20}
                                    className="position-absolute"
                                    style={{
                                        top: '50%',
                                        left: '20px',
                                        transform: 'translateY(-50%)',
                                        zIndex: 10
                                    }}
                                />
                            </div>

                            {/* Subject Field */}
                            <div className="mb-3 position-relative">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    style={{
                                        width: '100%',
                                        height: '54px',
                                        borderRadius: '50px',
                                        paddingTop: '15px',
                                        paddingRight: '20px',
                                        paddingBottom: '15px',
                                        paddingLeft: '50px',
                                        opacity: 1,
                                        borderWidth: '1px',
                                        border: '1px solid #3D3D3D40',
                                        background: 'transparent',
                                        fontSize: '14px'
                                    }}
                                />
                                <Image
                                    src="/assets/img/icon/sms.png"
                                    alt="Subject Icon"
                                    width={20}
                                    height={20}
                                    className="position-absolute"
                                    style={{
                                        top: '50%',
                                        left: '20px',
                                        transform: 'translateY(-50%)',
                                        zIndex: 10
                                    }}
                                />
                            </div>

                            {/* Description Field */}
                            <div className="mb-4 position-relative">
                                <textarea
                                    className="form-control"
                                    name="description"
                                    placeholder="Description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    required
                                    rows="4"
                                    style={{
                                        width: '100%',
                                        borderRadius: '16px',
                                        paddingTop: '15px',
                                        paddingRight: '20px',
                                        paddingBottom: '15px',
                                        paddingLeft: '50px',
                                        opacity: 1,
                                        borderWidth: '1px',
                                        border: '1px solid #3D3D3D40',
                                        background: 'transparent',
                                        fontSize: '14px',
                                        resize: 'vertical',
                                        minHeight: '120px'
                                    }}
                                />
                                <Image
                                    src="/assets/img/icon/sms.png"
                                    alt="Description Icon"
                                    width={20}
                                    height={20}
                                    className="position-absolute"
                                    style={{
                                        top: '20px',
                                        left: '20px',
                                        zIndex: 10
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className="modal-footer"
                            style={{
                                borderTop: 'none',
                                padding: '0',
                                justifyContent: 'center'
                            }}
                        >
                            <button
                                type="submit"
                                className="btn btn-success w-100"
                                style={{
                                    backgroundColor: '#007C36',
                                    border: 'none',
                                    borderRadius: '25px',
                                    height: '48px',
                                    fontSize: '16px',
                                    fontWeight: '600'
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

// View Ticket Modal Component
const ViewTicketModal = ({ ticket, onClose }) => {
    const getStatusStyle = (status) => {
        switch (status) {
            case "Resolved":
                return {
                    backgroundColor: "#E6F4EA",
                    color: "#28a745",
                    fontWeight: 500,
                    fontSize: "14px",
                    borderRadius: "999px",
                    padding: "4px 12px",
                    display: "inline-flex",
                    alignItems: "center",
                    width: "fit-content",
                };
            case "Pending":
                return {
                    backgroundColor: "#FEE7E6",
                    color: "#dc3545",
                    fontWeight: 500,
                    fontSize: "14px",
                    borderRadius: "999px",
                    padding: "4px 12px",
                    display: "inline-flex",
                    alignItems: "center",
                    width: "fit-content",
                };
            case "In Progress":
                return {
                    backgroundColor: "#FFF3CD",
                    color: "#856404",
                    fontWeight: 500,
                    fontSize: "14px",
                    borderRadius: "999px",
                    padding: "4px 12px",
                    display: "inline-flex",
                    alignItems: "center",
                    width: "fit-content",
                };
            default:
                return {
                    backgroundColor: "#f8f9fa",
                    color: "#6c757d",
                    fontWeight: 500,
                    fontSize: "14px",
                    borderRadius: "999px",
                    padding: "4px 12px",
                    display: "inline-flex",
                    alignItems: "center",
                    width: "fit-content",
                };
        }
    };

    return (
        <div
            className="modal fade show d-block"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
            tabIndex="-1"
        >
            <div className="modal-dialog" style={{ maxWidth: '600px' }}>
                <div
                    className="modal-content"
                    style={{
                        borderRadius: '24px',
                        border: 'none',
                        boxShadow: '0px 0px 24.8px 0px #00000026',
                        padding: '24px'
                    }}
                >
                    <div
                        className="modal-header"
                        style={{
                            borderBottom: 'none',
                            padding: '0 0 20px 0'
                        }}
                    >
                        <h4
                            className="modal-title fw-bold"
                            style={{
                                color: '#3D3D3D',
                                fontSize: '20px',
                                margin: 0,
                                fontWeight: '400'
                            }}
                        >
                            Ticket Details
                        </h4>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                            style={{
                                fontSize: '16px',
                                opacity: 0.7
                            }}
                        ></button>
                    </div>

                    <div className="modal-body" style={{ padding: '0 0 20px 0' }}>
                        {/* Ticket Information */}
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold" style={{ color: '#6c757d', fontSize: '14px' }}>
                                        Ticket ID
                                    </label>
                                    <div className="form-control-plaintext" style={{ color: '#3D3D3D', fontSize: '16px' }}>
                                        #{ticket.id}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold" style={{ color: '#6c757d', fontSize: '14px' }}>
                                        Status
                                    </label>
                                    <div>
                                        <span style={getStatusStyle(ticket.status)}>
                                            {ticket.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold" style={{ color: '#6c757d', fontSize: '14px' }}>
                                        Subject
                                    </label>
                                    <div className="form-control-plaintext" style={{ color: '#3D3D3D', fontSize: '16px' }}>
                                        {ticket.subject}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold" style={{ color: '#6c757d', fontSize: '14px' }}>
                                        Date Created
                                    </label>
                                    <div className="form-control-plaintext" style={{ color: '#3D3D3D', fontSize: '16px' }}>
                                        {ticket.date}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-semibold" style={{ color: '#6c757d', fontSize: '14px' }}>
                                Assigned To
                            </label>
                            <div className="form-control-plaintext" style={{ color: '#3D3D3D', fontSize: '16px' }}>
                                {ticket.assignedTo}
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="mb-4">
                            <label className="form-label fw-semibold" style={{ color: '#6c757d', fontSize: '14px' }}>
                                Description
                            </label>
                            <div
                                className="form-control-plaintext"
                                style={{
                                    color: '#3D3D3D',
                                    fontSize: '16px',
                                    backgroundColor: '#f8f9fa',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    border: '1px solid #e9ecef',
                                    minHeight: '100px'
                                }}
                            >
                                {ticket.subject === "Login not working" &&
                                    "I'm unable to log into my account. When I enter my credentials, I get an error message saying 'Invalid username or password'. I've tried resetting my password but haven't received any email. Please help me resolve this issue as soon as possible."
                                }
                                {ticket.subject === "Payment Submitted but no response" &&
                                    "I submitted my payment for the company registration service 3 days ago but haven't received any confirmation or response. The payment was processed successfully from my end. Please check the status and provide an update."
                                }
                                {ticket.subject === "NIF Documents not received" &&
                                    "I completed the NIF application process last week but haven't received the required documents yet. The status shows as 'Processing' but it's been longer than expected. Could you please check the status and provide an update?"
                                }
                                {ticket.subject === "Company registration delay" &&
                                    "My company registration has been in progress for over 2 weeks now, which is longer than the estimated timeframe. I need this completed urgently for my business operations. Please expedite the process and provide a timeline."
                                }
                                {ticket.subject === "Virtual office address issue" &&
                                    "I'm having trouble with my virtual office address. The documents I received have an incorrect address format. I need this corrected as it's affecting my business registration with other authorities."
                                }
                                {ticket.subject === "Document verification pending" &&
                                    "I uploaded all the required documents for verification 5 days ago but the status still shows as 'Pending Review'. I need this completed to proceed with my application. Please prioritize this review."
                                }
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="mb-4">
                            <label className="form-label fw-semibold" style={{ color: '#6c757d', fontSize: '14px' }}>
                                Priority
                            </label>
                            <div className="form-control-plaintext" style={{ color: '#3D3D3D', fontSize: '16px' }}>
                                {ticket.status === "Resolved" ? "Low" : ticket.status === "In Progress" ? "High" : "Medium"}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
