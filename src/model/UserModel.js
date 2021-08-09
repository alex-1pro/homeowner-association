class UserModel {
    constructor(plainUser) {
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.pwd = plainUser.pwd;
        this.isCommittee=plainUser.isCommittee;
        this.communityId=plainUser.communityId;

    }
}

export default UserModel;