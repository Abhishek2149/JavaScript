//Conditional Statements

// one input and multiple output

// numT > 0 && numT <= 5  --- 10 % discount
// numT > 5 && numT <= 10 --- 20 % discount
// numT > 10              --- 30 % discount

// condition --- true or false
// if(condition){
//     // statement
// }

//1  if statement
let numT = 5

if (numT>0 && numT<=5){
    console.log("10% Discount")
}
if(numT>5&&numT<=10){
    console.log("20% Discount")
}
if(numT>10){
    console.log("30% Discount")
}

//2  if....else....if statement
let numY = 5

if (numY>0 && numY<=5){
    console.log("10% Discount")
}
else if(numY>5&&numY<=10){
    console.log("20% Discount")
}
else if(numY>10){
    console.log("30% Discount")
}
else{
    console.log("Incorrect Input")
}

//3 if    statement       IT WILL CHECK ALL THE IF STATEMENTS (CONDITIONS)
let marks = 95
if(marks > 90){
    console.log("A Grade")
}
if(marks > 80){
    console.log("B Grade")
}
if(marks > 70){
    console.log("C Grade")
}
if(marks > 60){
    console.log("D Grade")
}
if(marks > 50){
    console.log("E Grade")
}

//4 if....else.....if statement        IT WILL NOT CHECK ALL CONDITIONS IT WILL ONLY CHECK UPTO A CONDITION WHICH COMES TRUE
let m = 96

if(m > 90){
    console.log("A Grade")
}
else if(m > 80){
    console.log("B Grade")
}
else if(m > 70){
    console.log("C Grade")
}
else if(m > 60){
    console.log("D Grade")
}
else if(m > 50){
    console.log("E Grade")
}
else{
    console.log("Fail Try Again")
}

//5 
let a = 10
let b = 5
if(a>b){
    console.log("a is Greater")
}
else {
    console.log("b is Greater")
}

//6
let x = 100
let y = 50
let z = 10
if(x>y&&x>z){
    console.log("x is Greater")
}
else if(y>x && y>z){
    console.log("y is Greater")
}
else{
    console.log("z is Greater")
}

//7
let s = 10
let t = 50
if(s>t){
    console.log("s is Greater")
}
else{
    console.log("t is Greater")
}

//8 Ternery operator (DIRECT CONDITION STATEMENT)
(s>t)?console.log("s is Greater"):console.log("t is Greater")

let age = 18
let a1 = age>18?"You can Drive":"You Can Not Drive"
console.log(a1)