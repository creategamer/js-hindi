const user={
    username:"hitesh",
    loginCount:8,
    singedIn:true,

    getUserDetails:function () {
        // console.log(`username:${this.username}`)
        console.log(this);
    }
}

// console.log(user);
// console.log(user.getUserDetails());

// console.log(this);


function User(username,loginCount,isloggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isloggedIn=isloggedIn;

    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }
    
    //return this;
}

const userOne=new User("hitesh",12,true)
const userTwo=new User("manish",11,false)


console.log(userOne.constructor);

// console.log(userTwo);