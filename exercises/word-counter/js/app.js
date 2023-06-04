// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const text = document.querySelector('#text');
const stat = document.querySelector('#stat');
// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.

text.addEventListener("input", function(){
    let characters = text.value.trim().length;
    let words = text.value.split(" ").length;

    stat.innerHTML = "You've written " + words + " words and " + characters + " characters."
})
