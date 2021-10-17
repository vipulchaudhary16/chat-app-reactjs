import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { io } from 'socket.io-client';

import './Chat.css'

import InfoBar from '../InfoBar/Infobar'
import Input from '../Input/Input'

let socket;
const ENDPOINT = 'localhost:5000'


const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('')
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
        socket.on('message', message => {
            setMessages(messages => [ ...messages, message ]);
          });
    } , [messages])

    const sendMessage = (event)=>{
        //preventDefault for prevent app from refresh
        event.preventDefault();
        if(message){
            socket.emit('sendMessage' , message , ()=>setMessage(''));
        }
    }

    console.log(message , messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room = {room}/>
                <Input message = {message} setMessage = {setMessage} sendMessage = {sendMessage}/>
            </div>
        </div>
    )
}

export default Chat;