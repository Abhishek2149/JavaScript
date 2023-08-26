//<h1 class="BE" id="Mechanical" name = "AVCOE">ABHISHEK</h1>

//by tag
let byTag = document.querySelector('h1')
console.log(byTag)

//by class
let byClass = document.querySelector(".BE")
console.log(byClass)

//by ID
let byId = document.querySelector("#Mechanical")
console.log(byId)

//by Atribute
let byAttr = document.querySelector('h1[name="AVCOE"]')
console.log(byAttr)

console.log(byAttr.textContent)
console.log(byClass.textContent)

byAttr.addEventListener('mouseover',function(){
    byAttr.textContent = "2022 Batch Passout"
    byAttr.style.color  = "green"
})

byAttr.addEventListener('mouseout',function(){
    byAttr.textContent = "ABHISHEK"
    byAttr.style.color  = "orange"
})