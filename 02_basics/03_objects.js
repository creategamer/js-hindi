//my notes :::object are declare with literals and singleton
//::literals dont have singleton and mostly singleton are describe by contractor



//singleton
//object.create
// Object.create ::this is used for singleton for contractors



//object literals

const mySym=Symbol("key1")

//Object mostly have keys and values
const JsUser={
    name:"Hitesh",//0:hitesh and bydefault system has define "name":"hitesh"
    "Full name":"Hitesh Choudary",
    [mySym]:"mykey1",//symbol define as square bracker without braket it is string
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    LastLoginDays:["Monday","Saturday"]
}


// myArray=["h","i"]//access in array only this method


//how to access objects
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["Full name"])//never accept .dot 


// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);

console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym])//you can define as also pracket for symbol


//change the values if you want
JsUser.email="Hitesh@chatgpt.com"

// Object.freeze(JsUser)//This is used for freeze the values you can never change the values

JsUser.email="hitesh@microsoft.com"
console.log(JsUser);


JsUser.greeting=function() {
    console.log("hello js user");
}

JsUser.greetingtwo=function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo())