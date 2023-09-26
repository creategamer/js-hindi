
// const tinderUser=new Object()

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)


//mostly used
const obj3={...obj1,...obj2}
//console.log(obj3);


//in databased fatch
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    
]

users[1].email

console.log(tinderUser);


//mostly used in databased 

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLogged'));



// object de-structure and json api 

//de-structuing are used in object and also arrays

const course={
    coursename:"javascript in hindi",
    price:"999",
    courseInstructor:"muzammil"
}

//used not problem but
//course.courseInstructor

const {courseInstructor:instructor}=course

// console.log(courseInstructor);

console.log(instructor);



//in praticle used for exam react
//this for example
                //pros.company
// const navbar= ({company})=>{

// }

// navbar(company="hitesh")


//api means values in backend and most values are in json

//below example

// {
//     "name":"muzammil",
//     "coursenames":"js in hindi",
//     "price":"free"
// }


// some time api in arrays FormData

[
    {},
    {},
    {}
]


