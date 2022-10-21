const input = document.querySelector('.input');
const result = document.querySelector('.result');
const outputBox = document.querySelector('.output');

input.addEventListener('input', () => {
  result.innerHTML = input.value + '%';
  outputBox.style.borderRadius = input.value + '%';
});
