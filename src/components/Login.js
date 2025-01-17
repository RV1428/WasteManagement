import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ match }) => {
  return (
    <div className="container mt-5 text-center">
      <h2>Login</h2>
      <form className="d-flex flex-column align-items-center">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>

      <p className="mt-3">Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default Login;
