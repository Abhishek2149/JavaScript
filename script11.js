//Arrays in javaScript

//Arrays are variables which can hold more than one item
let names = ["Abhishek","Akash","Swaraj","Vishal","Rohan","Ashutosh"]
            //   0         1       2        3        4        5
console.log(names)          //it will print complete array

console.log(names[0])       //it will print item at zero index----Abhishek
console.log(names[4])       //it will print item at index four----Rohan

//Program 1
//print items of array one by one using for loop
for(let i = 0;i<=5;i++){
    console.log(names[i])    //it will print elements of array one by one
}

//Program 2
//Print given array using for loop
let city = ["Pune","Mumbai","Wardha","Jalna","Surat","Nashik","Nagpur"]
for(let i = 0;i<7;i++){
    console.log(city[i])
}

//program 3
//Print above array in reverse using for loop
for(let i=6;i>=0;i--){
    console.log(city[i])
}


// Type --- object ------ properties and method
// Array -- object ---- properties and method


// Human 
// Properties - age , color , height
// Method - walk() , talk()


// Vehicle
// Properties - color , regNo 
// Method - start() , stop()


// Bank
// Properties - accNo ,accName
// Methods - withdrawl(), deposit()

//Program 4
//functions in array
//Properties---length
let fruits=["Apple","Grapes","Mango","Banana","Papaya"]
let r = fruits.length         //it will print the lengt of array
console.log(r)

//Program 5
//Print array using length property in for loop
for (let i = 0; i < fruits.length; i++) {    //we don't need to change values if length of array changed
    console.log(fruits[i])                  //it will print elements of array one by one
}


//Methosd in Array---with particular input we get different output
/*example-
Gym:
Action-Exersise
Return or Output-Health
*/


//Program 6
//use of methods in array
let country = ["India","Japan","UK","USA","China"]
            //    0        1    2    3     4
//method 1 
/*
push()
action---Add the element at last
return---new length of array
*/
let a1 = country.push("Rissia")  //It will add Russia at the end of array
console.log(a1)          //it willprint new length of array---6
console.log(country)     //prints array


//method 2
/*
unshift()
action--Add the element at the first(zero index or start of array)
return---new length of array
*/

//new array after push() method
//[ 'India', 'Japan', 'UK', 'USA', 'China', 'Rissia' ]

let a2=country.unshift("Austrelia")  //It will add Austrelia at the starting of array or at zero index
console.log(a2)                      //It will print new length of array ---7
console.log(country)                 //prints new array

//method 3

let city2 = ["Pune","Mumbai","Wardha","Jalna","Surat","Nashik","Nagpur"]
/*
pop()
Action----Removes the last element
Return----Same element which is removed
*/
let a3 = city2.pop()     //It will remove last element of array which is Nagpur
console.log(a3)          //It will prints removed element --Nagpur
console.log(city2)       //It will print remaining array

//Method 4 
//[ 'Pune', 'Mumbai', 'Wardha', 'Jalna', 'Surat', 'Nashik' ]

/*
shift()
Action--Removes first element of array
Return--Same element which is removed
*/

let a4 = city2.shift()     //It will removes first element which is Pune
console.log(a4)            //It will print Removed element ie Pune
console.log(city2)         //It will print remaining array


city2[2]="Jaipur"           // It will replace the element at that index with new given element
console.log(city2)