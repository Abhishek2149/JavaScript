//objects
let Abhishek = {
    firstName : "Abhishek",
    lastName : "Jaybhaye",
    age : 23,
    rollNo : 65
}

let Akash = {
    firstName : "Akash",
    lastName : "Shirsath",
    age : 23,
    rollNo : 60
}

//in above object creation there is repetation of properties so this is wrong way

// program 1
class person {
    firstName = undefined 
    lastName = undefined
    age  = undefined
    rollNo = undefined
}

let Abhishek1 = new person()
console.log(Abhishek1)
Abhishek1.firstName = "Abhishek"
Abhishek1.lastName = "Jaybhaye"
Abhishek1.age = "23"
Abhishek1.rollNo = "65"
console.log(Abhishek1)

//this is also wrong way as we arre updating valus 

//program 2
class person2 {
    constructor(fn,ln,ag,rn){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn
    }
}
let Akash1 = new person2("Akash","Shirsath",23,60)
console.log(Akash1)
console.log(Akash1.firstName)

//program 3 

class person3 {
    setFistName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }
    setRollNo(rn){
        this.rollNo = rn
    }
}
let Abhishek2 = new person3()
Abhishek2.setAge(23)
Abhishek2.setFistName("Abhishek")
Abhishek2.setLastName("Jaybhaye")
Abhishek2.setRollNo(65)
console.log(Abhishek2)

class vehicle {
    constructor(ty,col){
        this.tyPe = ty
        this.color = col
    }
    displayColor(){
        console.log(this.color)
    }
    displayType(){
        console.log(this.tyPe)
    }
}

let car1 = new vehicle("SUV","White")
let car2 = new vehicle("Sedan","Black")
let car3 = new vehicle("Coupe","Red")
let car4 = new vehicle("Minivan","Gray")

let cars = [car1,car2,car3,car4]      //array of objects
console.log(cars)

for (let i =0;i<cars.length;i++){
    console.log(cars[i].color)
    console.log(cars[i].tyPe)
}

for (let i =0;i<cars.length;i++){
    cars[i].displayType()
}

for (let i =0;i<cars.length;i++){
    cars[i].displayColor()
}