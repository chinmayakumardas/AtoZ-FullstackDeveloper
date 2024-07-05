// let obj={
//     name:"chinmaya",
//     age:22,
//     sal:23000
// }
// let obj2={...obj}

// let obj3=Object.assign({},obj)
// Object.freeze;
// console.log(
//     obj,
//   obj3
// )

//ways to create a object 

//way 1
let obj={
    name:"chinmaya",
    age:22,
    sal:23000
}
//way2
let data=new Object();
data.name="kusu";
data.id="101D"

console.log(data)

//way 3
//let bio=Object.create();

//way4
//constuctor function
function stu(name,age){
    this.name=name;
    this.age=age;
}
let x=new stu("sani",25)
console.log(x)