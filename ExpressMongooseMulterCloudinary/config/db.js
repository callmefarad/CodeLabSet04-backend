const mongoose = require('mongoose')

const url = process.env.DATABASE_URL
// console.log(url)
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
    console.log("Connect Successfully")
});

module.exports = mongoose;