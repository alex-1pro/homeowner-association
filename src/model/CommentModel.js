class CommentModel{
    constructor(plainCmt){
        this.id=plainCmt.id;
        this.createdBy=plainCmt.createdBy;
        this.createdAt=plainCmt.createdAt;
        this.text=plainCmt.text;
        this.comments=plainCmt.comments;
        this.topicId=plainCmt.plainCmt;//topicId is id of message , issue  or comment
    }
}