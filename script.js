//your JS code here. If required.
// script.js
let output = "";
const limit = 20; // As per the instruction to print numbers from 1 to 20

for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        output += "FizzBuzz";
    } else if (i % 3 === 0) {
        output += "Fizz";
    } else if (i % 5 === 0) {
        output += "Buzz";
    } else {
        output += i;
    }
    
    // Add a newline after each entry except the last one
    if (i !== limit) {
        output += "\n";
    }
}

// Display the final string in an alert popup
alert(output);