import PokeCard from "./PokeCard";
import { getImageUrl } from "./utils";

function Pokedex({ pokemonList }) {
  return (
    <>
      {pokemonList.map((pokemon) => (
        <PokeCard
          key={pokemon.id}
          name={pokemon.name}
          imgSrc={getImageUrl(pokemon.id)}
          type={pokemon.type}
          ex={pokemon.base_experience}
        />
      ))}
    </>
  );
}

export default Pokedex;
