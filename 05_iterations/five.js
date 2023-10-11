const coding=['js','java','ruby','python','cpp']

coding.forEach(function (items) {
    //console.log(items);
})


//arrow functions
coding.forEach( (items) =>{
    //console.log(items);
})



// function printme(item) {
//     console.log(item);      
// }

// coding.forEach(printme)



//editor
// coding.forEach(keys => {
//     console.log(keys);
// });




const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },

]

myCoding.forEach( (items)=>{
    console.log(items.languageName);
})

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// })