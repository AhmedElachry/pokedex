function getImageUrl(id) {
  return (
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    id +
    ".png"
  );
}

export default getImageUrl;
