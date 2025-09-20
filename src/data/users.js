// User data for different services
export const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@nif.com',
        password: 'nif123',
        service: 'nif',
        role: 'NIF Service User',
        phone: '+1 234 567 8900',
        profileImage: '/assets/img/team/team-1.jpg'
    },
    {
        id: 2,
        name: 'Sarah Wilson',
        email: 'sarah.wilson@company.com',
        password: 'company123',
        service: 'company',
        role: 'Company Service User',
        phone: '+1 234 567 8901',
        profileImage: '/assets/img/team/team-2.jpg'
    },
    {
        id: 3,
        name: 'Mike Johnson',
        email: 'mike.johnson@virtual.com',
        password: 'virtual123',
        service: 'virtual-office',
        role: 'Virtual Office User',
        phone: '+1 234 567 8902',
        profileImage: '/assets/img/team/team-3.jpg'
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
