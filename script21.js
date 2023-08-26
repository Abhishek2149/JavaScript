let info = {
    //--------------property >-----string
    firstName : "Abhishek",
    lastName : "Jaybhaye",
    age : 23
}
console.log(typeof(info))

let mapA = new Map()
console.log(mapA)

//set()
mapA.set(1,"Abhishek")
mapA.set(true,"canDrive")
mapA.set("city","Sangamner")
mapA.set("age",23)
console.log(mapA)

//size()
console.log(mapA.size)

//get()
let a1 = mapA.get(1)
console.log(a1)

//delete() -- delete entry and return true or false
let a2 = mapA.delete(true)
console.log(mapA)
console.log(a2)

//has()
let a3 = mapA.has("age")
console.log(a3)

//clear()
mapA.clear()
console.log(mapA)

let mapB = new Map([
    [1,"ceo"],
    [2,"general manager"],
    [3,"supervisor"],
    [4,"worker"]
])

let q1 = mapB.size
console.log(q1)
console.log(mapB)

mapB.forEach(function(val,key){
    //console.log(val,key)
    if(key == 2){
        console.log(val)
    }
})

//for of

for(let key of mapB.keys()){
    console.log(key)
}

for(let val of mapB.values()){
    console.log(val)
}

for(let entries of mapB.entries()){
    console.log(entries)
}

//--------------------SET----------------------------//
//set do not have duplicate entries

let numbers = [11,22,33,44,55,666,44,22,11]  //array
console.log(numbers)

let setA = new Set()
console.log(setA)

//add()
setA.add(11)
setA.add(22)
setA.add(33)
setA.add(44)
setA.add(55)
console.log(setA)

//has()
console.log(setA.has(22))

//delete()
setA.delete(11)
console.log(setA)

setA.forEach(function(el){
    console.log(el)
})

console.log(setA.keys())
console.log(setA.values())
console.log(setA.entries())

setA.clear()
console.log(setA)