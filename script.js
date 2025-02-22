// Functions calling other functions
function fruitPieces(fruit) {
  return fruit * 3;
}

function fruitJuice(apples, oranges) {
  const applePieces = fruitPieces(apples);
  const orangePieces = fruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  return juice;
}
console.log(fruitJuice(2, 3));
