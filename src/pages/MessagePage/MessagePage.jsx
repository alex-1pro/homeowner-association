import React from 'react';
import { useState } from 'react';
import './MessagePage.css'
import jsonMessages from "../../data/messages.json"
import MessageModel from '../../model/MessageModel';
import { useContext } from 'react';
import ActiveUserContext from '../../shared/ActiveUserContext';
import { Redirect } from 'react-router-dom';
import MessageComponent from '../../components/MessageComponent/MessageComponent';

function MessagePage({users}) {
    const [messages,setMessages]=useState(jsonMessages.map(msg=>new MessageModel(msg)));
    const [isRead,setIsRead]=useState("nonSeen");
    const activeUser = useContext(ActiveUserContext);
    if (!activeUser) {
        return <Redirect to="/login" />
    }
    
    function msgCreatedBy(msg){
        return users.filter(user=>user.id===msg.createdBy)[0];
    }


    const msgs=messages.filter(msg=>msg.communityId===activeUser.communityId).
            map(m=><MessageComponent msg={m} msgCreatedBy={msgCreatedBy(m)} setIsRead={setIsRead} isRead={isRead} />);
    
    return (
        <div>
            {/* <ul>
                {messages.filter(msg=>msg.communityId===activeUser.communityId).
                map(m=><li>{m.title}</li>)}
            </ul> */}
            {msgs}
        </div>
    );
}

export default MessagePage;