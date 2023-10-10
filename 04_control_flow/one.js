const score=200

if(score>100){
    let power="fly"
    console.log(`user power:${power}`);
}

// const balance=1000

//single line use
// if(balance>500) console.log("test");

//dont use below code it is immature code

//if(balance>500) console.log("test"),
//console.log("test2")



// if (balance<500) {
//     console.log("less then 500");
// }
// else if (balance<750) {
//     console.log("less then 750");
// }
// else if (balance<900) {
//     console.log("less then 900");
// }
// else{
//     console.log("less then 1200");
// }


const userLoggedIn=true
const debitCard=true
const loggedInFromGoolge=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard && 2==2)
{
    console.log("Allow to buy courses");
}

if (loggedInFromGoolge || loggedInFromEmail) {
    console.log("User logged in");
}