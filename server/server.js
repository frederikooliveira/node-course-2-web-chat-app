const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'/../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Mike',
        text: 'See yout then',
        createdAt: 1234
    });

    socket.on('createMessage', (message)=>{
        console.log('createMessage', message);
    })
    socket.on('disconnect', ()=>{
        console.log('User was disconnected');
    })
});

server.listen(port,()=>{
    console.log(`started server at port ${port}`);
})

