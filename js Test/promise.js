fetch('https://dummyjson.com/products').then((data)=>data.json())
.then((datas)=>{
    console.log(datas.products[0])
})