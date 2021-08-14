import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap';
import ActiveUserContext from '../../shared/ActiveUserContext';
import CommentComponent from '../CommentComponent/CommentComponent';
import "./MessageComponent.css";
import { FcInfo } from 'react-icons/fc';
import { FiInfo } from 'react-icons/fi';
import { RiDeleteBinLine, RiDeleteBinFill } from 'react-icons/ri';
import DeleteModal from '../DeleteModal/DeleteModal';


//function MessageComponent({ msg, msgCreatedBy, setIsRead, isRead, comments, users, onAddComment, onTextComment, newCommentText, onRemove }) {
function MessageComponent({ msg, msgCreatedBy, setIsRead, isRead, comments, users, onAddComment, onRemove }) {

    const [hide, setHide] = useState("hide");
    const [textInput, setTextIput] = useState("");
    const [hoverInfo, setHoverInfo] = useState(false);
    const [hoverDel, setHoverDel] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const activeUser = useContext(ActiveUserContext);




    function showDetails() {
        setHoverInfo(!hoverInfo)
        setHide(hide ? "" : "hide");
        setIsRead("true");
    }
    function saveText() {
        if (textInput) {
            onAddComment(textInput, msg.id);
            setTextIput("");
        }
    }
    //commetComp is array of comments belonging to message
  
    const commetComp = comments.map(c => <CommentComponent comment={c} createdBy={users.filter(user => user.id === c.createdBy)}/>)
    
                   
        

    const btnDelete = hoverDel ? <RiDeleteBinFill size="2em" onClick={() => setShowModal(true)} /> : <RiDeleteBinLine size="2em" />;

    return (
        // <div className={"c-message " + isRead} onClick={showDetails} >
        <div className={"c-message "}  >



            <Container fluid>
                <Row>
                    <Col >{msgCreatedBy.fname + " " + msgCreatedBy.lname}</Col>
                    <Col>{msg.title}</Col>
                    <Col>{msg.createdAt}</Col>
                    {/* <Col><div className="btn-hideshow" onClick={showDetails}>{hide ? "+" : "-"}</div></Col> */}
                    <Col>
                        <div className="message-info" onMouseOver={() => setHoverInfo(true)} onMouseLeave={() => setHoverInfo(false)}>
                            {hoverInfo ? <FcInfo size="2em" onClick={showDetails} /> : <FiInfo size="2em" />}
                        </div>
                    </Col>
                    {/* {activeUser.isCommittee ? <Col><div className="btn-hideshow" onClick={() => onRemove(msg)}>X</div></Col> : null} */}
                    {
                        activeUser.isCommittee ?
                            <Col>
                                <div className="message-delete" onMouseOver={() => setHoverDel(true)} onMouseLeave={() => setHoverDel(false)}>
                                    {btnDelete}
                                </div>
                            </Col> : null
                    }
                </Row>
                <Row>
                    <Col className={"commet-col " + hide}>
                        {msg.details}
                        {commetComp}
                        <div className="container-input">
                            <input className="comment-input" value={textInput} type="text" placeholder="Add new Comment" onChange={e => setTextIput(e.target.value)} />
                            <Button className="comment-btn" variant="success" onClick={() => saveText()}>Send</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DeleteModal onShow={showModal} onClose={() => setShowModal(false)} onDelete={() => onRemove(msg)} msg={msg} />

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MessageComponent;