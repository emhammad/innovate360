import { useState, useEffect } from "react";
import Image from "next/image";

export default function Profile() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '••••••••'
    });

    const [isEditing, setIsEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Get current user from localStorage
        const user = localStorage.getItem('currentUser');
        if (user) {
            const userData = JSON.parse(user);
            setCurrentUser(userData);
            setFormData({
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                password: '••••••••'
            });
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Profile updated:', formData);
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Reset form data to original values
        if (currentUser) {
            setFormData({
                name: currentUser.name,
                email: currentUser.email,
                phone: currentUser.phone,
                password: '••••••••'
            });
        }
    };

    return (
        <div style={{ padding: '35px' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h5 style={{ fontWeight: '600', color: '#3D3D3D', fontSize: '24px' }}>Profile</h5>
                    {currentUser && (
                        <p style={{ color: '#6c757d', fontSize: '14px', margin: '5px 0 0 0' }}>
                            {currentUser.role} • {currentUser.service.toUpperCase()} Service
                        </p>
                    )}
                </div>
            </div>

            <div
                className="d-flex flex-column align-items-center justify-content-center py-5"
                style={{
                    marginTop: '40px',
                    backgroundColor: "#fff",
                    borderRadius: "15px",
                    boxShadow: "0px 18px 40px 0px #0000001A",
                    minHeight: '500px',
                    maxWidth: '500px',
                    margin: '40px auto 0 auto'
                }}
            >
                {/* Profile Picture */}
                <div className="position-relative mb-4">
                    <Image
                        src={currentUser?.profileImage || "/assets/img/team/team-1.jpg"}
                        alt="Profile Picture"
                        width={120}
                        height={120}
                        className="rounded-circle"
                        style={{ objectFit: 'cover' }}
                    />
                    {/* Green Check Badge */}
                    <div
                        className="position-absolute rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: '#28a745',
                            bottom: '5px',
                            right: '5px',
                            border: '3px solid white'
                        }}
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>

                <form onSubmit={handleSubmit} style={{ width: '100%', padding: '0 40px' }}>
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
                                borderRadius: '25px',
                                paddingTop: '15px',
                                paddingRight: '20px',
                                paddingBottom: '15px',
                                paddingLeft: '50px',
                                opacity: 1,
                                borderWidth: '1px',
                                border: '1px solid #3D3D3D40',
                                background: 'transparent',
                                fontSize: '14px',
                                backgroundColor: isEditing ? 'transparent' : '#f8f9fa'
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
                                borderRadius: '25px',
                                paddingTop: '15px',
                                paddingRight: '20px',
                                paddingBottom: '15px',
                                paddingLeft: '50px',
                                opacity: 1,
                                borderWidth: '1px',
                                border: '1px solid #3D3D3D40',
                                background: 'transparent',
                                fontSize: '14px',
                                backgroundColor: isEditing ? 'transparent' : '#f8f9fa'
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

                    {/* Phone Field */}
                    <div className="mb-3 position-relative">
                        <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            style={{
                                width: '100%',
                                height: '54px',
                                borderRadius: '25px',
                                paddingTop: '15px',
                                paddingRight: '20px',
                                paddingBottom: '15px',
                                paddingLeft: '50px',
                                opacity: 1,
                                borderWidth: '1px',
                                border: '1px solid #3D3D3D40',
                                background: 'transparent',
                                fontSize: '14px',
                                backgroundColor: isEditing ? 'transparent' : '#f8f9fa'
                            }}
                        />
                        <Image
                            src="/assets/img/icon/sms.png"
                            alt="Phone Icon"
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

                    {/* Password Field */}
                    <div className="mb-4 position-relative">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            style={{
                                width: '100%',
                                height: '54px',
                                borderRadius: '25px',
                                paddingTop: '15px',
                                paddingRight: '20px',
                                paddingBottom: '15px',
                                paddingLeft: '50px',
                                opacity: 1,
                                borderWidth: '1px',
                                border: '1px solid #3D3D3D40',
                                background: 'transparent',
                                fontSize: '14px',
                                backgroundColor: isEditing ? 'transparent' : '#f8f9fa'
                            }}
                        />
                        <Image
                            src="/assets/img/icon/sms.png"
                            alt="Password Icon"
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

                    {/* Action Buttons */}
                    <div className="d-flex gap-3 justify-content-center">

                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={handleEdit}
                            style={{
                                backgroundColor: '#007C36',
                                border: 'none',
                                borderRadius: '25px',
                                height: '48px',
                                fontSize: '16px',
                                fontWeight: '600',
                                padding: '0 40px',
                                width: '100%'
                            }}
                        >
                            Confirm
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}
