// importing the model
const studentModel = require("./model2");

// create new student
// REQUEST METHOD: POST
const newStudent = async (req, res) => {
  try {
    const student = await studentModel.create({
      name: req.body.name,
      courses: [req.body.courses],
      grade: {
        NodeJs: req.body.grade.NodeJs,
        Python: req.body.grade.Python,
        ReactJs: req.body.grade.ReactJs,
        JavaScript: req.body.grade.JavaScript,
        CSS: req.body.grade.CSS,
        HTML: req.body.grade.HTML,
      },
    });
    res.json({ message: "Student created successfully", data: student });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

// get all students
// REQUEST METHOD: GET
const allStudents = async (req, res) => {
  try {
    const students = await studentModel.find();
    if (!students) {
      res.json(404).json({ message: "No Student Found In The Database." });
    }
    res.json({ message: "All set04 students", data: students });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// get a single student
// REQUEST METHOD: GET
const singleStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const students = await studentModel.findById(id);
    if (!students) {
      res.json({ message: `No student with id: ${id}` });
    }
    res.json({ message: `I am ${students.name}`, data: students });
  } catch (error) {
    res.json({
      message: `Error trying to get user with id: ${req.params.id}`,
      error: error.message,
    });
  }
};

// delete a student
// REQUEST METHOD: DELETE
const removeStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findById(id);
    if (!student) {
      res.json({ message: `No student with id: ${id}` });
    }
    const removedStudent = student.deleteOne();
    res.json({
      message: "The Student Was Successfully removed.",
    });
  } catch (error) {
    res.json({
      message: `Unable to delete ${id}`,
      error: error.message,
    });
  }
};

// update a student
// REQUEST METHOD: PATCH
const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findById(id);
    if (!student) {
      res.status(404).json({ message: "No student with this id: ${id}" });
    }

    const data = {
      name: req.body.name,
      course: req.body.course,
      grade: {
        NodeJs: req.body.grade.NodeJs,
        Python: req.body.grade.Python,
        ReactJs: req.body.grade.ReactJs,
        JavaScript: req.body.grade.JavaScript,
        CSS: req.body.grade.CSS,
        HTML: req.body.grade.HTML,
      },
    };
    const updatedStudent = await student.updateOne(data);
    res
      .status(200)
      .json({ message: "Student updated successfully", data: updatedStudent });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  newStudent,
  allStudents,
  singleStudent,
  removeStudent,
  updateStudent,
};
