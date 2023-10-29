function setuserName(username){
    //complex DB calls
    this.username=username
    console.log("called");
}

function createUser(username,email,password){

    setuserName.call(this,username)
    this.email=email
    this.password=password
}

const chai=new createUser("chai","chail#gmail","123")
console.log(chai);