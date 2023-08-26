//    <h1 class="one" id="two" name = "nm">Abhishek</h1>

//1  by id
let one = document.querySelector("#one")
console.log(one)
 

//method 2
let two = document.getElementById("one")
console.log(two)


//by class
let three = document.querySelector(".fruits")         //it gives only first element of that class as an htmlelement
console.log(three)

let four = document.querySelectorAll(".fruits")       //it gives all elements of that class as an nodeList
console.log(four)

let five = document.getElementsByClassName("fruits")   //it gives all elements of that class as an HTMLcollection
console.log(five)


/*
HTMLcollection            vs     NodeList
if we delete elemnts            its length does
its length get                  not update
updeted
*/

//by attribute
let six = document.querySelector('li[name="Fr"]')       //it gives only first element
console.log(six)
let seven = document.querySelectorAll('[name = "Fr"]')    //it gives all elements as NodeList
console.log(seven)

//by heading
let head = document.querySelector('h1')
console.log(head)

let eight = document.getElementsByName('Fr')       //NodeList
console.log(eight)

let liList = document.querySelectorAll('li')        //NodeList
console.log(liList)

let li2 = document.getElementsByTagName('li')       //htmlcollection
console.log(li)