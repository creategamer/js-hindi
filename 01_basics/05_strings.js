const names="hitesh"
const repoCount=50

console.log(names+repoCount)

//modern way of syntax

console.log(`hello my name is ${names} and my repo count is ${repoCount}`)

//uses
console.log(`hello my name is ${names.toUpperCase()} and my repo count is ${repoCount}`)

const gameName=new String("hiteshsshsh")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length)

// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));

const newString =gameName.substring(0.4);

console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="           hitesh           "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://hitesh.com/hitesh%30coudhary"

console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));

