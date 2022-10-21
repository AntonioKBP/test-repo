// const divs = document.querySelectorAll('div');
// console.log(divs);

// // divs.map(div => {
// //   div.style.backgroundColor = getRandomHexColor();
// // });

// divsArr = divs.map();
// console.log(divsArr);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i += 1) {
  cards[i].style.backgroundColor = getRandomHexColor();
  cards[i].addEventListener('click', () => {
    removeClassActive();
    cards[i].classList.add('active');
  });
}

function removeClassActive() {
  for (let i = 0; i < cards.length; i += 1) {
    cards[i].classList.remove('active');
  }
}
