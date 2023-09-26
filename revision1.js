let arr = [11,22,66,-88,-77,56,-8]
let positiveArr =[]
let negativeArr =[]
for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        positiveArr.push(arr[i])
    }
    else{
        negativeArr.push(arr[i])
    }
}
// console.log(positiveArr)
// console.log(negativeArr)

let arr1 = arr.filter(function(el,arr){
    return el>0
})
// console.log(arr1)

let arr2 = arr.filter(function(el,arr){
    return el<0
})
// console.log(arr2)

const prompt=require('prompt-sync')()
let n= prompt("enter length of array:")
// console.log(typeof(n))
n = parseInt(n)
// console.log(typeof(n))
let arr3=[]
for(let i=0;i<n;i++){
    m = prompt("Enter array element at" +i+" :")
    arr3.push(parseFloat(m))
}
// console.log(arr3)

let po = arr3.filter(function(el,inx,arr){
    return el>0
})
console.log(po)

let ne = arr3.filter(function(el,inx,arr){
    return el<0
})
console.log(ne)