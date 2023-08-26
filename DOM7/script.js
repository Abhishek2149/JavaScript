let ChngColor = document.querySelector('h1')
console.log(ChngColor)

ChngColor.addEventListener('click',function(){
    ChngColor.style.color = "red"
    ChngColor.textContent = "Color Changed to Red"
})