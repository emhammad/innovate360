"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const virtualAddresses = [
    {
        id: 1,
        name: "John Doe",
        email: "john@email.com",
        registrationDate: "2026-09-25",
        renewalDate: "2026-09-25",
        address: "123 Main Street, Lisbon, Portugal",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@email.com",
        registrationDate: "2026-09-26",
        renewalDate: "2026-09-26",
        address: "456 Avenida da Liberdade, Lisbon, Portugal",
    },
    {
        id: 3,
        name: "Mark Johnson",
        email: "mark@email.com",
        registrationDate: "2026-09-29",
        renewalDate: "2026-09-29",
        address: "789 Rua Augusta, Lisbon, Portugal",
    },
];

export default function VirtualAddressDashboard() {
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState("");

    const filtered = virtualAddresses.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
    );

    const handleView = (address) => {
        setSelectedAddress(address);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedAddress("");
    };

    return (
        <div style={{ padding: '35px' }}>
            <h5 style={{ fontWeight: '600', color: '#3D3D3D' }}>Virtual Address</h5>
            <div className="d-flex justify-content-end mb-3">
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
                        onChange={e => setSearch(e.target.value)}
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
            </div>

            <div
                className="table-responsive p-0"
                style={{
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
                            <th style={{ fontSize: '14px', padding: '12px ' }}>Sr#</th>
                            <th style={{ fontSize: '14px', padding: '12px ' }}>Name</th>
                            <th style={{ fontSize: '14px', padding: '12px ' }}>Email</th>
                            <th style={{ fontSize: '14px', padding: '12px ' }}>Registration Date</th>
                            <th style={{ fontSize: '14px', padding: '12px ' }}>Renewal Date</th>
                            <th style={{ fontSize: '14px', padding: '12px ' }}>Address</th>
                            <th style={{ fontSize: '14px', padding: '12px ' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((item, idx) => (
                            <tr key={item.id} style={{
                                borderBottom: "1px solid #f2f2f2",
                                backgroundColor: idx % 2 === 1 ? "#f8f9fa" : "#fff",
                                height: "48px",
                            }}>
                                <td style={{ fontSize: '14px', padding: '12px ' }}>{idx + 1}</td>
                                <td style={{ fontSize: '14px', padding: '12px ' }}>{item.name}</td>
                                <td style={{ fontSize: '14px', padding: '12px ' }}>{item.email}</td>
                                <td style={{ fontSize: '14px', padding: '12px ' }}>{item.registrationDate}</td>
                                <td style={{ fontSize: '14px', padding: '12px ' }}>{item.renewalDate}</td>
                                <td style={{ fontSize: '14px', padding: '12px ' }}>
                                    <span
                                        style={{ color: "#007C36", textDecoration: "underline", cursor: "pointer", fontWeight: 600 }}
                                        onClick={() => handleView(item.address)}
                                    >
                                        View
                                    </span>
                                </td>
                                <td style={{ fontSize: '14px', padding: '12px ' }}>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-link"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            style={{ padding: 0, border: 'none', background: 'none', textDecoration: 'none' }}
                                        >
                                            <span style={{ fontSize: "22px", color: "#3D3D3D" }}>⋮</span>
                                        </button>
                                        <ul
                                            className="dropdown-menu"
                                            style={{
                                                minWidth: '140px',
                                                borderRadius: '16px',
                                                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                                                padding: '8px 0',
                                                border: 'none',
                                                marginTop: '8px'
                                            }}
                                        >
                                            <li>
                                                <button className="dropdown-item d-flex align-items-center gap-2" style={{ color: '#D32F2F', fontWeight: 500 }}>
                                                    <span style={{ fontSize: '18px' }}>
                                                        {/* Red X icon */}
                                                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                            <circle cx="12" cy="12" r="12" fill="#D32F2F" />
                                                            <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                                                        </svg>
                                                    </span>
                                                    Cancel
                                                </button>
                                            </li>
                                            <li>
                                                <hr style={{ margin: '4px 0', borderColor: '#eee' }} />
                                            </li>
                                            <li>
                                                <button className="dropdown-item d-flex align-items-center gap-2" style={{ color: '#333', fontWeight: 500 }}>
                                                    <span style={{ fontSize: '18px' }}>
                                                        {/* Renew icon */}
                                                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                                                            <path d="M12 4v1M12 19v1M4.22 4.22l.71.71M18.36 18.36l.71.71M1 12h1M22 12h1M4.22 19.78l.71-.71M18.36 5.64l.71-.71M7 12a5 5 0 1 1 10 0" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                                                            <path d="M12 7v5l3 3" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                    Renew
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal for Address View */}
            {showModal && (
                <div
                    className="modal show d-block"
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.15)',
                        position: 'fixed',
                        top: 0, left: 0, width: '100vw', height: '100vh',
                        zIndex: 9999,
                    }}
                    tabIndex="-1"
                >
                    <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
                        <div
                            className="modal-dialog modal-dialog-centered"
                            style={{
                                maxWidth: '600px',
                                width: '100%',
                            }}
                        >
                            <div
                                className="modal-content"
                                style={{
                                    borderRadius: '32px',
                                    border: 'none',
                                    padding: '50px',
                                    boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
                                    background: '#fff',
                                }}
                            >
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h5 className="modal-title fw-bold" style={{ color: '#3D3D3D', fontSize: '22px', marginBottom: 0 }}>
                                        Virtual Address
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={handleCloseModal}
                                        style={{
                                            fontSize: '22px',
                                            lineHeight: '1',
                                            color: '#3D3D3D',
                                            background: 'none',
                                            border: 'none',
                                            fontWeight: 'bold',
                                            marginLeft: '10px',
                                            marginTop: '-4px'
                                        }}
                                        aria-label="Close"
                                    >
                                        &times;
                                    </button>
                                </div>
                                <div className="mb-4">
                                    <div style={{
                                        position: 'relative',
                                        width: '100%',
                                    }}>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedAddress}
                                            readOnly
                                            placeholder="Address"
                                            style={{
                                                borderRadius: '25px',
                                                height: '48px',
                                                fontSize: '16px',
                                                border: '1px solid #79747E',
                                                background: 'transparent',
                                                paddingLeft: '48px',
                                            }}
                                        />
                                        <span style={{
                                            position: 'absolute',
                                            left: '18px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: '#007C36',
                                            fontSize: '22px',
                                            pointerEvents: 'none'
                                        }}>
                                            <svg width="22" height="22" fill="none" stroke="#007C36" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.5 11 9 11s9-5.75 9-11c0-4.97-4.03-9-9-9z" /><circle cx="12" cy="11" r="3" /></svg>
                                        </span>
                                    </div>
                                </div>
                                <button
                                    className="btn w-100"
                                    style={{
                                        borderRadius: '25px',
                                        backgroundColor: '#007C36',
                                        color: '#fff',
                                        height: '48px',
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        marginTop: '8px'
                                    }}
                                    onClick={handleCloseModal}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}