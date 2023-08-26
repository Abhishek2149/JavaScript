let ulList = document.querySelector('ul')
let buTon = document.querySelector('#One')
let inPut = document.querySelector('input')
buTon.addEventListener('click',function(){
    let inText = inPut.value                              //storing entered value
    let newElement = document.createElement('li')         //creating new element
    newElement.textContent = inText
    Buttons(newElement)
    ulList.appendChild(newElement)
})

function Buttons(li){
    let u = document.createElement('button')         //crating button
    u.classList.add = "Up"                //adding class to button
    u.textContent = "Up"           //adding text to button
    li.appendChild(u)           //appending button to li

    let d = document.createElement('button')
    d.classList.add = "Down"
    d.textContent = "Down"
    li.appendChild(d)


    let r = document.createElement('button')         //crating button
    r.classList.add = "Remove"                //adding class to button
    r.textContent = "Remove"           //adding text to button
    li.appendChild(r)           //appending button to li
}