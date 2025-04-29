import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load user from localStorage on initial mount
  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          setLoading(false);
          return;
        }

        // Set default headers for all axios requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        // Get user data
        const res = await axios.get('/api/auth/me');
        
        setUser(res.data);
        setIsAuthenticated(true);
        setLoading(false);
      } catch (err) {
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // Register user
  const register = async (formData) => {
    try {
      setError(null);
      const res = await axios.post('/api/auth/register', formData);
      
      // Save token to localStorage
      localStorage.setItem('token', res.data.token);
      
      // Set default headers for all axios requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      
      // Set user state
      setUser(res.data.user);
      setIsAuthenticated(true);
      
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during registration');
      return false;
    }
  };

  // Login user
  const login = async (formData) => {
    try {
      setError(null);
      const res = await axios.post('/api/auth/login', formData);
      
      // Save token to localStorage
      localStorage.setItem('token', res.data.token);
      
      // Set default headers for all axios requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      
      // Set user state
      setUser(res.data.user);
      setIsAuthenticated(true);
      
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
      return false;
    }
  };

  // Logout user
  const logout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    
    // Remove default headers
    delete axios.defaults.headers.common['Authorization'];
    
    // Reset state
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        error,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
