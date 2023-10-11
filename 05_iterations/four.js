const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
    //console.log(`${key}:: scut for file name:${myObject[key]}`);
}

const myarr=['js','ruby','py','java','cpp']

for (const key in myarr) {
    //console.log(myarr[key]);
}

//Maps

const map=new Map()

map.set('in',"india");
map.set('usa',"united states of america")
map.set('fr',"frances")

for (const key in map) {
    console.log(key);
}