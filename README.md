# Project Documentation

This project is a full-stack application that provides a platform for managing student data.

## Frontend

- Used React, React-router's and Bootstrap

## Backend

| note : I first made a server using superbase with postgres data base by using sequelize ORM, that was this one, then after the feedback to use mysql I create a server with mysql

- postsqlserver
- - Sequelize ORM
- - Superbase for backend with postgreSql
- - express.js server

- sqlserver
- - express.js server
- - mysql as a database
- - no ORM is used

## API Endpoints

- GET /api/healthcheck: Returns the status of the database.
- GET /api/getstudents: Returns a list of all students.
- POST /api/addstudent: Adds a new student.
- PUT /api/updatestudent/:id: Updates an existing student.
- DELETE /api/deletestudent/:id: Deletes an existing student.
