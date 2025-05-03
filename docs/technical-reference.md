# Technical Reference

## Technology Stack

### Frontend
- **Framework**: React 18
- **Routing**: React Router 6
- **HTTP Client**: Axios
- **Build Tool**: Create React App

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcryptjs

### Database
- **Database**: MongoDB
- **ODM**: Mongoose

## Core Models

### User Model
- **Fields**: name, email, password (hashed), role, createdAt
- **Roles**: student, teacher, admin
- **Methods**: getSignedJwtToken, matchPassword

### Course Model
- **Fields**: title, description, createdBy, students, isPublished, createdAt
- **Relationships**: createdBy (User), students (array of Users)
- **Virtual Fields**: content

### Assignment Model
- **Fields**: title, description, course, dueDate, pointsPossible, submissionType, createdAt
- **Relationships**: course (Course)
- **Virtual Fields**: submissions

## API Routes

### Authentication Routes
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Authenticate user & get token
- `GET /api/auth/me` - Get current user
- `GET /api/auth/logout` - Logout user

### User Routes (Planned)
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Course Routes (Planned)
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course by ID
- `POST /api/courses` - Create new course (teacher/admin only)
- `PUT /api/courses/:id` - Update course (owner/admin only)
- `DELETE /api/courses/:id` - Delete course (owner/admin only)