import React from 'react';
import { useState } from 'react';
import './MessagePage.css'
import { useContext } from 'react';
import ActiveUserContext from '../../shared/ActiveUserContext';
import { Redirect } from 'react-router-dom';
import MessageComponent from '../../components/MessageComponent/MessageComponent';
import jsonComments from "../../data/comments.json"
import CommentModel from '../../model/CommentModel';
import CommentComponent from '../../components/CommentComponent/CommentComponent';

function MessagePage({ users ,messages,allComments,setAllComments }) {
   
    const [isRead, setIsRead] = useState("nonSeen");
    const [newCommentText,setNewCommentText]=useState("");
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

    function addNewComment(topicId){
        if(newCommentText){

            const newComment=new CommentModel({
                createdBy:activeUser.id,
                createdAt:"2021-08-11",
                text:newCommentText,
                comments:null,
                topicId:topicId
            });
            setAllComments(allComments.concat(newComment));
            setNewCommentText("");
        }
    }

    // filter return all community message  
    const msgsComps = messages.filter(msg => msg.communityId === activeUser.communityId).
        map(m => <MessageComponent msg={m} msgCreatedBy={msgCreatedBy(m)} setIsRead={setIsRead} isRead={isRead} comments={allMessageComments(m)} users={users}
                onAddComment={addNewComment} onTextComment={setNewCommentText} newCommentText={newCommentText}/>);

/**
 * this.id=plainCmt.id;
        this.createdBy=plainCmt.createdBy;
        this.createdAt=plainCmt.createdAt;
        this.text=plainCmt.text;
        this.comments=plainCmt.comments;
        this.topicId=plainCmt.topicId;
 */


   


    return (
        <div>

            {msgsComps}
        </div>
    );
}

export default MessagePage;