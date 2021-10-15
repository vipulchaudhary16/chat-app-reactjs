const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router')

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);


io.on('connect', (socket) => {
    console.log("New Connection");

    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });
        if (error)
            return callback(error);

        socket.emit('message', { user: 'admin', text: `Welcome to the room ${room}` });

        socket.broadcast.io(user.room).emit('message', { user: 'admin', text: `${user.name} has joined` });

        socket.join(user, room);

        callback();
    });

    socket.on('sendMessage' , (message , callback) => {
        const user = getUser(socket.io);

        io.to(user , room).emit('message', { user: user.name , text : message});

        callback();
    })

    socket.on('disconnect', () => {
        console.log("User left");
    });
});
app.use(router);

server.listen(PORT, () => { console.log('listening on port ' + PORT) });