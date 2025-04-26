# Learning Management System

A flexible Learning Management System with customizable workflows, built with the MERN stack (MongoDB, Express, React, Node.js).

## Project Vision

This LMS aims to provide a customizable platform for educators that goes beyond traditional learning management systems by offering:

- Flexible workflow customization
- Intuitive content creation and management
- Robust student progress tracking
- Future AI integration for personalized learning

## Technology Stack

- **Frontend**: React
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Current Status

This project is in the foundation phase. We are currently setting up the repository structure and implementing the authentication system.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local instance or Atlas)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/danlang422/learning-management-system.git
   cd learning-management-system
   ```

2. Install dependencies
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   
   # Install server dependencies
   cd ../server
   npm install
   ```

3. Set up environment variables
   - Create a `.env` file in the server directory
   - Add the following variables:
     ```
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. Run the development server
   ```bash
   # Start the backend server
   cd server
   npm run dev
   
   # In a separate terminal, start the frontend
   cd client
   npm start
   ```

## Project Roadmap

### Phase 1: Foundation (Current)
- [x] Select technology stack
- [x] Establish collaboration framework
- [x] Create basic project structure
- [x] Set up authentication framework
- [ ] Implement frontend authentication components
- [ ] Connect to MongoDB database

### Phase 2: Core LMS Features
- [ ] Course management
- [ ] Basic content creation and display
- [ ] Assignment framework
- [ ] User dashboard
- [ ] Student progress tracking

### Phase 3-5: Additional Features
- Customizable workflows
- Advanced content tools
- AI integration
- Analytics and more

## Contributing

This project is currently in early development.

## License

This project is licensed under the MIT License.