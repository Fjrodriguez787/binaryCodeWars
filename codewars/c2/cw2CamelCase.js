// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// Examples:

// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior")

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")

function toCamelCase (str) {
  var strArr = str.split('')
  for (var i = 0;i < strArr.length; i++){
    if (strArr[i] === '_' || strArr[i] === '-'){
      strArr.splice(i,1)
      strArr[i] = strArr[i].toUpperCase()
    }
  }
  return strArr.join('')
}
