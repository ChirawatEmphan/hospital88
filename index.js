const express = require('express');
const cors = require('cors');
const connection = require('./db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res) => {
    res.send('Backend site.');
});

app.use('/api/patient', require('./src/routes/patient'));

connection
    .query("SELECT 1 AS result")
    .then(result => {
        console.log('Connent DB');
        app.listen(PORT,() => console.log('Backend site running on port:' +PORT));

    })
    .catch(error => {
        console.log('Can not to db');
        console.log(error.message);
    })