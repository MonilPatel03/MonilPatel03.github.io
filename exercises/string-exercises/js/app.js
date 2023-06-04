const inputText = document.querySelector('#text');
const reverseParagraph = document.querySelector('#reverse');
const capitalizeParagraph = document.querySelector('#capitalize');
const splitParagraph = document.querySelector('#split');

// create a new instance of WordCounter
const stringFunctions = new StringFunctions();

inputText.addEventListener('input', () => {
    reverseParagraph.innerHTML = stringFunctions.reverse(inputText.value);
    capitalizeParagraph.innerHTML = stringFunctions.capitalize(inputText.value);
    splitParagraph.innerHTML = stringFunctions.split(inputText.value).map(word => `<li>${word}</li>`).join(` `);
});