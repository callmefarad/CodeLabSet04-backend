require('./config/db');
const express = require('express')
const port = "4023";
const marketRouter = require('./router/marketRouter');


const app = express();
app.use(express.json())

app.use('/imageUpload', express.static('./uploads'))
app.use('/api', marketRouter);

app.get("/", (req, res)=>{
    res.json("A simple Market API");
})

app.listen(port, ()=>{
    console.log(`Serve is listening to port: http://localhost:${port}`);
});