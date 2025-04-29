import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to Our Learning Management System</h1>
        <p className="lead">
          A flexible platform for creating and managing educational content
        </p>
        
        {isAuthenticated ? (
          <Link to="/dashboard" className="btn btn-primary btn-lg">
            Go to Dashboard
          </Link>
        ) : (
          <div className="cta-buttons">
            <Link to="/login" className="btn btn-primary btn-lg">
              Sign In
            </Link>
            <Link to="/register" className="btn btn-outline-primary btn-lg ml-3">
              Sign Up
            </Link>
          </div>
        )}
      </div>

      <div className="features">
        <h2>Key Features</h2>
        
        <div className="feature-list">
          <div className="feature">
            <h3>Customizable Workflows</h3>
            <p>
              Create learning paths tailored to your teaching style and student needs.
            </p>
          </div>
          
          <div className="feature">
            <h3>Interactive Content</h3>
            <p>
              Engage students with multimedia content and interactive assignments.
            </p>
          </div>
          
          <div className="feature">
            <h3>Progress Tracking</h3>
            <p>
              Monitor student progress and provide timely feedback.
            </p>
          </div>
          
          <div className="feature">
            <h3>Flexible Assessment</h3>
            <p>
              Create various types of assessments to evaluate student learning.
            </p>
          </div>
        </div>
      </div>

      <div className="roles">
        <h2>Who Can Benefit?</h2>
        
        <div className="role-list">
          <div className="role">
            <h3>Teachers</h3>
            <p>
              Create and manage courses, assignments, and learning materials.
              Track student progress and provide feedback.
            </p>
          </div>
          
          <div className="role">
            <h3>Students</h3>
            <p>
              Access course materials, submit assignments, and track your
              learning progress all in one place.
            </p>
          </div>
          
          <div className="role">
            <h3>Administrators</h3>
            <p>
              Manage users, courses, and system settings. Generate reports
              and analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
