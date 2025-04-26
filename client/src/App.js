import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages when they are created
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Learning Management System</h1>
          <p>Coming soon! We're currently setting up the authentication system.</p>
        </header>
        <main>
          {/* Routes will be added here in the next phase */}
          <Routes>
            <Route path="/" element={<div>Home Page - Coming Soon</div>} />
            <Route path="/login" element={<div>Login Page - Coming Soon</div>} />
            <Route path="/register" element={<div>Register Page - Coming Soon</div>} />
            <Route path="/dashboard" element={<div>Dashboard - Coming Soon</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;