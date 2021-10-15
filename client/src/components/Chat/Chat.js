import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { io } from 'socket.io-client';

let socket;
const ENDPOINT = 'localhost:5000'


const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState([])
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        //Solved from stackoverflow need to read it
        socket = io(ENDPOINT , { transports : ['websocket'] });

        setName(name);
        setRoom(room);

        console.log(name , room); 

        socket.emit('join' , {name , room} , () => {

        });

        return ()=>{
            socket.emit('disconnect')
            socket.off();
        }

    } , [ENDPOINT , location.search]);

    useEffect(() => {
        socket.on('message' , (message) => {
            setMessage([...messages , message]);
        })
    } , [messages])

    return (
        <h1>Chat</h1>
    )
}

export default Chat;