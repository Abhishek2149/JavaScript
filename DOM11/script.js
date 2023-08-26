let headOne = document.querySelector('h1')
console.log(headOne)
let ulOne = document.querySelector('ul')
console.log(ulOne)

let buOne = document.querySelector('#One')
let inPut = document.querySelector('input')

buOne.addEventListener('click',function(){
    let inText = inPut.value
    let newElement = document.createElement('li')
    newElement.textContent = inText
    createButtons(newElement)
    ulOne.appendChild(newElement)
    inPut.value= ""
})

/*Create buttons
<button class="Remove">Remove</button>
<button class="Up">Up</button>
<button class="Down">Down</button>
*/

function createButtons(li) {
    let r = document.createElement('button')    //<button></button>
    r.classList.add('Remove')            //<button class = "Remove"></button>
    r.textContent="Remove"            //<button class = "Remove">Remove</button>
    li.appendChild(r)

    let u = document.createElement('button')    //<button></button>
    u.classList.add('Up')            //<button class = "Up"></button>
    u.textContent="Up"            //<button class = "Up">Remove</button>
    li.appendChild(u)

    let d = document.createElement('button')    //<button></button>
    d.classList.add('Down')            //<button class = "Down"></button>
    d.textContent="Down"            //<button class = "Down">Remove</button>
    li.appendChild(d)
}
