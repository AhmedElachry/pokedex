function PokeCard({ imgSrc, ...pokemon }) {
  return (
    <div className="poke-card">
      <h2>{pokemon.name}</h2>
      <img src={imgSrc} alt={pokemon.name} />
      <p>Type:{pokemon.type}</p>
      <p>EXP:{pokemon.ex}</p>
    </div>
  );
}

export default PokeCard;
