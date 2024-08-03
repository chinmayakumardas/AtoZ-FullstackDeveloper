// Create a new promise
let promise = new Promise((resolve, reject) => {
    let success = true; // Change to false to see the reject case

    if (success) {
        resolve("The operation was successful!");
    } else {
        reject("The operation failed.");
    }
});

// Using the promise
promise
    .then((message) => {
        console.log("Success: " + message);
    })
    .catch((error) => {
        console.log("Error: " + error);
    });
























    
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

