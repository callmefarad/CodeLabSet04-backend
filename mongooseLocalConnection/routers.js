// import express and Router() method from express
const express = require("express");
const router = express.Router();

const {
  newStudent,
  allStudents,
  singleStudent,
  removeStudent,
  updateStudent,
} = require("./controller");

// METHOD: POST a student
router.post("/student", newStudent);

// METHOD: GET all student
router.get("/student", allStudents);

// METHOD: GET a student
router.get("/student/:id", singleStudent);

// METHOD: DELETE a student
router.delete("/student/:id", removeStudent);

// METHOD: PATCH a student
router.patch("/student/:id", updateStudent);

// export the router module for public use
module.exports = router;
