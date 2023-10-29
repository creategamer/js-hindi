// fetch('https:google.com').then().catch().finally()


const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("async 2 resolved");
})



const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"muzammil",rollno:2122157})
    },1000)
})

promisethree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"namees",password:"123456"})
        }else{
            reject('ERROR:something went to wrong')
        }
    },1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then(function(myusername){
    console.log(myusername);
})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("finnaly the promise resolved or rejected");
})


const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascript",password:"123456"})
        }else{
            reject('ERROR:js went to wrong')
        }
    },1000)    
})

async function consumePromiseFive(){

    try {
        const response=await promisefive
        console.log(response);    
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data= await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:",error);        
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))
