//***************DESTRUCTURE******************* */

//1 -- array
let names = ["Abhishek","Akash","Rohan","Vishal"]
let a1 = names[0]
let a2 = names[1]
let a3 = names[2]
let a4 = names[3]

console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)

//destructure

let [b1,b2,b3,b4] = names
console.log(b1)
console.log(b2)
console.log(b3)
console.log(b4)

let fruits = ["Apple","Mango","Banana","Orange","Grapes"]

let [f1,f2,f3,f4,f5]= fruits
console.log(f1)
console.log(f2)
console.log(f3)
console.log(f4)
console.log(f5)


//muldidimensional array

let city = [
    ["Mumbai","Pune"],
    ["Jaipur","Bikaner"],
    ["Lukhnou","Varanasi"]
]

let [[c1,c2],[c3,c4],[c5,c6]]= city
console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)
console.log(c5)
console.log(c6)


//object
let info ={
    firstName : "Abhishek",
    lastName : "Jaybhaye",
    age : 23
}

let {firstName,lastName,age} = info

console.log(firstName)
console.log(lastName)
console.log(age)

//2
let vehicle = {
    color : "Orange",
    type : "sedane"
}

let {color,type} = vehicle
console.log(color)
console.log(type)

//object inside object

let family = {
    fullNAme: "Abhishek Jaybhaye",
    parents:
    {
        mother : "Bijala Jaybhaye",
        father : "Suresh Jaybhaye"
    }
}

let {fullNAme,parents:{mother,father}} = family

console.log(fullNAme)
console.log(mother)
console.log(father)

//program 6

let data =[
    {
        firstName:"Abhishek",
        lastName:"Jaybhaye"
    },
    {
        firstName:"Akash",
        lastName:"Shirsath"
    }
]
let [{firstName:f1d,lastName:l1d},{firstName:f2d,lastName:l2d}] = data
console.log(f1d)
console.log(f2d)
console.log(l1d)
console.log(l2d)

//program 7

let info4= {
    firstName:"Abhishek",
    lastName:"Jaybhaye",
    skills:["JavaScript","Java"]
}

let {firstName:f11,lastName:l11,skills:[s1,s2]} = info4
console.log(f11)
console.log(l11)
console.log(s1)
console.log(s2)
