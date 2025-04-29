import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    role: 'student' // Default role
  });
  const [formErrors, setFormErrors] = useState({});
  const { name, email, password, password2, role } = formData;
  const { register, isAuthenticated, error } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  // Update form errors when context error changes
  useEffect(() => {
    if (error) {
      setFormErrors({ general: error });
    }
  }, [error]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear errors when user types
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: null });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!name) {
      errors.name = 'Name is required';
    }
    
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    if (password !== password2) {
      errors.password2 = 'Passwords do not match';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Remove password2 from the data sent to the server
      const registerData = {
        name,
        email,
        password,
        role
      };
      
      await register(registerData);
    }
  };

  return (
    <div className="register-container">
      <h2>Sign Up</h2>
      <p className="lead">Create your account</p>
      
      {formErrors.general && (
        <div className="alert alert-danger">{formErrors.general}</div>
      )}
      
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={onChange}
            className={formErrors.name ? 'form-control is-invalid' : 'form-control'}
          />
          {formErrors.name && (
            <div className="invalid-feedback">{formErrors.name}</div>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onChange}
            className={formErrors.email ? 'form-control is-invalid' : 'form-control'}
          />
          {formErrors.email && (
            <div className="invalid-feedback">{formErrors.email}</div>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
            className={formErrors.password ? 'form-control is-invalid' : 'form-control'}
          />
          {formErrors.password && (
            <div className="invalid-feedback">{formErrors.password}</div>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            id="password2"
            value={password2}
            onChange={onChange}
            className={formErrors.password2 ? 'form-control is-invalid' : 'form-control'}
          />
          {formErrors.password2 && (
            <div className="invalid-feedback">{formErrors.password2}</div>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            name="role"
            id="role"
            value={role}
            onChange={onChange}
            className="form-control"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      
      <p className="mt-3">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default Register;
