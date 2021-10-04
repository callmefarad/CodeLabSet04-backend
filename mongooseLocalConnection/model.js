// import mongoose
const mongoose = require("mongoose");

// create a schema
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  grade: {
    NodeJs: {
      type: Number,
      required: true,
    },
    Python: {
      type: Number,
      required: true,
    },
    ReactJs: {
      type: Number,
      required: true,
    },
    JavaScript: {
      type: Number,
      required: true,
    },
    CSS: {
      type: Number,
      required: true,
    },
    HTML: {
      type: Number,
      required: true,
    },
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// create a model to use the schema
const studentModel = mongoose.model("studentModel", studentSchema);

// export the model for public use
module.exports = studentModel;

// Format for declaring an array in nodejs model
//   courses: {
//     type: Array,
//     required: [],
//   },
//   course: [{
//     courseName: {
//       type: String,
//       required: true,
//     },
//   }],
