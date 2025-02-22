// Arrow Function
const calAge = (birthYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};
console.log(calAge(1998));

const calAge2 = (birthYear) => new Date().getFullYear() - birthYear;
console.log(calAge2(1998));

const calcAge3 = (birthYear, FirstName) => {
  const age = new Date().getFullYear() - birthYear;
  return `${FirstName} is ${age} years old`;
};
console.log(calcAge3(1998, "Ahmed"));
