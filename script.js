function firstNonRepeatedChar(str) {
 // Write your code here
	   const charCount = {};

    // Step 1: Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    return null; // If no non-repeated character is found
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
