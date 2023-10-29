class user{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`USERNAME ::${this.username}`);
    }
    static createId(){
        return `123`//maths.random uses
    }
}

const hitesh=new user("hitesh")
// console.log(hitesh.createId())

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("iphone","i*adfda");
iphone.logme()
// console.log(iphone.createId())