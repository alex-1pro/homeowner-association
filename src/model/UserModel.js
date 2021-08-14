class UserModel {
    constructor(plainUser) {
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.pwd = plainUser.pwd;
        this.isCommittee = plainUser.isCommittee;
        this.apt = plainUser.apt;
        this.communityId = plainUser.communityId;
        this.img=plainUser.img;

    }
}

export default UserModel;