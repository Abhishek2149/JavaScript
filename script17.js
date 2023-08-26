//
let city = ["Pune","Mumbai","Banglore","Kolkata","Nagpur"]
console.log(city)
for(let i = 0; i<city.length;i++){
    console.log(city[i])
}

//retrive
console.log(city[0])
console.log(city[4])

//add --
city.push("Rampur")       //add at last
console.log(city)
city.unshift("Varanasi")     //add at first
console.log(city)

//update--updating the informatin in the array
city[0]="Jaipur"
console.log(city)      //update at 0 index

//delete--
city.pop()
console.log(city)        //delete last element
city.shift()
console.log(city)        //delete first element


//object in javascript
//written in curly braces {}



let data = {
    firstName : "Akash",
    lastName: "Shirsath",
    age : 23,
    city : "Sangamner"
}

//retrive---  (dot notation and bracket notation)
//accessing the elements of object
console.log(data.firstName)
console.log(data['lastName'])

//Update ---- (dot notation and bracket notation)
//updating the informatin in the object
data.firstName = "Amol"
console.log(data.firstName)
data['age'] = 26
console.log(data.age)


//Add ---- (dot notation and bracket notation)
data.skills = ["Java","Python"]
data['fatherName'] = "Dnyanswar"
console.log(data)


//Delete --- (dot notation and bracket notation)
delete data.fatherName
console.log(data)
delete data['age']
console.log(data)