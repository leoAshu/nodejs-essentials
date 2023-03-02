const express = require('express');
const parser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(parser.urlencoded({extended: true}))

const dbURL = 'mongodb+srv://ashu_leo:aXYUDQsIbFakXUm8@demo.mq7oizd.mongodb.net/?retryWrites=true&w=majority';

var Message = mongoose.model('Message', {
    name: String,
    message: String,
});

app.get('/messages', (req, res) => {
    Message.find({}).then((messages) => {
        res.send(messages);
    }).catch((err) => {
        console.log(err);
    });
});

app.post('/messages', (req, res) => {
    console.log(req.body);

    var message = new Message(req.body);
    
    message.save()
    .then(() => {
        console.log('saved');
        return Message.findOne({message: 'badword'});
    }).then((censored) => {
        if(censored) {
            console.log('censored words found:', censored);
            return Message.removeAllListeners({_id: censored.id});
        }
        io.emit('message', req.body);
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
    
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