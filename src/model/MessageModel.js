class MessageModel{
    constructor(plainMessage){
        this.id=plainMessage.id;
        this.createdBy=plainMessage.createdBy;
        this.createdAt=plainMessage.createdAt;
        this.title=plainMessage.title;
        this.details=plainMessage.details;
        this.priority=plainMessage.priority;
        this.comments=plainMessage.comments;
        this.communityId=plainMessage.communityId;
        this.img=plainMessage.img;
    }
}

export default  MessageModel;



