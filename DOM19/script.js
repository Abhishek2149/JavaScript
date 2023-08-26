//program 1 
// let liList = document.querySelectorAll('li')

// for (let i = 0; i<liList.length;i++){
//     if(i%2==0){
//         liList[i].style.color="green"
//     }
//     else {
//         liList[i].style.color="red"
//     }
// }

//program 2 
let ulList = document.querySelector('ul')
let liList = document.querySelectorAll('li')
ulList.addEventListener('mouseover',function(){
    for(let i = 0;i<liList.length;i++){
        liList[i].style.color="green"
    }
})
ulList.addEventListener('mouseout',function(){
    for(let i = 0;i<liList.length;i++){
        liList[i].style.color="red"
    }
})

//program 3
ulList.addEventListener('dblclick',function(){
    for(i=0;i<liList.length;i++){
        liList[i].style.color="purple"
    }
})

let r = document.getElementById('one')
r.addEventListener('click',function(){
    location.reload()
})