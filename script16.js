//array methods in javascript
/*push()
pop()
shift()
unshift()
includs()
indexOf()
at()
concat()
reverse()
join()
*/

/*
Importent array methods
//map()-- to perform operation with every element like arithmatic operation
//filter()-- to find out all elements which satisfies the condition
//reduse()-- to accumulate all the elements (convert into single element)
//find()-- to find the first element which satisfies the condition
//findIndex()-- to find the index of first element whitch satisfis the condition
//forEach()-- to perform specified operation for eatch element of the array
//some()-- if some elements or only one element follows the condition it will return true
//every()-- if all elements satisfies the condition it will return true otherwise false
*/



//Remaining array methods 
/*
slice()
sort()
splice()
fill()
*/

//slice()-Returns a copy of a section of an array.
//          0  1  2 3  4  5  6   7
let arr = [22,55,66,99,87,58,36,14]
//        -8  -7 -6 -5 -4 -3 -2 -1              negative(reverse) insexing only applicable for slice() method
//syntax   arr.slice(start index,end index)
let a = arr.slice(1,-1)           //it will print elements from 1 to 6(-2) as it does not include end point index
console.log(a)
console.log(arr.slice(0,4))      //index 4 will not included

//sort() --Sorts an array in place. This method mutates the array and returns a reference to the same array.
//Arrange (sort) the array according to ***ascii values***
let names = ["Abhishek","Akash","Raj","Swaraj","Rohan"]
console.log(names.sort())
console.log(a.sort())

//splice()--Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//if necessary, inserts new elements in their place, returning the deleted elements.

//              0           1       2       3      4        5      6       7       8
let names1 = ["Vishal","Abhishek","Akash","Raj","Swaraj","Rohan","Ram","Sachin","Rohit"]
//syntax names1.splice(start insex,number of elements to be removed)
//console.log(names1.splice(2,1))          //it will remove 1 element from 2 index
//console.log(names1.splice(0,3))
names1.splice(0,3,"Sham","Sunder","Roshan")        //it will add elements from 0 index and replece the existing one
console.log(names1)

//fill() --Changes all array elements from start to end index to a static value and returns the modified array

 //         0  1  2  3 4 5 6 7
let num2 = [11,22,66,1,4,8,9,45]
console.log(num2.fill('a',0,2))           //it will fill a from 0 to 1 as 2 is not included
console.log(num2.fill('*',2,5))           //5 is not includes