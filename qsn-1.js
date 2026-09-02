// Question 1

function describeValue (value){
    return `${typeof value} | ${value ? "truthy" : "falsy"}`;
}


console.log(describeValue("mamun"));
console.log(describeValue("100"));
console.log(describeValue(""));
console.log(describeValue(0));
console.log(describeValue(100));
console.log(describeValue(null));
console.log(describeValue(undefined));
console.log(describeValue(true));