/*
program 1--index.html


let headOne = document.querySelector('h1')
console.log(headOne)

headOne.addEventListener('click',function(){
    headOne.textContent = "2022 Passout"
    headOne.style.color = "green"
})
*/

/*
program 2 ----- index1.html


let hdOne = document.querySelector('h1')
let buOne = document.querySelector('button')
console.log(hdOne)
console.log(buOne)

buOne.addEventListener('click',function(){
    hdOne.textContent = "2022 PASSOUT"
    hdOne.style.color = "green"
})
*/
/*
program 3 -----index2.html


let hOne = document.querySelector('h1')
let iOne = document.querySelector('input')
let bOne = document.querySelector('button')

console.log(hOne)
console.log(iOne)
console.log(bOne)

bOne.addEventListener('click',function(){
    let enTry = iOne.value
    hOne.textContent = "2022 PASSOUT"
    hOne.style.color = enTry
    iOne.value =""
})
*/


//practice code
//Eligibility Check application

let hOne = document.querySelector('h1')
let iOne = document.querySelector('input')
let bOne = document.querySelector('button')

console.log(hOne)
console.log(iOne)
console.log(bOne)

bOne.addEventListener('click',function(){
    let enTry = iOne.value
    if(enTry >=40){
        hOne.textContent = "Congratulations! You are Eligible"
        hOne.style.color = 'green'
    }
    else{
        hOne.textContent = "Sorry, You are not eligible"
        hOne.style.color = 'red'
    }
})