const { json } = require("express");
const express = require("express");
const port = 2021;

const app = express();

// method: GET
// default endpoint.
app.get("/", (req, res) => {
  const text = "Newly created api using express library";
  res.json({ text });
});

// method: GET
// displaying data
app.get("/data", (req, res) => {
  res.json({
    name: "ubani",
    age: 64,
    alive: true,
    course: [
      "nodeJs",
      "ReactJs",
      "Python",
      "JavaScript",
      "CSS",
      "HTML",
      "UI/UX",
    ],
    grade: [{ nodeJs: 99, ReactJs: 86, Python: 43, JavaScript: 89 }],
  });
});

app.listen(port, () => {
  console.log(`Server is now listening to port ${port}`);
});
