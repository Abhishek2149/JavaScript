let ulList = document.querySelector('ul')
let inPut = document.querySelector('input')
let buTon = document.querySelector('#one')

buTon.addEventListener('click',function(){
    let inText = inPut.value
    let newLi = document.createElement('li')
    newLi.textContent = inText
    addButtons(newLi)
    ulList.appendChild(newLi)
})

function addButtons(li){
    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add("Remove")
    li.appendChild(r)
    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add("Up")
    li.appendChild(u)
    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add("Down")
    li.appendChild(d)
}

ulList.addEventListener('click',function(e){
    if(e.target.tagName === "BUTTON"){
        if(e.target.className === "Remove"){
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        else if(e.target.className === "Up"){
            let li = e.target.parentElement
            let ul = li.parentElement
            let prevLi = li.previousElementSibling
            if(prevLi){
                ul.insertBefore(li,prevLi)
            }
        }
        else if(e.target.className === "Down"){
            let li = e.target.parentElement
            let ul = li.parentElement
            let nextLi = li.nextElementSibling
            if(nextLi){
                ul.insertBefore(nextLi,li)
            }
        }
    }
})

let h1Tag = document.querySelector('h1')
h1Tag.addEventListener('click',function(){
    h1Tag.style.color = "Red"
})