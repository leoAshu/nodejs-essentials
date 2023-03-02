const express = require('express');
const parser = require('body-parser');
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

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

io.on('connection', (socket) => {
    console.log('a user connected');
});

const server = http.listen(3000, () => {
    console.log('server running on port', server.address().port);
});