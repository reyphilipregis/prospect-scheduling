const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser')
const port        = 3000;

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    let username = req.body.username;
    let pass     = req.body.pass;

    res.end();
});

app.listen(port, () => {
    console.log('Example app listening on port ' + port + '!');
});
