//it  input function and return function o/p



function one(msg){
    console.log("function one"+msg)
}

function callback(a,b,onemsg){
    for(let i=0;i<10;i++){
        console.log(a,b)
        one(onemsg)
    }

}

callback(10,20,"hello dosto")