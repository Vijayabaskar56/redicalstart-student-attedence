## Sql Server

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

## Environment Variables

The application uses the following environment variables for its database configuration:

- `DB_HOST`: The hostname of the MySQL server. Default is `localhost`.
- `DB_USER`: The username to connect to the MySQL server. Default is `root`.
- `DB_PASS`: The password to connect to the MySQL server. Default is `root1437`.
- `DB_NAME`: The name of the MySQL database. Default is `student`.

These environment variables are stored in a `.env` file. Here's an example:

-
- API Endpoints:
- - GET /api/healthcheck: Returns the status of the database.
- - GET /api/getstudents: Returns a list of all students.
- - POST /api/addstudent: Adds a new student.
- - PUT /api/updatestudent/:id: Updates an existing student.
- - DELETE /api/deletestudent/:id: Deletes an existing student.

Running the Application
To run the application, follow these steps:

Install the dependencies:
Start the application:
The application will start on Specified PORT.
