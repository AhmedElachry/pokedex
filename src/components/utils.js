function addZeros(num) {
  return String(num).padStart(3, "0");
}
export function getImageUrl(id) {
  const modifiedId = addZeros(id);
  return (
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" +
    modifiedId +
    ".png"
  );
}
