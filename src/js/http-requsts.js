fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then(response => {
    return response.json();
  })
  .then(pokemon => {
    console.log(pokemon);
  })
  .catch(error => console.log(error));

//   <div class="card">
//   <div class="card-img-top">
//     <img src="{{sprites.front_default}}" alt="{{name}}">
//   </div>
//   <div class="card-body">
//     <h2 class="card-title">Имя: {{name}}</h2>
//     <p class="card-text">Вес: {{weight}}</p>
//     <p class="card-text">Рост: {{height}}</p>

//     <p class="card-text"><b>Умения</b></p>
//     <ul class="list-group"></ul>
//     {{#each abilities}}
//       <li class="list-group-item">{{ability.name}}</li>
//     {{/each}}
//     </ul>
//   </div>
// </div>

function pokemonCardMarkup(pokemon) {
    const markupCard = 
  return markupCard;
}

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}
