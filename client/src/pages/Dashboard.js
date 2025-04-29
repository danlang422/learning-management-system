import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Different API endpoints based on user role
        const endpoint = user.role === 'teacher' 
          ? '/api/courses/teaching' 
          : '/api/courses/enrolled';
        
        const res = await axios.get(endpoint);
        setCourses(res.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching courses. Please try again later.');
        setLoading(false);
      }
    };

    fetchCourses();
  }, [user.role]);

  const handleLogout = () => {
    logout();
  };

  if (loading) {
    return <div>Loading dashboard...</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {user.name}</h1>
        <button onClick={handleLogout} className="btn btn-outline-danger">
          Logout
        </button>
      </div>

      <div className="dashboard-info">
        <p>Email: {user.email}</p>
        <p>Role: {user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="courses-section">
        <h2>{user.role === 'teacher' ? 'Your Courses' : 'Enrolled Courses'}</h2>
        
        {courses.length === 0 ? (
          <p>
            {user.role === 'teacher'
              ? 'You haven\'t created any courses yet.'
              : 'You are not enrolled in any courses yet.'}
          </p>
        ) : (
          <div className="course-list">
            {courses.map((course) => (
              <div key={course._id} className="course-card">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button className="btn btn-primary">
                  View Course
                </button>
              </div>
            ))}
          </div>
        )}
        
        {user.role === 'teacher' && (
          <button className="btn btn-success mt-3">
            Create New Course
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
