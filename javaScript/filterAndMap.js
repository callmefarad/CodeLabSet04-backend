// Write a program that shows all the students present in school.
// Array of students of a class.
const students = [
  { name: "Kunle", present: true },
  { name: "Uju", present: true },
  { name: "Banlole", present: false },
  { name: "Adamu", present: true },
  { name: "Mark", present: false },
  { name: "Gabriela", present: false },
  { name: "Jackson", present: true },
];

// filter students who are not in class
const studentInClass = students.filter((student) => student.present == true);

// show the students who are present in class
const showStudentInClass = studentInClass.map((student) => student.name);
console.log(showStudentInClass);
