class stu{
    constructor(name,age,sal){
        this.name=name;
        this.age=age;
        this.sal=sal;
    }
    printData() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.sal}`);
    }
    
}

let s1=new stu("chinu",22,23000)

console.log(s1)
s1.printData()