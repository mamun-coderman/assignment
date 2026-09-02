// Question 4

function getCngFare(distance, isNight = false, waitingminutes = 0){
    let fare = 50;
    if(distance > 2){
        fare += (distance-2)*15;
    }
    fare += waitingminutes * 2;
    if(isNight){
        fare *= 1.2;
    }
    return fare;
}

console.log(getCngFare(10, true, 30));
console.log(getCngFare(10, 30));
console.log(getCngFare(10, true));
console.log(getCngFare(10));