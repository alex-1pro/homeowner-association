import React from 'react';
import { useState } from 'react';
import './MessagePage.css'
import jsonMessages from "../../data/messages.json"
import MessageModel from '../../model/MessageModel';
import { useContext } from 'react';
import ActiveUserContext from '../../shared/ActiveUserContext';
import { Redirect } from 'react-router-dom';
import MessageComponent from '../../components/MessageComponent/MessageComponent';
import jsonComments from "../../data/comments.json"
import CommentModel from '../../model/CommentModel';
import CommentComponent from '../../components/CommentComponent/CommentComponent';

function MessagePage({ users }) {
    const [messages, setMessages] = useState(jsonMessages.map(msg => new MessageModel(msg)));
    const [isRead, setIsRead] = useState("nonSeen");
    const [allComments, setAllComments] = useState(jsonComments.map(cmt => new CommentModel(cmt)));

    const activeUser = useContext(ActiveUserContext);



    if (!activeUser) {
        return <Redirect to="/login" />
    }

    function msgCreatedBy(msg) {
        return users.filter(user => user.id === msg.createdBy)[0];
    }


    function allMessageComments(msg) {

        return allComments.filter(cmt => cmt.topicId === msg.id);
    }
    // filter return all community message  
    const msgsComps = messages.filter(msg => msg.communityId === activeUser.communityId).
        map(m => <MessageComponent msg={m} msgCreatedBy={msgCreatedBy(m)} setIsRead={setIsRead} isRead={isRead} comments={allMessageComments(m)} users={users} />);




    return (
        <div>

            {msgsComps}
        </div>
    );
}

export default MessagePage;