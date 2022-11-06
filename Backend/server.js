const app = require('./app');
const express = require('express');
const routes = require('./routes/userRoutes');

require('dotenv').config({
    path:'./config.env'
});

require('./db/conn');

app.use(express.json());
app.use(routes);


app.get('/',(req,res) => {
    res.send('Hello,World from Server Side')
});

app.listen(process.env.PORT,() => {
    console.log(`Server has started at ${process.env.PORT}`);
});