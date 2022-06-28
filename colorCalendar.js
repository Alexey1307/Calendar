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
