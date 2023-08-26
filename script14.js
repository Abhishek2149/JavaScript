//---------------practice-----------------------
//write a program to sort out even numbers from array

let a = [50,33,12,22,23,24,2,20,42,44,55,56,65,59,89]
let even = []
for(i=0;i<a.length;i++){
    if(i%2==0){
        even.push(a[i])
    }
}
console.log(even)


//program 1
//using loop--------------------
let birthYears = [1959,2000,1972,1989,1992,1995]
let ages = []             
for (let i = 0; i< birthYears.length; i++){
    let x = 2023 - birthYears[i]
    ages.push(x)           
}
console.log(ages)

//using array method--------------------
//map method--Calls a defined callback function on each element of an array, and returns an array that contains the results.
//used to perform arithmatic operations on array
let q1 = birthYears.map(function(el,index,arr){
    /*
    console.log(el,index,arr)
    output<<<<<<
    1959 0 [ 1959, 2000, 1972, 1989, 1992, 1995 ]
    2000 1 [ 1959, 2000, 1972, 1989, 1992, 1995 ]
    1972 2 [ 1959, 2000, 1972, 1989, 1992, 1995 ]
    1989 3 [ 1959, 2000, 1972, 1989, 1992, 1995 ]
    1992 4 [ 1959, 2000, 1972, 1989, 1992, 1995 ]
    1995 5 [ 1959, 2000, 1972, 1989, 1992, 1995 ]
    */
    return 2023 - el
})
console.log(q1)

//program 2 --- sort out the numbers above 50 in the array 
//using loop----------
let num = [50,34,58,66,96,32,31,44,26,100,78]
let above50 = []
for (let i = 0;i<num.length ; i++){
    if(num[i]>50){
        above50.push(num[i]) 
    }
}    
console.log(above50)


//using array method
//filter
//Returns the elements of an array that meet the condition specified in a callback function.
//used to sort out elements of array
let q3 = num.filter(function(el,index,arr){
    return el > 50
})
console.log(q3)

//program 3----do the addition of all elements of the given array
//if arr = [22,66,44]     output----132
let arr = [11,22,33,44,99,66,65,85]
let sum = 0
for(i = 0; i<arr.length ;i++){        
    sum = sum + arr[i]
}
console.log(sum)

//using array method
/*
Calls the specified callback function for all the elements in an array. The return
value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.
*/
//used to get finel total(accumulated result)
let q4 = arr.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q4)