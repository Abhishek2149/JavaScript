// Logical operator 

// && - AND

// true   &&    true  -----> true
// false  &&    true  -----> false
// true   &&    false -----> false
// false  &&    false -----> false
console.log(5===5 && 6!=='6')
console.log(5!==5 && 6!=='6')
console.log(5===5 && 6==='6')
console.log(5!==5 && 6==='6')

// OR - ||

// true   ||    true  -----> true
// false  ||    true  -----> true
// true   ||    false -----> true
// false  ||    false -----> false
console.log(5===5 || 6!=='6')
console.log(5!==5 || 6!=='6')
console.log(5===5 || 6==='6')
console.log(5!==5 || 6==='6')

// NOT = !
// true  ---- false
// false ---- true
console.log(!(7==='7'))
console.log(!(7===7))


//Conditional Statements
// One input ===== multiple outputs



//syntax
/*
if(condition){
    statement
}
*/


/*
let numT = 2
if(numT > 0&& numT<5){
    console.log("10% discount")
}
if(numT > 5&& numT<10){
    console.log("20% discount")
}
if(numT > 10){
    console.log("30% discount")
}
*/

//OUTPUT ======= 10% discount


const prompt = require("prompt-sync")()
let a = prompt("Enter a Number of Ticket:")

if(a >0 && a<=5){
    console.log("10% discount")
}
else if(a > 5 && a <=10){
    console.log("20% discount")
}
else if(a>10){
    console.log("30% discount")
}
else{
    console.log("Incorrect Value")
}