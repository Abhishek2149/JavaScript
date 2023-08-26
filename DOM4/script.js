//<h4 class ="three" id = "ab" name ="NAME">ABHISHEK</h4>

//accessing html document as object in javascript
//by Tag
let byTag = document.querySelector('h4')
console.log(byTag)

//by class
let byClass = document.querySelector('.three')
console.log(byClass)

//by Id
let byID = document.querySelector('#ab')
console.log(byID)

//by Atribute
let byAttr = document.querySelector('h4[class = "three"]')
console.log(byAttr)

//to print text content
console.log(byAttr.textContent)

byAttr.addEventListener('mouseover',function(){
    byAttr.textContent = "Abhishek Jaybhaye"
})
byAttr.addEventListener('mouseout',function(){
    byAttr.textContent = "Abhishek"
})