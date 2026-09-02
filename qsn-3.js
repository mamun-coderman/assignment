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

console.log(validateUsername("mamun ahmed"));
console.log(validateUsername("Moon"));
console.log(validateUsername("1"));
console.log(validateUsername("mamunadmin"));