# Doctor Appointment Application

A modular Node.js Express application with EJS templating for managing doctor appointments.

## Project Architecture

This project follows a modular architecture with clear separation of concerns using the MVC (Model-View-Controller) pattern:

```
doctor-app/
├── src/                    # Application source code
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   ├── middlewares/        # Custom middleware functions
│   ├── models/             # Database models
│   ├── routes/             # API routes definitions
│   ├── services/           # Business logic
│   ├── utils/              # Utility functions
│   ├── views/              # EJS templates
│   └── app.js              # Application entry point
├── public/                 # Static assets
│   ├── css/                # Stylesheets
│   ├── js/                 # Client-side JavaScript
│   └── images/             # Image files
├── tests/                  # Test files
│   ├── unit/               # Unit tests
│   ├── integration/        # Integration tests
│   └── e2e/                # End-to-end tests
├── .env.example            # Environment variables example
├── .eslintrc.js            # ESLint configuration
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## Development Guidelines

### Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and configure environment variables
4. Run the development server: `npm run dev`

### Coding Standards

- Follow the Airbnb JavaScript Style Guide
- Use ESLint for code linting
- Write meaningful commit messages
- Document all functions and modules

### Modular Development

#### Feature-Based Structure

Each major feature should be organized in its own module with the following structure:

```
src/modules/feature-name/
├── controllers/
├── models/
├── routes/
├── services/
└── views/
```

#### API Structure

API endpoints should follow RESTful conventions:

- GET /api/resource - List all resources
- GET /api/resource/:id - Get a specific resource
- POST /api/resource - Create a new resource
- PUT /api/resource/:id - Update a resource
- DELETE /api/resource/:id - Delete a resource

### Testing Strategy

- Unit tests for individual functions and components
- Integration tests for API endpoints
- End-to-end tests for critical user flows

### Collaboration Workflow

1. Create feature branches from the main branch
2. Submit pull requests for code review
3. Merge to main after approval
4. Deploy from the main branch

## Core Modules

- **Authentication**: User registration, login, and authorization
- **Doctors**: Doctor profiles, specialties, and availability
- **Patients**: Patient profiles and medical history
- **Appointments**: Scheduling and managing appointments
- **Notifications**: Email notifications

## Technology Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templates, JavaScript, CSS
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Testing**: Jest

## Team Roles and Responsibilities

- **Backend Developer**: API development, database design, business logic
- **Frontend Developer**: UI implementation, client-side functionality
