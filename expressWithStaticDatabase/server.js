const express = require("express");
const port = 2021;

const app = express();
app.use(express.json());

// dummy data for student collection
const studentInfo = [
  {
    id: 1,
    name: "Miracle",
    course: "Frontend",
    grade: {
      NodeJs: 55,
      Python: 80,
      ReactJs: 45,
      JavaScript: 60,
      CSS: 12,
      HTML: 89,
    },
  },
  {
    id: 2,
    name: "Colin",
    course: "FullStack",
    grade: {
      NodeJs: 90,
      Python: 80,
      ReactJs: 80,
      JavaScript: 80,
      CSS: 75,
      HTML: 90,
    },
  },
  {
    id: 3,
    name: "Joe",
    course: "FullStack",
    grade: {
      NodeJs: 90,
      Python: 80,
      ReactJs: 85,
      JavaScript: 80,
      CSS: 80,
      HTML: 50,
    },
  },
  {
    id: 4,
    name: "Martin",
    course: "FullStack",
    grade: {
      NodeJs: 80,
      Python: 90,
      ReactJs: 80,
      JavaScript: 80,
      CSS: 75,
      HTML: 80,
    },
  },
  {
    id: 5,
    name: "Ebuka",
    course: "Frontend",
    grade: {
      NodeJs: 70,
      Python: 90,
      ReactJs: 20,
      JavaScript: 80,
      CSS: 90,
      HTML: 95,
    },
  },
  {
    id: 6,
    name: "Godwin",
    course: "Frontend",
    grade: {
      NodeJs: 23,
      Python: 70,
      ReactJs: 50,
      JavaScript: 50,
      CSS: 30,
      HTML: 20,
    },
  },
  {
    id: 7,
    name: "David",
    course: "FullStack",
    grade: {
      NodeJs: 70,
      Python: 70,
      ReactJs: 40,
      JavaScript: 70,
      CSS: 90,
      HTML: 80,
    },
  },
  {
    id: 8,
    name: "Confidence",
    course: "Backend",
    grade: {
      NodeJs: 70,
      Python: 90,
      ReactJs: 90,
      JavaScript: 70,
      CSS: 50,
      HTML: 60,
    },
  },
  {
    id: 9,
    name: "Samuel",
    course: "Backend",
    grade: {
      NodeJs: 70,
      Python: 80,
      ReactJs: 30,
      JavaScript: 60,
      CSS: 80,
      HTML: 90,
    },
  },
];

// entry request
app.get("/", (req, res) => {
  res.send("Welcome to CodeLab Wilmer Branch API");
});

// getting all students from the collection
app.get("/studentInfo", (req, res) => {
  if (!studentInfo) {
    res.json({ message: "No student info found" });
  }
  res.json({ message: "CodeLab Students Wilmer Branch", data: studentInfo });
});

// getting a single data
app.get("/studentInfo/:id", (req, res) => {
  // gets the userId by comparing the id passed to the url and that which is contained in the collection.
  const studentId = studentInfo.find(
    (student) => student.id === parseInt(req.params.id)
  );
  //   console.log(studentId);
  // checks if the id actually exist
  if (!studentId) {
    res.json({ message: `No student with this id: ${req.params.id}` });
  }
  res.json({
    message: "CodeLab Students Wilmer Branch",
    data: studentId,
  });
  console.log(studentId.grade.JavaScript);
});

// create a new student
app.post("/studentInfo", (req, res) => {
  // create new student object
  const newStudent = {
    id: studentInfo.length + 1,
    name: req.body.name,
    course: req.body.course,
    grade: {
      NodeJs: req.body.grade.NodeJs,
      Python: req.body.grade.Python,
      ReactJs: req.body.grade.ReactJs,
      JavaScript: req.body.grade.javaScript,
      CSS: req.body.grade.CSS,
      HTML: req.body.grade.HTML,
    },
  };
  // send the student object to the collection
  studentInfo.push(newStudent);
  res.json({
    message: `New student with id: ${newStudent.id} is created`,
    data: newStudent,
  });
});

app.patch("/studentInfo/:id", (req, res) => {
  const studentId = studentInfo.find(
    (student) => student.id === parseInt(req.params.id)
  );

  if (!studentId) {
    res.json({ message: `Student with id: ${studentId} is not found.` });
  }

  (studentId.name = req.body.name),
    (studentId.course = req.body.course),
    (studentId.NodeJs = req.body.nodeJs),
    (studentId.ReactJs = req.body.reactJs),
    (studentId.python = req.body.Python),
    (studentId.JavaScript = req.body.JavaScript),
    (studentId.CSS = req.body.CSS),
    (studentId.HTML = req.body.HTML),
    res.json({
      message: `Student with id: ${studentId} is updated`,
      data: { studentId },
    });
});

app.delete("/studentInfo/:id", (req, res) => {
  const studentId = studentInfo.find((student) => student.id === parseInt(req.params.id))

  if (!studentId) {
    res.json({message: `Student with id: ${studentId} does not exist`})
  }

  const studentIndex = studentInfo.indexOf(studentId);
  studentInfo.splice(studentIndex, 2);

  res.json({ message: "The student is now deleted", data: studentId})
})

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});
