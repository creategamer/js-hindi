//Dates

// let mydate=new Date()

// console.log(typeof mydate)

// console.log(mydate.toString());

// console.log(mydate.toDateString());

// console.log(mydate.toLocaleString());

// console.log("print extraa")
// console.log(mydate.toLocaleDateString());

// console.log(mydate.toJSON());

// console.log(mydate.toISOString());

// console.log(mydate.toLocaleTimeString());

// console.log(mydate.getTimezoneOffset());

// console.log(mydate.getHours());

// let mycreatedDate=new Date(2024,2,22)

// let mycreatedDate=new Date(2024,2,22,5,3)

// let mycreatedDate=new Date("2023-01-14")

let mycreatedDate=new Date("01-14-2023")

console.log(mycreatedDate.toString());


console.log(mycreatedDate.toLocaleString());

//time stamp

let mytimestamp=Date.now()

// console.log(mytimestamp);

// console.log(mycreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate=new Date()

console.log(newDate);

console.log(newDate.getMonth()+1)

console.log(newDate.getDay());

//`${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
      weekday:"long",
})