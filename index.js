// code your solution here
function saturdayFun(event = "roller-skate") {
    return `This Saturday, I want to ${event}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(specialCharacter = "*") {
    return function (message = "special") {
        return `You are ${specialCharacter}${message}${specialCharacter}!`
    }
}