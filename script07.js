// Switch case statments ----- wihout break
let city = 'Pune'

switch(city){
    case 'Pune':
        console.log('MH')
    case 'Jaipur':
        console.log('RH')    
    case 'Indore':
        console.log('MP')
    case 'Ahmdabad':
        console.log('GH')
    case 'Amritsar':
        console.log('PUNJAB')
    default:
        console.log("Incorrect City Name")
}


// 2--- switch case statments------with break 

let city2 = 'Amritsar'

switch(city2){
    case 'Pune':
        console.log('MH')
    break
    case 'Jaipur':
        console.log('RH')
    break        
    case 'Indore':
        console.log('MP')
    break
    case 'Ahmdabad':
        console.log('GH')
    break
    case 'Amritsar':
        console.log('PUNJAB')
    break
    default:
        console.log("Incorrect City Name")
}


//3--- Switch case statement with multiple cases

let city3 = "bhopal"
switch (city3) {
    case 'pune':
    case 'nagpur':
        console.log('MH')
        break
    case 'jaipur':
    case 'udaipur':
        console.log('RJ')
        break
    case 'lucknow':
    case 'varasani':
        console.log('UP')
        break
    case 'indore':
    case 'bhopal':
        console.log('MP')
        break
    default:
        console.log('incorrect city name')
}


// true or false values 

// true values  ---> 1, -1 ," ","abhishek","A","123,{},[], 5===5 ,true
// false values ---> 0 , undefined , null , NaN , "", 4 < 3 , false


if(false){
    console.log("hello")
}
else {
    console.log('bye')
}
