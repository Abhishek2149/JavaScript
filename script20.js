const PromptSync = require("prompt-sync")

let info = {
    firstName:"Abhishek",
    lastName :"Jaybhaye",
    age : 23
}

//all the entries of object are in the form of string
// const prmpmt = require("prompt-sync")()
// let a = prmpmt("Enter:")
// console.log(a)
// let b = parseInt(a)
// console.log(typeof(a))
// console.log(typeof(b))
// console.log(b)


//dot notation
console.log(info.firstName)
info.firstName = "Suresh"
info.city = "Sangamner"
delete info.age
console.log(info)

//bracket noation
console.log(info["firstName"])
info['firstName'] = "Suresh"
info['city'] = "Sangamner"
delete info['age']
console.log(info)

//Map
//program 1
let mapA = new Map()
console.log(mapA)
mapA.set(1,"name")
mapA.set(true,"married")
mapA.set("city","pune")
mapA.set("age",23)
console.log(mapA)


//program 2
let mapB = new Map()
console.log(mapB)


//set()--setting the entries in map
mapB.set(1,"CEO")
mapB.set(2,"General MAnager")
mapB.set(3,"Assistant General MAnager")
mapB.set(4,"Supervisor")
mapB.set(5,"Worker")
console.log(mapB)

//get()
let q1 = mapB.get(1)
let q2 = mapB.get(44)  //undefined
console.log(q1)
console.log(q2)

//has() --returns true or false for having key or not
let q3 = mapA.has(true)
console.log(q3)
console.log(mapA.has("city"))
console.log(mapB.has(5))
console.log(mapB.has(55))

//delet()  -- delete desired entry
mapB.delete(3)
console.log(mapB)

//forEach()  -- value first and then key
mapB.forEach(function(val,key){
    console.log(val,key)
})

//values()
for(let val of mapB.values()){
console.log(val)
}

//keys()
for(let key of mapB.keys()){
    console.log(key)
}

//entries()
for(let en of mapB.entries()){
    console.log(en)
}

//clear()
mapB.clear()
console.log(mapB)