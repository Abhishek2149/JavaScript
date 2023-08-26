// Session 2 
//Functions - to perform repetative task with less efforts
function calculator(x, y) {
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
}
calculator(100, 5)
calculator(23,66)


//Types of functions
//1 without parmeter and without return type
function sum() {
    console.log(20+36)
}
sum()
sum()
sum()
sum()

//2 with parameter without return type
function sum1(x, y) {
    console.log(x+y)
}
sum1(33, 55)
sum1(66, 99)

//3 with parameter and with return type
function sum2(x,y){
    return x+y
}
let s = sum2(78,22)
console.log(sum2(78,2))
console.log(s)
console.log(s*s)
console.log(s*0.1)