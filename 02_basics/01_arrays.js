//arrays

const myarr=[0,1,2,3,4,5,true,"hitesh"]
const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","ironman"]

const myArr2=new Array(1,2,3,4)
// console.log(myArr[0]);
// console.log(myArr[1]);


//Array methods

//push used to add last digit wise
// myArr.push(6)
// myArr.push(7)
// console.log(myArr);

// myArr.pop();
//pop remove last values 
// console.log(myArr);


// //unshift used to add first values
// myArr.unshift(9)
// //shift used to remove first values
// myArr.shift()
// console.log(myArr);


// //includes function used for values exits or not ans:true or false
// console.log(myArr.includes(9));
// //indexof function used for index exits or not ans:-1 or values
// console.log(myArr.indexOf(19))
// console.log(myArr);



// most used operations
// const newArr=myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//slice splice

console.log("A",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);


const myn2=myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);
