function logAge(myAge) {
  alert(`I am ${myAge} years old`);
}

// Function declaration
function calAge1(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
const myAge = calAge1(1998);
logAge(myAge);

// Function expression
const calAge2 = function (birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};
const myAge2 = calAge2(1998);
logAge(myAge2);
