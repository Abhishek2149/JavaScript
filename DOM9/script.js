let hdOne = document.querySelector('h1')
let inPut = document.querySelector('input')
let buTon = document.querySelector('button')
buTon.addEventListener('click',function(){
    let enterColr = inPut.value
    hdOne.style.color = enterColr
    inPut.value = ""
    hdOne.textContent = "Entered color is " + enterColr
})