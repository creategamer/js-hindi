//for 

for (let index = 0; index < 10; index++) {
    const element = index;
    //console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    
    //console.log(`mutiplication table ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`outer loop ${j} and innter loop ${i}`);
        //console.log(`${i} * ${j}=${i*j}`);
        //console.log(i + '*' + j +'='+ i*j);
    }
}

let myarray=["flash","batsman","superman","ironman"];

console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    //console.log(element);
    
}


//break and continue

for (let i = 0; i < 10; i++) {
    
    if (i==3) {
        //console.log("who")
        continue;
    }
    if (i==5) {
       // console.log("values break");
        break;
    }
    //console.log(i);
}

//my waste time
for (let i = 0; i <= 10; i++) {
    
    
    if (i%2==0) {
        console.log("odd out even print");
        continue;
    }
    console.log(i);
}

