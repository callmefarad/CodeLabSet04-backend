require("dotenv").config();
const mongoose = require('mongoose');

const url = process.env.DATABASE_URL;
mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(()=>{
    console.log("Connected to the database successfully")
    console.log(url);
})


module.exports = mongoose;