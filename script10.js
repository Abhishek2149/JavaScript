
//While loop
/*syntax
initialization
whie(condition){
    statement
    incriment/decriment
}
*/

//print 1 to 5
let a = 1
while (a<=5) {
    console.log(a)
    a++
}

//print hello 10 times
let b = 1
while (b<=10) {
    console.log('hello')
    b++
}

//print 5to 1 (reverse)
let c = 5
while (c>=1) {
    console.log(c)
    c--
}

//print table of 2
let d = 2
while (d<=20) {
    console.log(d)
    d = d+2
}

//print table of 5 in reverse
let e = 50
while(e>=5){
    console.log(e)
    e = e-5
}

//break statement in while loop(before statement)
let m = 1
while (m<=5) {
    if (m==3){     //it will only print 1 2
        break
    }
    console.log(m)
    m++
}

//break statement in while loop (after statement)
let n =1
while (n<=5) {
    console.log(n)
    if (n==3){        // it will print 3 as well
        break
    }
    n++
}

//sample 10 to 1
let a1 = 10
while (a1>=1) {
    console.log(a1)
    if(a1==4){
        break
    }
    a1--
}

// continue statement in while loop
let t8 = 1
while(t8 <= 5){
    if(t8 == 3){
        t8 ++ // 4
        continue;
    }
    console.log(t8) // 1 // 2 // 4 // 5
    t8++ // 2 // 3 // 5 // 6
}

let z = 1
while (z<=8) {
    if(z==5){        //it will skip that value
        z++         //inciment decriment should done before continue
        continue  
    }
    console.log(z)
    z++
}
