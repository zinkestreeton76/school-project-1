function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomNodeJSCode() {
  const randomNumber = getRandomNumber(10);
  return `const myVariable = ${randomNumber};`;
}
