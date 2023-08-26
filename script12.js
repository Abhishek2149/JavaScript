//---------------revision---------------
/*
length
push()
unshift()
pop()
shift()
*/
let arr = [1,12,33,45,66,45]
console.log(typeof(arr))
//printing elements one by one
for(i = 0;i<arr.length;i++){
    console.log(arr[i])
}

console.log(arr.length)
//Gets or sets the length of the array. This is a number one higher than the highest index in the array.
let a = arr.push(12)

//Appends new elements to the end of an array, and returns the new length of the array.
console.log(a)
console.log(arr)

let names = ["Abhishek","Akash","Punkaj"]
//printing elements in revers
for (let i=names.length - 1;i>=0;i--){
    console.log(names[i])
}

let b = names.unshift("Ram")
//Inserts new elements at the start of an array, and returns the new length of the array.
console.log(b)
console.log(names)

let c = names.pop()
//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(c)
console.log(names)

let d = names.shift() 
/*
Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
*/
console.log(d)
console.log(names)


//----methods 2.0----------

//method 5
/*
includes()
Determines whether an array includes a certain element, returning true or false
*/
//                  0           1          2        3
let vegetable = ["cabbage", "carrot", "brinjal", "tomato"]
let a1 = vegetable.includes("cabbage")
console.log(a1)

//method 6 
/*
indexOf()
The value to locate in the array.
Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
*/
let a2 = vegetable.indexOf("tomato")
console.log(a2)          //returns the index of element in the array ----- 3
let a3 = vegetable.indexOf("Tomato")
console.log(a3)          //prints -1 as element is not in the array

//method 7 
/*
at()
print the element at that index
*/
let a4 = vegetable.at(2)      //will print the element at index 2----brinjal
console.log(a4)

//method 8
/*
concat()
Combines two or more arrays. This method returns a new array without modifying any existing arrays.
*/
let num1 = [22,33,66,99,88,45,11,25,7]
let num2 = [101,10,82,333,4,45,7,9,18]

let a5 = num1.concat(num2)
console.log(a5)              //it will combine num1 & num2   **num1 first and num 2 second**
console.log(typeof(a5))

let a6 = num2.concat(num1)
console.log(a6)

//method 9
/*
reverse()
Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
*/
let arr3 = [1,2,3,4,5,6,7,8,9,10]
let a7 = arr3.reverse()        //it will reverse array from 10 to 1
console.log(a7)
console.log(typeof(a7))

//method 10
/*
join()
Adds all the elements of an array into a string,
 separated by the specified separator string.
*/
let country1 = ["India","Japan","China","Russia","USA"]
let a8 = country1.join()    //elements seperated by ***  ,  ***
console.log(a8)
//array convered into string
let a9 = country1.join("@")     //elements seperated by ***  @  ***  And this is known as seperator string
console.log(a9)
console.log(typeof(a9))        //Type----string

