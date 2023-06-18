function WhoWonned(firstHalf, secondHalf) {
  let firstHalfExpSum = 0;
  let secondHalfExpSum = 0;
  let winner;
  firstHalf.forEach((ele) => {
    firstHalfExpSum += ele.base_experience;
  });
  secondHalf.forEach((ele) => {
    secondHalfExpSum += ele.base_experience;
  });
  if (firstHalfExpSum > secondHalfExpSum) {
    winner = "first";
  } else {
    winner = "second";
  }
  return [winner, firstHalfExpSum, secondHalfExpSum];
}
export default WhoWonned;
