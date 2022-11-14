// let character = {
//   id: 8,
//   name: 'Adjudicator Rick',
//   status: 'Dead',
//   species: 'Human',
//   type: '',
//   gender: 'Male',
//   origin: {
//     name: 'unknown',
//     url: '',
//   },
//   location: {
//     name: 'Citadel of Ricks',
//     url: 'https://rickandmortyapi.com/api/location/3',
//   },
//   image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
//   episode: ['https://rickandmortyapi.com/api/episode/28'],
//   url: 'https://rickandmortyapi.com/api/character/8',
//   created: '2017-11-04T20:03:34.737Z',
// };

// console.log(character);
const getEl = x => document.querySelector(x);
let counter = 1;
function getCharacter() {
  fetch(`https://rickandmortyapi.com/api/character?page=${counter}`)
    .then(r => r.json())
    .then(data => {
      console.log(data);
      const markup = data.results
        .map(
          item => `<li class="character-item">
        <img
          src="${item.image}"
          alt=""
        />
        <p>Name: ${item.name}</p>
        <p>Gender: ${item.gender}</p>
        <p>Status: ${item.status}</p>
        
        <p>Location: ${item.location.name}</p>
      </li>`
        )
        .join('');
      getEl('.character-list').insertAdjacentHTML('beforeend', markup);
      counter += 1;
    });
}
getCharacter();

// window.addEventListener('scroll', () => {
//   const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
//   // console.log(scrollHeight);
//   // console.log(scrollTop);
//   // console.log(clientHeight);
//   if (scrollHeight - clientHeight === scrollTop) {
//     getCharacter();
//   }
// });
getEl('.loading-button').addEventListener('click', getCharacter);
