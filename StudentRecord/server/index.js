// eslint-disable-fil no-undef
require("dotenv").config();
const config = require("./config/config.json");

config.development.username = process.env.DEV_USERNAME;
config.development.password = process.env.DEV_PASSWORD;
config.development.database = process.env.DEV_DATABASE;
config.development.host = process.env.DEV_HOST;

config.production.username = process.env.DEV_USERNAME;
config.production.password = process.env.DEV_PASSWORD;
config.production.database = process.env.DEV_DATABASE;
config.production.host = process.env.DEV_HOST;

const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./models/index.js");
const { Students } = require("./models/");
const healthcheck = require("./controller/healthcheck.js");
const {
  getStudent,
  addStudent,
  deleteStudent,
  updateStudent,
} = require("./controller/index.js");
const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow all methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow all headers
};

app.use(cors(corsOptions));
app.use(express.json());
app.get("/api/healthcheck", healthcheck(db));
app.get("/api/getstudents", getStudent(Students));
app.post("/api/addstudent", addStudent(Students));
app.put("/api/updatestudent/:id", updateStudent(Students));
app.delete("/api/deletestudent/:id", deleteStudent(Students));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
