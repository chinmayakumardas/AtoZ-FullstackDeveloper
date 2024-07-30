// fetch('https://dummyjson.com/products').then((data)=>data.json())
// .then((datas)=>{
//     console.log(datas.products[0])
// })

let prom=new Promise(
    function(reject,resolved){
        let res=false;
        if(res==true)
            resolved("sucessfully resolved")
        else{
        reject("rejected by the admin")
        }
}
)



prom.then((message)=>{
    console.log("status----"+ message)
}).catch(error=>{
    console.log("status---"+error)
})

