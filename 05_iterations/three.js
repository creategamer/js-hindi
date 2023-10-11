//for of

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const geting of arr) {
    // console.log(geting);
}

const greetings="hello world"

for (const greet of greetings) {
    if(greet==" ")
    {
        continue;
    }
    //console.log(`each by char:${greet}`);
    
}


//Maps

const map=new Map()

map.set('in',"india");
map.set('usa',"united states of america")
map.set('fr',"frances")

// console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myobj={
    'game1':'crick',
    'game2':'kabbadi'
}


// Not working
// for (const [key] of myobj) {
//     console.log(key);
// }