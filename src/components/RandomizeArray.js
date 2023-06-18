import data from "../data/data";
const arrayToRandomize = data.slice();
function randomizeArray(array) {
  let randomizedArray = [];
  while (array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
    randomizedArray.push(randomElement);
    array.splice(randomIndex, 1);
  }
  return randomizedArray;
}

export const randomizedArray = randomizeArray(arrayToRandomize);

// what is the best practice here ? is it the right way and place to implement the above
// function or should i move it to the utils.js file ?
