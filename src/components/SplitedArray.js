import { randomizedArray } from "./RandomizeArray";
function splitArray(array) {
  const middleIndex = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, middleIndex);
  const secondHalf = array.slice(middleIndex);
  return [firstHalf, secondHalf];
}
const splitedArray = splitArray(randomizedArray);
export default splitedArray;

// what is the best practice here ? is it the right way and place to implement the above
// function or should i move it to the utils.js or the RandomizedArry.js file ?
