//loops in javascript 


//for loop and while loop
//1 for loop

//syntax
/*
for (initialization; condition check; incriment/decrement){
    statements to be exicuted
}
*/

/*
steps of exicution:
1- initialization- decleration of variable (eg. let i = 0)
2- condition check- check the condition for true or false (eg. i<=10)
3- exicution of statements in for loop- if condition is true it will exicute statements in for loop
   if condition is false it will exit the loop
4- incriment or decrement- after the exicution it will do icriment or decriment as per given or provided
6- NOTE- Initializaten done only once after that it will only 
*check condition*  
*exicute code*  
*incriment/decriment*
*again check condition*
*/


//program  1 print 1 to 3
for (let i = 1; i<=3; i++){
    console.log(i)
}

//program 2 print Hello 10 times
for(let i = 1; i<=10; i++){
    console.log("Hello")
}

// program 3   print 1 to 5 
for(i = 1; i<=5; i++){
    console.log(i)
}

// program 4 print 5 to 1 (reverse)

for(let i = 5; i>=1; i--){
    console.log(i)
}

//program 5 print table of 2
for(i=2; i<=20;i=i+2){
    console.log(i)
}

//program 6 print table of 5 in reverse
for (i=50; i>=5; i=i-5){
    console.log(i)
}

//program 7 print table of 23
for(let i = 23; i<=230; i=i+23){
    console.log(i)
}