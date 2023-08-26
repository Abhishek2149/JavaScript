//object

//1 object literal
//function constructor
//ES6 class 
//Object.creat

//1 Object literal
let obj1 = {
    firstName : "Abhishek",
    lastName : "Jaybhaye",
    age : 23,
    rollNo : 65
}

let obj2 = {
    firstName : "Akash",
    lastName : "Shirsath",
    age : 23,
    rollNo : 59
}

console.log(obj1)
console.log(obj2)

//in this method there is repetation of code

//function constructor
function Person(fn,ln,ag,rn){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn
}

let Abhishek = new Person("Abhishek","JAybhaye",23,65)
let Vishal = new Person("Vishal","Kadlag",22,73)
console.log(Abhishek)
console.log(Vishal)

//retrive
console.log(Abhishek.firstName)
console.log(Vishal["age"])

//add
Abhishek.city = "Sangamner"
Vishal["city"] = "Pune"
console.log(Abhishek)
console.log(Vishal)

//update
Abhishek.age = 24
Vishal["age"] = 23
console.log(Abhishek)
console.log(Vishal)

//delete
delete Abhishek.rollNo
delete Vishal.rollNo
console.log(Abhishek)
console.log(Vishal)

//3 ES6 Class
class Data  {
    constructor(fn,ln,ag,rn){
        this.firstName = fn
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rn
    }
}

let Swaraj = new Data("Swaraj","Kanawde",23,75)
console.log(Swaraj)

//Object.creat()

let Vikas = Object.create({})  //creating a blank object
console.log(Vikas)
Vikas.firstName = "Vikas"
Vikas.lastName = "Mandlik"
Vikas.age = 23
Vikas.rollNo = 18
console.log(Vikas)