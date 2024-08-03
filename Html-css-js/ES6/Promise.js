 let promise=new Promise((res,rej)=>{
    if(res){
        res("resolved")
    }else{
        rej("rejected")
    }
 })


 promise.then((msg)=>console.log(msg)).catch((err)=>console.log(err))



 //normal func to asyc function


  function api(){
    return new Promise((res,rej)=>{
       setTimeout(()=>{
        console.log("weather data ");
        res("promise resolved"+200)
       },2000)
    });
 }

  async function getweatherdata(){
    await api();//1st call
    await api();//2nd call
  }