# Learning Management System

A flexible Learning Management System with customizable workflows for educational institutions.

## Project Overview

This LMS aims to provide a comprehensive solution for managing educational content, student progress, and assessment workflows. It offers customizable features for teachers, a streamlined experience for students, and robust tools for administrators.

## Current Status

The project is currently in the initial development phase with the authentication system implemented and connected to MongoDB. The frontend includes user registration, login, and a basic dashboard interface.

## Features Implemented

- **Authentication System**
  - User registration with role selection (teacher/student)
  - User login with JWT authentication
  - Protected routes for authenticated users
  - Role-based access control

- **Database Integration**
  - MongoDB Atlas cloud database connection
  - User, Course, and Assignment data models

- **Frontend Components**
  - Responsive navigation bar
  - Home page with feature showcase
  - Login and registration forms
  - Basic dashboard interface
  
## Technology Stack

### Frontend
- React.js for the user interface
- React Router for navigation
- Context API for state management
- Custom CSS for styling

### Backend
- Node.js runtime environment
- Express.js framework
- JWT for authentication
- MongoDB for database storage
- Mongoose ODM for data modeling

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB Atlas account

### Installation

1. Clone the repository
```
git clone https://github.com/danlang422/learning-management-system.git
cd learning-management-system
```

2. Install server dependencies
```
cd server
npm install
```

3. Configure environment variables
Create a `.env` file in the server directory with the following variables:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
PORT=5000
```

4. Install client dependencies
```
cd ../client
npm install
```

5. Run the development servers

For the backend:
```
cd ../server
npm run dev
```

For the frontend (in a new terminal):
```
cd ../client
npm start
```

The application should now be running at [http://localhost:3000](http://localhost:3000)

## Next Steps

- Complete authentication flow testing
- Implement course creation and management
- Develop content creation tools
- Build assignment submission system
- Create student progress tracking

## License

This project is licensed under the MIT License - see the LICENSE file for details.
