//stack (primitive),heap(non-primitive)

let myname="hitesh"

let anothermyname=myname
anothername="harry"

console.log(myname);

console.log(anothermyname);

let userOne={
    email:"user@gooogle.com",
    upid:"user@ybl"
}

let userTwo=userOne

userTwo.email="koiuser@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);