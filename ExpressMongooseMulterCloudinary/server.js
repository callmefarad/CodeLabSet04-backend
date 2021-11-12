require('dotenv').config();
require('./config/db')
const express = require('express');
const port = process.env.PORT
const router = require('./router/marketRoute');

const app = express();
app.use(express.json());
app.use('/images', express.static('./uploads'))
app.use('/api', router)

app.get('/', (req, res) => {
    res.send('Market API');
})
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});