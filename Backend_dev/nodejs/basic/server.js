const express=require("express")
const app=express()

const bodyParser=require('body-parser')
app.use(bodyParser.json())

app.listen(4000,()=>{
    console.log("server started at port 3000")
})

app.get('/',(req,res)=>{
    res.send("welcome to my server");
})
app.post('/api/cars',(req,res)=>{
    const {name,brand}=req.body;
    console.log(name,brand)
    res.send("car data submitted")
})

const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://chinmayakumardas2000:mongodb2024@chinmayakumardas.xjfxtm7.mongodb.net/?retryWrites=true&w=majority&appName=chinmayakumardas/work',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("connected mongodb")})
.catch((err)=>{console.log("disconnected")})
