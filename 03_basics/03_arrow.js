const user={
    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to websites`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username="hitesh"
//     console.log(this.username);//this are does not work in function
// }

// chai()



// const chai = function(){
//     let username="hitesh"
//         console.log(this.username);
//     // this are does not work in function
// }

// chai()





const chai = ()=>{
    let username="hitesh"
    console.log(this)
}

// chai()




// () =>{} :: basic syntax

// const addTow = (num1,num2)=>{
//     return num1+num2
// }


//Implicite return
// const addTow = (num1,num2)=> num1+num2

// const addTow = (num1,num2)=> (num1+num2)

const addTow=(num1,num2) => ({username:"hitesh"})

console.log(addTow(5,6))


// const myarray=[2,5,3,7,8]

// myarray.forEach(()=>{})

