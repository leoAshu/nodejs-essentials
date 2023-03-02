const express = require('express');
const parser = require('body-parser');
const app = express();

app.use(express.static(__dirname));
app.use(parser.urlencoded({extended: true}))

var messages = [
    // {name: 'Tim', message: 'Hi'},
    // {name: 'Jane', message: 'Hello'},
];

app.get('/messages', (req, res) => {
    res.send(messages);
});

app.post('/messages', (req, res) => {
    console.log(req.body);
    messages.push(req.body);
    res.sendStatus(200);
});

const server = app.listen(3000, () => {
    console.log('server running on port', server.address().port);
});