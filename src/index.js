const express = require('express');
const colors = require('colors');
const app = express();
//
const morgan = require('morgan');
app.use(morgan('dev'));

//Router
app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello Quaeen!</h1>');
})

//port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`.cyan);
})