const myNums=[1,2,3]

// const myTotal=myNums.reduce(function (acc,currval){
//     console.log(`current values is::${acc} and currvalue::${currval}`);
//     return acc+currval
// },0)

const myTotal=myNums.reduce( (acc,curr)=>acc+curr,0)


// console.log(myTotal);


const shopingCart =[
    {
        itemName:"js courses",
        price:2999
    },
    {
        itemName:"java courses",
        price:5999
    },
    {
        itemName:"py courses",
        price:999
    },
]

const shop=shopingCart.reduce( (acc,item)=>acc+item.price,0 )

console.log(shop);
