// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// Examples:
// // returns "theStealthWarrior"
// toCamelCase("the-stealth-warrior") 

// // returns "TheStealthWarrior"
// toCamelCase("The_Stealth_Warrior")
function toCamelCase(str) {
    const words = str.indexOf('-') > -1 ? str.split('-') : str.split('_');
    return words.map((v, i) => i !== 0 ? v[0].toUpperCase() + v.substring(1, v.length) : v).join('');
}
const result = toCamelCase('hello-my-world');
console.log(result);