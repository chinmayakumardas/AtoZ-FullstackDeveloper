function sum(a,b){
    return a+b;
}

console.log(sum(10,11));
//arrow function
let sub=()=>{
    console.log( "this is a arrow fuction ")
}
sub()

//iife
{
    (function print(){
        console.log("this is iffe function")
    })();
}
//first class function
let mx=function(){
    console.log("this is first class function")
}
//higher order function
//it input 2 or more function as input and return func as output

ex Map,filter ,reduce