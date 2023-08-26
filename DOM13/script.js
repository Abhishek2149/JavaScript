let ulList = document.querySelector('ul')
let inPut = document.querySelector('input')
let buTon = document.querySelector('#one')


ulList.addEventListener('click',function(e){
    //console.log(e.target)         //it gives complete element on clicking on that element
    //console.log(e.target.tagName)    //it gives tag name in capitals
    //console.log(e.target.className)   //it gives class name

    if(e.target.tagName === "BUTTON"){
        if(e.target.className === "Remove"){
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        else if(e.target.className === "Up"){

        }
        else if(e.target.className === "Down"){
            
        }
    }
})

buTon.addEventListener('click',function(){
    let inText = inPut.value
    let nweLi = document.createElement('li')
    nweLi.textContent = inText
    AddButtons(nweLi)
    ulList.appendChild(nweLi)     //adding to ul
    inPut.textContent = ""
})

function AddButtons (li){
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