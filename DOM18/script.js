//css selector and get element by ID
let buTton = document.querySelector('#button')
console.log(buTton)
let byId = document.getElementById('button')
console.log(byId)

//by class name
/*
<ul>
        <li class="fr">Apple</li>
        <li class="fr">Mango</li>
        <li class="fr">Orange</li>
</ul>
*/
let c1 = document.querySelector('.fr')       //retrive only first element
console.log(c1)

let c2 = document.querySelectorAll('.fr')     //retrive all elements as NodeList
console.log(c2)  
 let c3 = document.getElementsByClassName('fr')     //retrive all elements as HTMLCollection
 console.log(c3)

 //by tag name
 let h1 = document.querySelector('h1')
 console.log(h1)
 let h2 = document.querySelectorAll('h1')       //nodelist
 console.log(h2)
let h3 = document.getElementsByTagName('h1')   //htmlcollection
console.log(h3)

//by name
let n1 = document.querySelector('[name = "nm1"]')
console.log(n1)
let n2 = document.querySelectorAll('[name = "nm1"]')       //nodelist
console.log(n2)
let n3 = document.getElementsByName('nm1')                 //nodelist
console.log(n3)

//<h2 class="one two" id="i" name="nm">Head</h2>
let he1 = document.querySelector('h2')
console.log(he1)
console.log(he1.className)       //gives class name
console.log(he1.classList)       //gives cass list


//adding and removing class
//1 using add and remove
he1.classList.add('three')
console.log(he1)
he1.classList.remove('two')
console.log(he1)

//2--using toggle
he1.classList.toggle('four')  //if present it will remove or if not present it will add
console.log(he1)
he1.classList.toggle('one')
console.log(he1)

//
let a = he1.getAttribute('id')
console.log(a)
he1.setAttribute('data-cy',"o")
console.log(a)