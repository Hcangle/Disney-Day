class User {
constructor(userObj) {
    this.id = userObj.id;

    User.all.push(this)

}

static all = []
}