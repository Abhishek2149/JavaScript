//Print 1 to 10 using for loop inside function
function PrintNumbers() {
    for (i = 1; i <= 10; i++) {
        console.log(i)
    }
}
PrintNumbers()

//print even numbers and their count from the given array

let a = [2, 3, 4, 5, 6, 7, 8, 9, 77, 89, 66, 98, 45, 63, 44, 42, 41, 42, 46, 56, 102, 10, 33, 103, 104, 105, 109, 406, 4066]
let c = 0
function Even() {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            console.log(a[i])
            c = c + 1
        }
    }
    console.log(c)

}
Even()

//Power of number 
function Power(num, pow) {
    let res = 1                  //return the value 1 for power 0
    for (let i = 0; i < pow; i++) {    // run nuber of times as power given
        res = res * num
    }
    return res
    /*
    for num = 2 & pow = 3
    0<3             1<3              2<3           3<3 
    res=1*2         res=2*2          res=4*2       condition false
      2                 4               8
    */
}
let r = console.log(Power(2, 3))       //we can not dirctly print res as it is defined inside the function

//subtract 10 from each element of array
let arr = [12, 22, 32, 66, 99]
let ac = arr.map(function (element, index, array) {
    return element - 10
})
console.log(ac)

//filter out even numbers from the array
let ad = arr.filter(function (element, index, array) {
    return element % 2 == 0
})
console.log(ad)


//add all elements of the array
let cd = arr.reduce(function (acc, el, index, arr) {
    return acc + el
},0)        //value to passed to acc
console.log(cd)
//let d = ad.push(cd)
//console.log(d)     //new length of ad
//console.log(ad)
//console.log(ad.length)   // length of ad
//console.log(typeof (ad))




function predictFuture() {
  var predictions = [
    "You will embark on an exciting journey.",
    "A new opportunity will present itself to you.",
    "You will meet someone who will change your life.",
    "Financial prosperity is on the horizon.",
    "A challenge will test your strength and resilience.",
    "A long-awaited dream will come true.",
    "An unexpected surprise will brighten your day."
  ];

  var prediction = predictions[Math.floor(Math.random() * predictions.length)];
  return prediction;
}

// Example usage:
var futurePrediction = predictFuture();
console.log("Future Prediction: " + futurePrediction);