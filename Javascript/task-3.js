"use strict"

function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    const hasSpam = lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
    if (hasSpam) {
        return true;
    }
    else {
        return false;  
    }
}
