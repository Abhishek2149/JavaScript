//break statement in for loob

//program 1   print 0 to 2 using break statement program of in 1 to 5
for(let i = 0; i<=5; i++){
    if(i==3){
        break
    }
    console.log(i)       //it will print //0 // 1 // 2    as i turns to 3 it enters if loop and because of break it will exit the loop
}


//program 2    print 5 to 2 (in reverse) using break statemen
for (let i = 5; i>=1; i--){
    console.log(i)
    if(i==2){
        break
    }
}

for (let i = 50; i>=5; i=i-5){
    if(i==25){
        break
    }
    console.log(i)
}

//Continue statement in for loop
//print 1 to 5 skipping 3 using continue

for(let i = 1; i<=5;i++){
    if (i==3){               //because of continue it will skip that value(3)
        continue
    }
    console.log(i)
}

//eg
for (let i = 50; i>=5;i=i-5){
    if (i==25){
        continue
    }
    console.log(i)
}