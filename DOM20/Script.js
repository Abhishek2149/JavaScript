let bu1 = document.querySelector('button')
let in1 = document.querySelector('input')
let h2 = document.querySelector('h2')
let passWord = "Abhi@2149"
bu1.addEventListener('click',function(){
    let inText =in1.value
    if(inText==passWord){
        h2.textContent="Welcome!"
    }
    else{
        h2.textContent="Wrong Password, Try again!"
    }
})