
class VotingModel{
    constructor(plainVoting){
        this.id=plainVoting.id;
        this.communityId=plainVoting.communityId;
        this.createdBy=plainVoting.createdBy;
        this.createdAt=plainVoting.createdAt;
        this.title=plainVoting.title;
        this.details=plainVoting.details;
        this.options=plainVoting.options;
        this.votes=plainVoting.votes;

    }
}
export default VotingModel;