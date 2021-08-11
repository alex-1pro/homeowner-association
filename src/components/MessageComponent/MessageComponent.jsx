import React from 'react';
import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import CommentComponent from '../CommentComponent/CommentComponent';
import "./MessageComponent.css";


function MessageComponent({ msg, msgCreatedBy, setIsRead, isRead ,comments,users}) {

    const [hide, setHide] = useState("hide");
    
    // const createdBy=users.filter(user=>user.id===msg.createdBy)
    // console.log(msg);
  
  
    function showDetails() {
        setHide(hide ? "" : "hide");
        setIsRead("true");
    }

  // const commetComp=comments.map(c=><CommentComponent comment={c} createdBy={c.createdBy}/>)
   const commetComp=comments.map(c=><CommentComponent comment={c} createdBy={users.filter(user=>user.id===c.createdBy)
                                                                                .map(creater=>`${creater.fname} ${creater.lname}`)}/>)
      
  return (
        <div className={"c-message " + isRead} onClick={showDetails} >



            <Container>
                <Row>
                    <Col >{msgCreatedBy.fname + " " + msgCreatedBy.lname}</Col>
                    <Col>{msg.title}</Col>
                    <Col>{msg.createdAt}</Col>
                </Row>
                <Row>
                    <Col className={hide}>
                        {msg.details}
                        {commetComp}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* {comments} */}
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MessageComponent;