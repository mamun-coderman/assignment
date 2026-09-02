//Question 2

function getDayType (inputDay){
    let day = inputDay.toLowerCase();
    
    switch(day){
        case "friday" :
        case "saturday" :
            return "Weekend";
            break;

        case "sunday" : 
        case "monday" :
        case "tuesday" :
        case "wednesday" :
        case "thursday" :
            return "Working Day";
            break;
        default:
            return "Invalid Day";
    }
}


console.log(getDayType("Tuesday"));
console.log(getDayType("hollyday"));
console.log(getDayType("friday"));



