let inPut = document.querySelector('input')
let buTon = document.querySelector('#One')
let ulList = document.querySelector('ul')

ulList.addEventListener('click',function(e){
    //console.log(e.target)            //retrive complete element
    //console.log(e.target.tagName)     // retrive tag Name in capitals
    //console.log(e.target.className)   //retrive class name
    if(e.target.tagName === "BUTTON"){
        if(e.target.className === "Remove"){
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        else if(e.target.className === "Up"){

        }
        else if(e.target.className === "Up"){
            
        }
    }
})



buTon.addEventListener('click',function(){
    let inText = inPut.value
    let nweLi = document.createElement('li')
    nweLi.textContent = inText
    addButtons(nweLi)
    ulList.appendChild(nweLi)
    inPut.textContent = ""
})

function addButtons(li){
    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('Remove')
    li.appendChild(r)

    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('Up')
    li.appendChild(u)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('Down')
    li.appendChild(d)
}