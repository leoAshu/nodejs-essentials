const express = require('express');
const parser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(parser.urlencoded({extended: true}))

const dbURL = 'mongodb+srv://ashu_leo:aXYUDQsIbFakXUm8@demo.mq7oizd.mongodb.net/?retryWrites=true&w=majority';

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
    io.emit('message', req.body);
    res.sendStatus(200);
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

mongoose.connect(dbURL)
.then(() => {
    console.log('db connected');
}).catch((err) => {
    console.log(err);
});

const server = http.listen(3000, () => {
    console.log('server running on port', server.address().port);
});


// aXYUDQsIbFakXUm8