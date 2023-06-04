// 🤖: create 2 constants with references to the password input and the reveal button from the DOM
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.
togglePassword.addEventListener('click',function(e){
	const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
	password.setAttribute('type', type);
	this.classList.toggle('bi-eye')
});

// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit',function(e){
	e.preventDefault();
});
