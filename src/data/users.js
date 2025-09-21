// Single user who can access all services
export const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'admin@innovate360.com',
        password: 'admin123',
        role: 'Admin User',
        phone: '+1 234 567 8900',
        profileImage: '/assets/img/team/team-1.jpg'
    }
];

// Function to authenticate user
export const authenticateUser = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    return user || null;
};

// Function to get user by service
export const getUserByService = (service) => {
    return users.find(u => u.service === service);
};
