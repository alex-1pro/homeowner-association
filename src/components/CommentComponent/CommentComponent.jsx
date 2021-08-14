import React from 'react';
import { Image } from 'react-bootstrap';
import './CommentComponent.css'
function CommentComponent({comment,createdBy}) {
    console.log(createdBy);
    return (
        <div className="c-comment">
             <Image className="tenant-img" src={createdBy[0].img} roundedCircle />
            <h1 className="comment-header">{`${createdBy[0].fname} ${createdBy[0].lname}`}</h1>
            <p className="comment-date">{comment.createdAt}</p>
            <p className="comment-text">{comment.text}</p>
           
        </div>
    );
}

export default CommentComponent;