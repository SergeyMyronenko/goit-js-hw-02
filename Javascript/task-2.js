"use strict"

function formatMessage(message, maxLength) { 
    const changeMessage = message.slice(0, maxLength) + "...";
    const result = message.length <= maxLength ? `"${message}"` : `"${changeMessage}"`;
}

