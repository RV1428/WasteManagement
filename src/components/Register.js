import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    phoneNumber: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add the logic to handle the form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        <div className="mb-3">
          {/* <label htmlFor="firstName" className="form-label">First Name:</label> */}
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder='firstname'
            required
          />
        </div>

        <div className="mb-3">
          {/* <label htmlFor="lastName" className="form-label">Last Name:</label> */}
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder='lastname'
            required
          />
        </div>

        <div className="mb-3">
          {/* <label htmlFor="username" className="form-label">Username:</label> */}
          <input
            type="text"
            className="form-control col"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder='username'
            required
          />
        </div>

        <div className="mb-3">
          {/* <label htmlFor="phoneNumber" className="form-label">Phone Number:</label> */}
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder='Mobileno'
            required
          />
        </div>

        <div className="mb-3">
          {/* <label htmlFor="email" className="form-label">Email:</label> */}
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='email'
            required
          />
        </div>

        <div className="mb-3">
          {/* <label htmlFor="address" className="form-label">Address:</label> */}
          <textarea
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder='address'
            required
          ></textarea>
        </div>

        <div className="mb-3">
          {/* <label htmlFor="password" className="form-label">Password:</label> */}
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='password'
            required
          />
        </div>

        <div className="mb-3">
          {/* <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label> */}
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder='confirm password'
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
