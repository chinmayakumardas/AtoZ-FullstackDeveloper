let arr=[1,2,3,4,5,6,7,89,10];

let newArr=[...arr];

console.log(arr==newArr,newArr)


//rest

function rest(a,b,c,...r){
    console.log(a,b,c)
    console.log("rest is"+ r)
}

rest(1,2,3,4,5,6,7,8,9)