


//program 1 -- print the ages of peopels in array of given birth years

let birthYears = [1959,2000,1972,1989,1992,1995,1926]
let ages = []             //empty array to store ages
for (let i = 0; i< birthYears.length; i++){
    //console.log(i)       //-- will print index
    //console.log(birthYears[i])     //-- will print birth years one by one
    //console.log(2023- birthYears[i])   //-- will print ages one by one but we required in array
    let x = 2023 - birthYears[i]
    ages.push(x)           //will push ages in empty array
}
console.log(ages)


let birthYears2 = [2000,2001,2003,2004,1947,1950,1988]
let ages1 = []
for(let i = 0 ; i<birthYears2.length ; i++){
    let y = 2023-birthYears2[i]
    ages1.push(y)                    //will push ages in empty array
}
console.log(ages1)


//program 2 --- sort out the numbers above 50 in the array
let num = [50,34,58,66,96,32,31,44,26,100,78]
let above50 = []
for (let i = 0;i<num.length ; i++){
    //console .log(i)     //will print index
    //console.log(num[i])  //will print element of array 
    //above two lines will print index--number---next index----next number------ie. 0  50   1    34   ---
    if(num[i]>50){
        above50.push(num[i])     //will push numbers above 50 in empty array ---above50
    }
}
console.log(above50)


//program 3---sort out deposits(positive) in bank account from the given array & store in array
let transaction = [300,-10,20,-89,899,-45,1000,-56,2000,-61]
let deposits = []
for(let i =0 ;i<transaction.length; i++){
    console.log(i)     // will print all index
    console.log(transaction[i])   //will print all elements like---0  300  1  -10   2   20......  
    if(transaction[i]>0){
        deposits.push(transaction[i])      //it will push deposit (positive ammount) inside empty array
    }
} 
console.log(deposits)


//program 4----do the addition of all elements of the given array
//if arr = [22,66,44]     output----132
let arr = [11,22,33,44,99,66,65,85]
let sum = 0
for(i = 0; i<arr.length ;i++){
    console.log(i)            //will print inex
    console.log(arr[i])        //will print element  like   0  11    1     22    2     33........
    sum = sum + arr[i]
}
console.log(sum)

//practice  --age calculator
const prompt = require("prompt-sync")()
let Year = prompt("Enter your birth year: ")
let age4 = 2023 - Year
console.log(age4)