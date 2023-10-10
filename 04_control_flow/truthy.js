const UserEmail=[]

if (UserEmail) {
    console.log("Got User Email");
}
else{
    console.log("dont have user emails");
}

//falsy values

//false,0,-0,BigInt 0n,"",null,undefined,NaN

// or truthy values

// "0",'false'," ",[],{},function(){}

// if (UserEmail.length===0) {
//     console.log("Array is empty");
// }

const emptyOBJ={}

if (Object.keys(emptyOBJ).length===0) {
    console.log("object is empty");
}



//Nullish Coalesing Operator (??): null undefined

let val1;
// val1=5 ?? 10
// val1=null??10
// val1=undefined??15

val1=null??10??15

console.log(val1);

//terniary operator

// condition ? true :false

const iceTeaPrice=100

iceTeaPrice <= 80 ? console.log("less Than 80") : console.log("more then 80")


