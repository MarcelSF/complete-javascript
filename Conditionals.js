const prompt = require('prompt-sync')();

let tempInput = prompt('What is the temperature today?')
let temp = parseInt(tempInput)

if (temp > 20) {
  console.log('It\'s very very hot!')
} else if (temp < 15) {
  console.log('You are not in Rio anymore')
} else {
  console.log('Please use a number!')
}

const authenticated = true;

authenticated ? console.log('yes') : console.log('no') // Ternary test!
