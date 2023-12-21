const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 4000;

// MySQL connection configuration
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1437",
  database: "student",
});

const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow all methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow all headers
};

app.use(cors(corsOptions));
app.use(express.json());

// Controller
// Health check
app.get("/api/healthcheck", (req, res) => {
  connection.query("SELECT 1", (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ status: "Failed to connect" });
    }

    res.status(200).json({ status: "Successfully connected" });
  });
});

// Get all students
app.get("/api/getstudents", (req, res) => {
  connection.query("SELECT * FROM Students ORDER BY id ASC", (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.status(200).send(results);
  });
});

// Add a student
app.post("/api/addstudent", (req, res) => {
  const { name, email, lastName, about, education, location, dob } = req.body;

  connection.query(
    "SELECT * FROM Students WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      if (results.length > 0) {
        return res.status(400).json({ error: "Student already exists" });
      }

      connection.query(
        "INSERT INTO Students SET ?",
        {
          name: name,
          email: email,
          lastName: lastName,
          about: about,
          education: education,
          location: location,
          dob: new Date(dob),
        },
        (err, result) => {
          if (err) {
            return res.status(400).json({ error: err });
          }

          res.status(201).json({
            student: {
              id: result.insertId,
              name,
              email,
              lastName,
              about,
              education,
              location,
              dob,
            },
          });
        }
      );
    }
  );
});

// Update a student
app.put("/api/updatestudent/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, lastName, about, education, dob, location } = req.body;

  connection.query(
    "SELECT * FROM Students WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      if (results.length === 0) {
        return res.status(400).json({ error: "Student does not exist" });
      }

      connection.query(
        "UPDATE Students SET name = ?, email = ?, lastName = ?, about = ?, education = ?, dob = ?, location = ? WHERE id = ?",
        [name, email, lastName, about, education, new Date(dob), location, id],
        (err, result) => {
          if (err) {
            return res.status(400).json({ error: err });
          }

          res.status(200).json({ message: "Student updated" });
        }
      );
    }
  );
});

// Delete a student
app.delete("/api/deletestudent/:id", (req, res) => {
  const { id } = req.params;

  connection.query(
    "DELETE FROM Students WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Student not found" });
      }

      res.status(200).json({ message: "Student deleted successfully" });
    }
  );
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
