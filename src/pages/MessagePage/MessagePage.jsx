import React from 'react';
import { useState } from 'react';
import './MessagePage.css'
import jsonMessages from "../../data/messages.json"
import MessageModel from '../../model/MessageModel';
import { useContext } from 'react';
import ActiveUserContext from '../../shared/ActiveUserContext';
import { Redirect } from 'react-router-dom';

function MessagePage() {
    const [messages,setMessages]=useState(jsonMessages.map(msg=>new MessageModel(msg)));
    const activeUser = useContext(ActiveUserContext);
    if (!activeUser) {
        return <Redirect to="/login" />
    }

    return (
        <div>
            <ul>
                {messages.filter(msg=>msg.communityId===activeUser.communityId).
                map(m=><li>{m.title}</li>)}
            </ul>
        </div>
    );
}

export default MessagePage;