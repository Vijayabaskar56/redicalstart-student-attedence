## server

- index.js
-
- This is the main entry point for the backend server.
-
- It starts by loading environment variables from a .env file and configuration from a config.json file.
- Then, it overrides some of the development configuration with environment variables.
-
- It imports necessary modules such as express for server creation, cors for handling Cross-Origin Resource Sharing,
- and various controllers for handling different API endpoints.
-
- It sets up the express application, applies middleware for CORS and JSON body parsing,
- and defines routes for various API endpoints.
-
- Finally, it starts the server on a specified port.
-
- Environment Variables:
- - DEV_USERNAME: The username for the development database.
- - DEV_PASSWORD: The password for the development database.
- - DEV_DATABASE: The name of the development database.
- - DEV_HOST: The host of the development database.
- - PORT: The port on which the server will run.
-
- API Endpoints:
- - GET /api/healthcheck: Returns the status of the database.
- - GET /api/getstudents: Returns a list of all students.
- - POST /api/addstudent: Adds a new student.
- - PUT /api/updatestudent/:id: Updates an existing student.
- - DELETE /api/deletestudent/:id: Deletes an existing student.

### Running the Application

To run the application, follow these steps:
Install the dependencies:

```
npm install
```

Start the application:

```
npm start
```

The application will start on Specified PORT.
