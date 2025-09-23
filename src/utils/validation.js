// Validation utility functions
export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const validateName = (name) => {
  // At least 2 characters, only letters and spaces
  const nameRegex = /^[a-zA-Z\s]{2,}$/;
  return nameRegex.test(name.trim());
};

export const validatePhone = (phone) => {
  // Basic phone validation - at least 10 digits
  const phoneRegex = /^\d{10,}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

export const getEmailErrorMessage = (email) => {
  if (!email) return 'Email is required';
  if (!validateEmail(email)) return 'Please enter a valid email address';
  return '';
};

export const getPasswordErrorMessage = (password) => {
  if (!password) return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters long';
  if (!/(?=.*[a-z])/.test(password)) return 'Password must contain at least one lowercase letter';
  if (!/(?=.*[A-Z])/.test(password)) return 'Password must contain at least one uppercase letter';
  if (!/(?=.*\d)/.test(password)) return 'Password must contain at least one number';
  return '';
};

export const getNameErrorMessage = (name) => {
  if (!name) return 'Name is required';
  if (name.trim().length < 2) return 'Name must be at least 2 characters long';
  if (!validateName(name)) return 'Name can only contain letters and spaces';
  return '';
};

export const getPhoneErrorMessage = (phone) => {
  if (!phone) return 'Phone number is required';
  const cleanPhone = phone.replace(/\D/g, '');
  if (cleanPhone.length < 10) return 'Please enter a valid phone number';
  return '';
};

export const validateForm = (formData) => {
  const errors = {};
  
  errors.name = getNameErrorMessage(formData.name);
  errors.email = getEmailErrorMessage(formData.email);
  errors.phone = getPhoneErrorMessage(formData.phone);
  errors.password = getPasswordErrorMessage(formData.password);
  
  return {
    isValid: Object.values(errors).every(error => error === ''),
    errors
  };
};
