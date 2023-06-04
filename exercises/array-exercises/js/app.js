const problem1Input = document.querySelector('#problem1');
const problem1_2Input = document.querySelector('#problem1-2');
const problem2Input = document.querySelector('#problem2');
const problem3Input = document.querySelector('#problem3');
const indexOfParagraph = document.querySelector('#indexOfResult');
const sumParagraph = document.querySelector('#sumResult');
const squareParagraph = document.querySelector('#squareResult');

const arrayFunctions = new ArrayFunctions();

problem1EventHandler();
problem2EventHandler();
problem3EventHandler();

problem1Input.addEventListener('input', () => {
    problem1EventHandler();
});
problem1_2Input.addEventListener('input', () => {
  problem1EventHandler();
});
problem2Input.addEventListener('input', () => {
  problem2EventHandler();
});
problem3Input.addEventListener('input', () => {
  problem3EventHandler();
});

function problem3EventHandler() {
  squareParagraph.innerHTML = arrayFunctions.square(problem3Input.value.split(`,`));
}

function problem2EventHandler() {
  sumParagraph.innerHTML = arrayFunctions.sum(problem2Input.value.split(`,`).map(Number));
}

function problem1EventHandler() {
  indexOfParagraph.innerHTML = arrayFunctions.indexOf(
    problem1.value.split(`,`),
    problem1_2Input.value
  );
}
