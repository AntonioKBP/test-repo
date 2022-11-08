fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then(response => {
    return response.json();
  })
  .then(pokemon => {
    console.log(pokemon);
    const markup = pokemonCardMarkup(pokemon);

    console.log(markup);
  })
  .catch(error => console.log(error));

function pokemonCardMarkup(pokemon) {
  return ` <div class="card">
  <div class="card-img-top">
    <img src="${sprites.front_default}" alt="${name}">
  </div>
  <div class="card-body">
    <h2 class="card-title">Имя: ${name}</h2>
    <p class="card-text">Вес: ${weight}</p>
    <p class="card-text">Рост: ${height}</p>

    <p class="card-text"><b>Умения</b></p>
    <ul class="list-group">${abilities}</ul>
    
      <li class="list-group-item">${ability.name}</li>
    
    </ul>
  </div>
</div>`;
}
