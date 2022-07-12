const express = require('express');
const app = express();
const PORT = 3001;

//import routes & models
const userRoutes = require ('./routes/user');

//import body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'true'}))

//import mongoDB connection
require('./db.js');

app.use('/user', userRoutes)

app.get('/', (req, res) => {
    res.send('Bienvenidos al servidor backend')
})

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`)
})