//below are function defination
function saymyname(){
    console.log("m");
    console.log("u");
    console.log("z");
    console.log("a");
    console.log("m");
    console.log("m");
    console.log("i");
    console.log("l");
}

//below are function referece
// saymyname

//excution
// saymyname()


// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }


function addTwoNumbers(number1,number2){
    // let result=number1+number2
    // return result
    // after return the values dont print or execute values

    return number1+number2
}


// addTwoNumbers(10,20)

const res=addTwoNumbers(10,20)

// console.log("result is:",res)

                            //if you want default parameter username="sam"
function LoginUserMessage(username){
    // if(username===undefined){
    //     console.log("please Enter a username")
    //     return
    // }
    // or
    if(!username){
        console.log("please Enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(LoginUserMessage("hitesh"));

// console.log(LoginUserMessage(""))

// console.log(LoginUserMessage())




//****************************************************************new vid************* */

//this are used in praticle world 
//shoping cart related

//function name always define used not used abc or etc so you dont problem in professional world


// rest operator ...num1 it based on used when you call rest or vest operator
//after you can used you can remove val1 or val2 because it takes first 2 values its name and i used because it used most interview 
function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

//objectss
const user={
    username:"muzammil",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username:"sam",
    price:399
})


const myNewArray=[200,400,100,600]

function returnSecondvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondvalue(myNewArray));

console.log(returnSecondvalue([200,400,100,500,1000]));