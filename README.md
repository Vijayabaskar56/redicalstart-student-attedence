# Project Documentation

This project is a full-stack application that provides a platform for managing student data.

## Backend

The backend is a Node.js server built with Express. It uses Sequelize as an ORM to interact with a PostgreSQL database.

### Main Files:

- `index.js`: This is the main entry point for the server. It sets up the Express application, defines routes, and starts the server.

- `models/student.js`: This file defines the Student model for Sequelize.

- `controllers/studentController.js`: This file contains the logic for handling requests related to students.

- `config/config.json`: This file contains configuration for different environments.

## Frontend

The frontend is a React application that provides a user interface for managing student data.

### Main Files:

- `App.jsx`: This is the main entry point for the React application. It sets up routing and renders the main application component.

- `pages/Dashboard.jsx`: This component displays a list of all students.

- `pages/Form.jsx`: This component displays a form for adding or editing a student.

- `pages/Error.jsx`: This component displays an error message.

- `utils/index.js`: This file contains utility functions for making API requests.

## API Endpoints

- GET /api/healthcheck: Returns the status of the database.
- GET /api/getstudents: Returns a list of all students.
- POST /api/addstudent: Adds a new student.
- PUT /api/updatestudent/:id: Updates an existing student.
- DELETE /api/deletestudent/:id: Deletes an existing student.

## Environment Variables

- DEV_USERNAME: The username for the development database.
- DEV_PASSWORD: The password for the development database.
- DEV_DATABASE: The name of the development database.
- DEV_HOST: The host of the development database.
- PORT: The port on which the server will run.
