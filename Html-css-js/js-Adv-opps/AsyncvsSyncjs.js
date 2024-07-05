function f1(){
    console.log("first called")
}
function f2(){
console.log("2nd called")
}
function f3(){
    console.log("third called")
}


f1()
setTimeout(f2,10000)
setInterval(f3,1000)