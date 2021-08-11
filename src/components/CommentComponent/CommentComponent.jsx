import React from 'react';
import './CommentComponent.css'
function CommentComponent({comment,createdBy}) {
    return (
        <div className="c-comment">
            <h1 className="comment-header">{createdBy}</h1>
            <p className="comment-date">{comment.createdAt}</p>
            <p className="comment-text">{comment.text}</p>
        </div>
    );
}

export default CommentComponent;