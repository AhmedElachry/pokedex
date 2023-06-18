import Pokedex from "./Pokedex";
function GameSection({ title, totalExp, pokemonList }) {
  return (
    <>
      <div className="show-status">
        <h2 style={title === "Winner" ? { color: "green" } : { color: "red" }}>
          {title}
        </h2>
        <p>Total experience: {totalExp}</p>
      </div>
      <Pokedex pokemonList={pokemonList} />
    </>
  );
}
export default GameSection;
