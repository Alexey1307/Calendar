const colors = {
  '3': 'green',
  '2': 'green',
  '1': 'green',
  '0': 'red',
};

const setColor= input => {
	const { value } = input;
	if (colors.hasOwnProperty(value)) {
		input.style.backgroundColor = colors[value];
  }
}

const onInput = e => {
	setColor(e.target);
}

let rooms = document.querySelectorAll('.input');
	rooms.forEach(elem => {
	    elem.addEventListener('input', onInput);
	    setColor(elem);
});


let days = document.querySelectorAll('.items');
	days.forEach(
		function(elem){
			elem.style.backgroundColor = 'orange';
});


const d = new Date();
document.getElementById("demo").innerHTML = d;