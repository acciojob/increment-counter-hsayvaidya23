//your JS code here. If required.

let counter = document.getElementById('counter');
let inc = document.getElementById('incrementBtn')

let counterValue = 0;

inc.addEventListener('click', () => {
	alert(counterValue);
	counterValue++;
	counter.textContent = counterValue;
})