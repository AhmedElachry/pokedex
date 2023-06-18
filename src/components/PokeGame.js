import splitedArray from "./SplitedArray";
import WhoWonned from "./WhoWonned";
import GameSection from "./GameSection";
function PokeGame() {
  const [firstHalf, secondHalf] = splitedArray;
  const [winner, firstTotalExp, secondTotalExp] = WhoWonned(
    firstHalf,
    secondHalf
  );
  return (
    <>
      <GameSection
        title="Winner"
        totalExp={winner === "first" ? firstTotalExp : secondTotalExp}
        pokemonList={winner === "first" ? firstHalf : secondHalf}
      />
      <GameSection
        title="Loser"
        totalExp={winner === "first" ? secondTotalExp : firstTotalExp}
        pokemonList={winner === "first" ? secondHalf : firstHalf}
      />
    </>
  );
}

export default PokeGame;
