import React from 'react';
import { useState } from 'react';
import { Button, ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap';
import CommentComponent from '../CommentComponent/CommentComponent';
import "./MessageComponent.css";


function MessageComponent({ msg, msgCreatedBy, setIsRead, isRead, comments, users, onAddComment, onTextComment, newCommentText }) {

    const [hide, setHide] = useState("hide");
    const [textInput, setTextIput] = useState("");



    function showDetails() {
        setHide(hide ? "" : "hide");
        setIsRead("true");
    }
    //commetComp is array of comments belonging to message
    const commetComp = comments.map(c => <CommentComponent comment={c} createdBy={users.filter(user => user.id === c.createdBy)
        .map(creater => `${creater.fname} ${creater.lname}`)} />)

    return (
        // <div className={"c-message " + isRead} onClick={showDetails} >
        <div className={"c-message "}  >



            <Container fluid>
                <Row>
                    <Col >{msgCreatedBy.fname + " " + msgCreatedBy.lname}</Col>
                    <Col>{msg.title}</Col>
                    <Col>{msg.createdAt}</Col>
                    <Col><div className="btn-hideshow" onClick={showDetails}>{hide ? "+" : "-"}</div></Col>
                </Row>
                <Row>
                    <Col className={"commet-col "+hide}>
                        {msg.details}
                        {commetComp}
                        <div className="container-input">
                            <input className="comment-input" value={newCommentText} type="text" placeholder="Add new Comment" onChange={e => onTextComment(e.target.value)} />
                            <Button className="comment-btn" variant="success" onClick={() => onAddComment(msg.id)}>Send</Button>
                        </div>
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