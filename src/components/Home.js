import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
  <div className="container mt-5 align-center text-center">
    <h1 className="mb-4">Welcome to Our Page</h1>
    <div className="d-grid gap-3 justify-content-center">
      <Link to="/login/user" style={{backgroundColor:"#0eb718"}} className="btn btn-secondary btn-margin row">User</Link>
      <Link to="/login/truck driver" style={{backgroundColor:"#0eb718"}} className="btn btn-secondary btn-margin row">Truck Driver</Link>
      <Link to="/login/municipality" style={{backgroundColor:"#0eb718"}} className="btn btn-secondary btn-margin row">Municipality</Link>
    </div>
  </div>
);

export default Home;
