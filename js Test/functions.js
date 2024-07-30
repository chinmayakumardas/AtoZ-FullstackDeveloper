let arr=[1,2,3,4,5,6,7,8,9,10]

let result1=arr.map((elem)=>{
    return elem*10;
})
console.log(result1)

let res2=arr.filter((elem)=>
elem>=2)

console.log(res2)

let res3=arr.reduce((elem,accum)=>{
return accum+elem;
},0)
console.log(res3)

// setInterval(()=>{
//     console.log("hii")
// },1000)

let x=100.234;
console.log(Number.parseInt(x))