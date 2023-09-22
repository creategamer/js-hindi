/*
note:
prefer not to used var
because of issued in block scopp and functional scope
*/

const accountId =141552
let accountEmail="myemail@gmail.com"
var accountPassword="123456"
accountCity="jaipur"
let accountState;

// accountId=2//This is not allowed

console.log(accountId);

accountEmail="official@gmail.com"
accountPassword="2121212121"
accountCity='banguluru'

console.table([accountEmail,accountId,accountCity,accountCity,accountState])

let rollno=1
let names='muzammil'
let subject='bca'
let totalmarks=20
let obtainemarks=20

console.log('this is rollno:',rollno);
console.log('this is rollno:'+rollno);
console.table([rollno,names,subject,totalmarks,obtainemarks])