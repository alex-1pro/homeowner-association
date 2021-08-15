
class VotingModel{
    constructor(plainVoting){
        this.communityId=plainVoting.communityId;
        this.createdBy=plainVoting.createdBy;
        this.createdAt=plainVoting.createdAt;
        this.title=plainVoting.title;
        this.detais=plainVoting.detais;
        this.options=plainVoting.options;
        this.votes=plainVoting.votes;

    }
}
export default VotingModel;