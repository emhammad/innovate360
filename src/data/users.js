export const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'admin@innovate360.com',
        password: 'admin123',
        role: 'Admin',
        phone: '+1 234 567 8900',
        profileImage: '/assets/img/team/team-1.jpg',
        service: 'all'
    },
    {
        id: 2,
        name: 'Ali Lawyer',
        email: 'lawyer@innovate360.com',
        password: 'lawyer123',
        role: 'Lawyer',
        phone: '+1 987 654 3210',
        profileImage: '/assets/img/team/team-2.jpg',
        service: 'legal'
    },
    {
        id: 3,
        name: 'Michael User',
        email: 'user@innovate360.com',
        password: 'user123',
        role: 'User',
        phone: '+1 555 666 7777',
        profileImage: '/assets/img/team/team-3.jpg',
        service: 'basic'
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