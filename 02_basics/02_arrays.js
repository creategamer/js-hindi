const marvel_heroes=["thor","ironman","spiderman"]
const dc=["superman","flash","batsman"]

// marvel_heroes.push(dc)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])


//concate operator
// combine=marvel_heroes.concat(dc);
// console.log(combine);


//sperade operator
// const all_new_heros=[...marvel_heroes,...dc]
// console.log(all_new_heros);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)

console.log(real_another_array);



console.log(Array.isArray("hitesh"))//quesioning array or not
console.log(Array.from("hitesh"))//converting in array

console.log(Array.from({name:"hitesh"}))//interesting
//so you want to assign the name


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//we used of insed from keyword and so ::of::return new set of element
