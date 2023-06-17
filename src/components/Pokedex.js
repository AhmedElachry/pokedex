import PokeList from "./PokeList";
import data from "../data/data";
function Pokedex() {
  return <PokeList pokemonList={data} />;
}

export default Pokedex;
