// import express, mongoose and router module
const express = require("express");
const mongoose = require("mongoose");
const port = 2021;
const router = require("./routers");

const app = express();
app.use(express.json());

const url = "mongodb://localhost:27017/set04DB";
mongoose
  .connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log(`Connected successfully to: ${url} `);
  })
  .catch((error) => {
    console.log(`Failed to connect ${url}`, error.message);
  });

app.get("/", (req, res) => {
  res.send("testing the api route");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server created on port: ${port}`);
});
