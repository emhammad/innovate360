"use client";
import { useState } from "react";
import { FaSearch, FaUser, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function AllLawyers() {
    const [search, setSearch] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);
    const [newLawyer, setNewLawyer] = useState({ name: "", email: "" });

    const lawyers = [
        {
            id: 1,
            name: "John Doe",
            email: "olivia@untitledu.com",
            case: "John Doe",
            caseEmail: "john@example.com",
            status: "Assigned",
            avatar: "/assets/img/team/team-1.jpg"
        },
        {
            id: 2,
            name: "Sarah Wilson",
            email: "sarah.wilson@law.com",
            case: "-",
            caseEmail: "",
            status: "Not Assigned",
            avatar: "/assets/img/team/team-2.jpg"
        },
        {
            id: 3,
            name: "Michael Brown",
            email: "michael.brown@legal.com",
            case: "Michael Brown",
            caseEmail: "mike@example.com",
            status: "Assigned",
            avatar: "/assets/img/team/team-3.jpg"
        },
        {
            id: 4,
            name: "Emily Davis",
            email: "emily.davis@lawfirm.com",
            case: "-",
            caseEmail: "",
            status: "Not Assigned",
            avatar: "/assets/img/team/team-4.jpg"
        },
        {
            id: 5,
            name: "David Miller",
            email: "david.miller@legal.com",
            case: "David Miller",
            caseEmail: "david@example.com",
            status: "Assigned",
            avatar: "/assets/img/team/team-5.jpg"
        }
    ];

    const filteredLawyers = lawyers.filter(lawyer =>
        lawyer.name.toLowerCase().includes(search.toLowerCase()) ||
        lawyer.email.toLowerCase().includes(search.toLowerCase())
    );

    const handleAddLawyer = () => {
        if (newLawyer.name && newLawyer.email) {
            // Here you would typically send the data to your backend
            console.log("Adding new lawyer:", newLawyer);
            setNewLawyer({ name: "", email: "" });
            setShowAddModal(false);
        }
    };

    const handleInputChange = (field, value) => {
        setNewLawyer(prev => ({ ...prev, [field]: value }));
    };

    const getStatusStyle = (status) => {
        return {
            backgroundColor: status === "Assigned" ? "#E6F4EA" : "#FEE7E6",
            color: status === "Assigned" ? "#28a745" : "#dc3545",
            fontWeight: 500,
            fontSize: "14px",
            borderRadius: "999px",
            padding: "4px 18px",
            display: "inline-block",
            width: "fit-content",
        };
    };

    return (
        <div style={{ padding: '35px' }}>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold mb-0" style={{ color: "#3D3D3D" }}>All Lawyers</h4>
                <div className="d-flex align-items-center gap-3">
                    {/* Search Bar */}
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
                                border: '1px solid #3D3D3D',
                            }}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <FaSearch
                            style={{
                                position: 'absolute',
                                left: '18px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#3D3D3D',
                                fontSize: '16px',
                                pointerEvents: 'none'
                            }}
                        />
                    </div>

                    {/* Add Lawyer Button */}
                    <button
                        className="btn"
                        onClick={() => setShowAddModal(true)}
                        style={{
                            backgroundColor: "#007C36",
                            color: "white",
                            border: "none",
                            borderRadius: "25px",
                            padding: "12px 30px",
                            fontWeight: "500",
                            fontSize: "14px"
                        }}
                    >
                        Add Lawyer
                    </button>
                </div>
            </div>

            {/* Lawyers Table */}
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
                            <th style={{ fontSize: '14px', padding: '12px ' }}>Lawyers</th>
                            <th style={{ fontSize: '14px', padding: '12px ' }}>Case</th>
                            <th style={{ fontSize: '14px', padding: '12px ' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLawyers.map((lawyer, index) => (
                            <tr
                                key={lawyer.id}
                                style={{
                                    borderBottom: "1px solid #f2f2f2",
                                    backgroundColor: index % 2 === 1 ? "#f8f9fa" : "#fff",
                                    height: "48px",
                                }}
                            >
                                <td style={{ fontSize: '14px', padding: '8px 12px ' }}>
                                    <div className="d-flex align-items-center">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                backgroundColor: "#e9ecef",
                                                color: "#6c757d"
                                            }}
                                        >
                                            <FaUser size={16} />
                                        </div>
                                        <div>
                                            <div className="fw-semibold" style={{ color: "#3D3D3D", fontSize: "14px" }}>
                                                {lawyer.name}
                                            </div>
                                            <div style={{ color: "#6c757d", fontSize: "12px" }}>
                                                {lawyer.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ fontSize: '14px', padding: '12px ' }}>
                                    {lawyer.case !== "-" ? (
                                        <div>
                                            <div className="fw-semibold" style={{ color: "#3D3D3D", fontSize: "14px" }}>
                                                {lawyer.case}
                                            </div>
                                            <div style={{ color: "#6c757d", fontSize: "12px" }}>
                                                {lawyer.caseEmail}
                                            </div>
                                        </div>
                                    ) : (
                                        <span style={{ color: "#6c757d", fontSize: "14px" }}>-</span>
                                    )}
                                </td>
                                <td style={{ fontSize: '14px', padding: '12px ' }}>
                                    <span style={getStatusStyle(lawyer.status)}>
                                        {lawyer.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add New Lawyer Modal */}
            {showAddModal && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 1050
                    }}
                    onClick={() => setShowAddModal(false)}
                >
                    <div
                        className="bg-white rounded-4 p-4"
                        style={{ width: "500px", maxWidth: "90vw" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="fw-bold mb-0" style={{ color: "#3D3D3D" }}>
                                Add New Lawyer
                            </h5>
                            <button
                                className="btn btn-link p-0"
                                onClick={() => setShowAddModal(false)}
                                style={{ color: "#6c757d", fontSize: "20px" }}
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="mb-4">
                            <div className="mb-3">
                                <label className="form-label fw-semibold" style={{ color: "#3D3D3D" }}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="John Doe"
                                    value={newLawyer.name}
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                    style={{
                                        width: '100%',
                                        height: '54px',
                                        borderRadius: '50px',
                                        paddingTop: '15px',
                                        paddingRight: '20px',
                                        paddingBottom: '15px',
                                        paddingLeft: '20px',
                                        opacity: 1,
                                        borderWidth: '1px',
                                        border: '1px solid #3D3D3D40',
                                        background: 'transparent',
                                        fontSize: '14px'
                                    }}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold" style={{ color: "#3D3D3D" }}>
                                    Email
                                </label>
                                <div className="position-relative">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="john123@mail.com"
                                        value={newLawyer.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
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
                                    <FaUser
                                        style={{
                                            position: "absolute",
                                            left: "20px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            color: "#6c757d",
                                            fontSize: "20px",
                                            zIndex: 10
                                        }}
                                    />
                                </div>
                            </div>

                            <p className="text-muted small mb-0">
                                On clicking Add an email will be sent to lawyer to join Innovate360
                            </p>
                        </div>

                        {/* Modal Footer */}
                        <div className="d-flex gap-3">
                            <button
                                className="btn flex-fill"
                                onClick={() => setShowAddModal(false)}
                                style={{
                                    backgroundColor: "white",
                                    color: "#6c757d",
                                    border: "1px solid #dee2e6",
                                    borderRadius: "8px",
                                    padding: "10px 20px",
                                    fontWeight: "500"
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                className="btn flex-fill"
                                onClick={handleAddLawyer}
                                style={{
                                    backgroundColor: "#007C36",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "8px",
                                    padding: "10px 20px",
                                    fontWeight: "500"
                                }}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
