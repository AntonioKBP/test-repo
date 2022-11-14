function getCharacter() {
  fetch('https://rickandmortyapi.com/api/character').then(r => {
    return r.json;
  });
}
getCharacter();
