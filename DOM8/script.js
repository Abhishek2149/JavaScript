let headOne = document.querySelector('h1')
console.log(headOne)
let buttOn = document.querySelector('button')
console.log(buttOn)

buttOn.addEventListener('click',function(){
    headOne.style.color = "green"
    headOne.textContent = "2022 Passout"
})