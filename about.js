console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted");
}

function handleMouseover(evt) {
	evt.preventDefault();
	
	alert("Ducky says you look great today!!!!");
}


let form = document.querySelector('#contact');
let form1 = document.querySelector('#img');
form.addEventListener('submit', handleSubmit);
form1.addEventListener('mouseover',handleMouseover);