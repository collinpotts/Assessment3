
function handleColor(evt) {
	evt.preventDefault();
	
	alert("My favorite color is purple");
}
function handlePlace(evt) {
	evt.preventDefault();
	
	alert("My favorite place is my house");
}
function handleRitual(evt) {
	evt.preventDefault();
	
	alert("My ritual is starting my day with a couple chess games");
}



let colorButton = document.getElementById('color');
let placeButton = document.getElementById('place');
let ritualButton = document.getElementById('ritual');
colorButton.addEventListener('click', handleColor);
placeButton.addEventListener('click',handlePlace);
ritualButton.addEventListener('click',handleRitual);