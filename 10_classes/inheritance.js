class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`USERNAME IS:::${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new couse was added by ${this.username}`);
    }
}

const chai=new Teacher("chai","chai#teacher.com","123")

chai.addCourse()

const masalaChai=new user("masala chai")

masalaChai.logme()

chai.logme()

console.log(chai===masalaChai);

console.log(chai instanceof Teacher);