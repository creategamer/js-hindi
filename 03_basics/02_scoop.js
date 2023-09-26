
//{} are scoop they used in function and if else and many more

// var c=300
//we did not used var

let a=300

if(true){
    let a=10
    const b=20
    console.log("Inner:",a)
    // var c=30
    // c=20
}

// console.log(a);
// console.log(b);
// console.log(c);


//+++++++++++++++++++++++nested scoop in new vid++++++++++++++++


function one(){
    const username="muzammil"

    function two(){
        const website="Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username="hitesh"

    if (true) {
        const website=" youtube"
        //console.log(username+website);
    }
    // console.log(website);error
}
// console.log(username);error


//-------------------------interesting ---------------------------------------

console.log(addone(5));
function addone(num){
    return num+1
}



//some person used ::it is also called 

// addtwo(5) give errorr
const addtwo=function(num){
    return num+2
}



