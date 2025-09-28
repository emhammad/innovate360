import { useState, useEffect } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Profile() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        profileImage: '/assets/img/team/team-2.jpg'
    });

    const [isEditing, setIsEditing] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const userData = localStorage.getItem("currentUser");
        if (userData) {
            const user = JSON.parse(userData);
            setFormData({
                name: user.name || '',
                email: user.email || '',
                phone: user.phone || '',
                password: user.password ? '123123' : '',
                profileImage: user.profileImage || '/assets/img/team/team-2.jpg'
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

    const handleEdit = (e) => {
        e.preventDefault();
        setIsEditing(true)
    };

    const handleCancel = () => {
        setIsEditing(false);
        const userData = localStorage.getItem("currentUser");
        if (userData) {
            const user = JSON.parse(userData);
            setFormData({
                name: user.name || '',
                email: user.email || '',
                phone: user.phone || '',
                password: user.password ? '123123' : '',
                profileImage: user.profileImage || '/assets/img/team/team-1.jpg'
            });
        }
    };

    return (
        <div style={{ padding: '35px' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 style={{ fontWeight: '600', color: '#3D3D3D', fontSize: '24px' }}>Profile</h5>
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
                        src={formData.profileImage}
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

                <form style={{ width: '100%', padding: '0 40px' }}>
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
                            disabled={!isEditing}
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
                            disabled={!isEditing}
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
                            disabled={!isEditing}
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
                            type={showPassword ? "text" : "password"}
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
                                paddingRight: '50px',
                                paddingBottom: '15px',
                                paddingLeft: '50px',
                                opacity: 1,
                                borderWidth: '1px',
                                border: '1px solid #3D3D3D40',
                                background: 'transparent',
                                fontSize: '14px',
                                backgroundColor: isEditing ? 'transparent' : '#f8f9fa'
                            }}
                            disabled={!isEditing}
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
                        {/* Eye Icon */}
                        <span
                            style={{
                                position: "absolute",
                                right: "20px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                cursor: isEditing ? "pointer" : "not-allowed",
                                zIndex: 10,
                                color: "#6c757d"
                            }}
                            onClick={() => isEditing && setShowPassword(prev => !prev)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex gap-3 justify-content-center">
                        {!isEditing ? (
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
                                Edit
                            </button>
                        ) : (
                            <>
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    onClick={handleSubmit}
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
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-light"
                                    onClick={handleCancel}
                                    style={{
                                        border: '1px solid #dee2e6',
                                        borderRadius: '25px',
                                        height: '48px',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        padding: '0 40px',
                                        width: '100%'
                                    }}
                                >
                                    Cancel
                                </button>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}