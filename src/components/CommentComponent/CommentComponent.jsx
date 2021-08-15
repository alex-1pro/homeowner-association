import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import './CommentComponent.css'
function CommentComponent({ comment, createdBy }) {
    console.log(createdBy);
    if (createdBy.length === 0) {
        return null;
    }
    return (
        <div className="c-comment">
            <Container >
                <Row>
                    <Col md={3} sm={6}>
                        <Image className="tenant-img" src={createdBy[0].img} roundedCircle />
                        <h1 className="comment-header">{`${createdBy[0].fname} ${createdBy[0].lname}`}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} sm={6}>
                        <p className="comment-date">{comment.createdAt}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="comment-text">{comment.text}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CommentComponent;