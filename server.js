const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Dixie Sustal");
});

app.get('/james', (req, res) => {
    res.send("James Abella");
});

const port = 3000;

app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
});