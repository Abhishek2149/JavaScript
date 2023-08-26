//methods in javascript

//program 1
//map()

let birthYear = [1993,1989,1988,2000,2003]
let a = birthYear.map(function(el,index,arr){
    return 2023 - el
})
console.log(a)
//program 2
//filter()
let arr = [33,44,66,88,23,14]
let a1 = arr.filter(function(el,ind,arr){
    return el > 40
})
console.log(a1)

//program 3 
//reduse()

let a2 = arr.reduce(function(acc,el,ind,arr){
    return acc+ el
},0)
console.log(a2)

// progrm 4
//forEach()
//Performs the specified action for each element in an array.

let city = ["Pune","Mumbai","Nagpur"]
let a3 = city.forEach(function(el,index,arr){
    console.log("Welcome to "+el)
})

//program 5

let arr1 = [33,44,66,88,23,14]
//filter()
// it will print all the values with satisfies condition
let a4 = arr1.filter(function(el,index,arr){
    return el > 50
})
console.log(a4)

//program 6
//find()
//it will print only first value which satisfies condition and ignore other values
let a5 = arr1.find(function(el,index,arr){
    return el >50
})
console.log(a5)

//program 7
//findIndex()
//it will print index of the only number wich satisfies the condition first and ignore other

let a6 = arr1.findIndex(function(el,index,arr){
    return el > 50
})
console.log(a6)

//program 8
//every()
//if the every element satisfies the condition it will print true
//and if any element fail to satisfy the condition it will print false
let arr2 = [50,45,89,56,44,569]
let a7 = arr2.every(function(el,ind,arr){
    return el > 40
})
console.log(a7)

//program 9
//some()
//if any one of the element satisfy the condition it will print true
let arr3 = [50,45,89,5,441]
let a8 = arr3.some(function(el,index,arr){
    return el >100
})
console.log(a8)


// Array Methods in JavaScript
//map()-- to perform operation with every element like arithmatic operation
//filter()-- to find out all elements which satisfies the condition
//reduse()-- to accumulate all the elements (convert into single element)
//find()-- to find the first element which satisfies the condition
//findIndex()-- to find the index of first element whitch satisfis the condition
//forEach()-- to perform specified operation for eatch element of the array
//some()-- if some elements or only one element follows the condition it will return true
//every()-- if all elements satisfies the condition it will return true otherwise false