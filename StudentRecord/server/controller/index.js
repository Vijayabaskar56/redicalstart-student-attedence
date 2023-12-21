const addStudent = require("./addStudent.js");
const deleteStudent = require("./deleteStudent.js");
const getStudent = require("./getStudent.js");
const healthcheck = require("./healthcheck.js");
const updateStudent = require("./updateStudents.js");

const index = {
  addStudent,
  deleteStudent,
  getStudent,
  healthcheck,
  updateStudent,
};

module.exports = index;
