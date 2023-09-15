const express = require('express');
const app = express();
const lessonOneController = require('./controllers/lesson1');

app.get('/', lessonOneController.dixieRoute);

app.get('/james', lessonOneController.jamesRoute);

const port = 3000;

app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
});