function logName(firstName) {
  console.log(`Hello, I'm ${firstName}, 26 years old, and I love JavaScript.`);
}
const firstName = prompt("What is your first name?");
console.log(logName(firstName));

function makeJuice(ingredient1, ingredient2) {
  console.log(`Juice made with ${ingredient1} and ${ingredient2}`);
}
const ingredient1 = prompt("What is the first ingredient?");
const ingredient2 = prompt("What is the second ingredient?");
console.log(makeJuice(ingredient1, ingredient2));
