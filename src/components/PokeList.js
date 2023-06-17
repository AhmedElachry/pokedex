import PokeCard from "./PokeCard";
import getImageUrl from "./utlis";

function PokeList({ pokemonList }) {
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

export default PokeList;
