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
import { nanoid } from 'nanoid';
import { Button, Container, Row } from 'react-bootstrap';
import NewMessageModal from '../../components/NewMessageModal/NewMessageModal';
import { BiMessageEdit } from 'react-icons/bi';

function MessagePage({ users, messages, allComments, setAllComments,onNewMessage,onRemove}) {

    const [isRead, setIsRead] = useState("nonSeen");
    const [showModal,setShowModal]=useState(false);
    
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

    function addNewComment(text,topicId) {
       

            const newComment = new CommentModel({
                id: nanoid(6),
                createdBy: activeUser.id,
                createdAt: new Date().toISOString().slice(0, 10),
                text: text,
                comments: null,
                topicId: topicId
            });
            setAllComments(allComments.concat(newComment));

      
    }

   


    // filter return all community message  
    const msgsComps = messages.filter(msg => msg.communityId === activeUser.communityId).
        map(m => <MessageComponent msg={m} msgCreatedBy={msgCreatedBy(m)} setIsRead={setIsRead} isRead={isRead} comments={allMessageComments(m)} users={users}
            onAddComment={addNewComment}  onRemove={onRemove} />);

  




    return (
        <div className="p-message">
            <Container >
                <div className="msg-heading">
               {activeUser.isCommittee?<div className="new-message" onClick={()=>setShowModal(true)}> New Message <BiMessageEdit/></div> :null}
                </div>
                <Row>
                    {msgsComps}
                </Row>
                <NewMessageModal onShow={showModal} onClose={()=>setShowModal(false)} onCreate={onNewMessage}/>
            </Container>
        </div>
    );
}

export default MessagePage;