// Question 1

function describeValue (value){
    return `${typeof value} | ${value ? "truthy" : "falsy"}`;
}



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




//Question 3

function validateUsername (inputname){
    let username = inputname.toLowerCase();
    if(username.length < 4){
        return "Too Short";
    }
    if(username.includes(" ")){
        return "No Space Allowed";
    }
    if (username.includes("admin")){
        return "Reserved Word"
    }
    return "Available";
}



// Question 4

function getCngFare(distance, isNight = false, waitingminutes = 0){
    let totalFare = 50;
    if(distance > 2){
        totalFare += (distance-2)*15;
    }
    totalFare += waitingminutes * 2;
    if(isNight){
        totalFare *= 1.2;
    }
    return totalFare;
}





// Question No. 5

const getChaseVerdict = (target, scored, ballsleft) => {
    let runsNeeded = target - scored;
    if(runsNeeded <= 0) {
        return "Won";
    }
    if(ballsleft <= 0) {
        return "lost";
    }
    requiredRate = (runsNeeded / ballsleft) * 6;
    let verdict;

    if(requiredRate <= 6) {
        verdict = "Comfortable";
    }
    else if (requiredRate <= 12) {
        verdict = "Tough";
    }
    else {
        verdict = "Almost Impossible";
    }
    return `Need ${runsNeeded} runs in ${ballsleft} balls | ${verdict}`;
}


