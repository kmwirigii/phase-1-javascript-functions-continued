// code your solution here
// Function saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Function mondayWork
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

// Function wrapAdjective
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Test cases
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog")); 

console.log(mondayWork()); 
console.log(mondayWork("work from home"));

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); 
console.log(wrapAdjective("%")("a dedicated programmer")); 