/* Question 4: Capitalize Words
    Write a program that accepts a string as input, capitalizes the first letter of each word in the
    string, and then returns the result string. 
*/

const sampleString = "Hello, My name is Nimrod. A meta certified backend engineer"

function capitalizeWords(str) {
    let capitalizedString = str.replace(/\b\w/g, (char) => char.toUpperCase());
    console.log(`Sample string: ${sampleString}\nCapitalized string:${capitalizedString}`)
    return capitalizedString
}

capitalizeWords(sampleString)

