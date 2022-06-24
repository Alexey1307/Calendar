	// html:
	// <table id="table">
	// 	<thead>
	// 		<tr>
	// 			<th>пн</th>
	// 			<th>вт</th>
	// 			<th>ср</th>
	// 			<th>чт</th>
	// 			<th>пт</th>
	// 			<th>сб</th>
	// 			<th>вс</th>
	// 		</tr>
	// 	</thead>
	// </table>

let firstDayMonth = 0;
let months = document.querySelector('.months').innerHTML;
let curentTime = new Date();
let test = document.querySelector('test');
test

//получаем последний день месяца
function lastDay(months){
	switch(months){
		case 'Январь':
		return 31;
		break;

		case 'Февраль':
		return 28;
		break;

		case 'Март':
		return 31;
		break;

		case 'Апрель':
		return 30;
		break;

		case 'Май':
		return 31;
		break;

		case 'Июнь':
		return 30;
		break;

		case 'Июль':
		return 31;
		break;

		case 'Август':
		return 31;
		break;

		case 'Сентябрь':
		return 30;
		break;

		case 'Октябрь':
		return 31;
		break;

		case 'Ноябрь':
		return 30;
		break;

		case 'Декабрь':
		return 31;
		break;	
	}
}

let lastDayMonth = lastDay(months);


//Создаем массив где start - первый день месяца, end - последний день месяца
function createArr(start, end) {
	let dates = [];
	for(let i = start; i < end; i++){
		dates[i] = i + 1;
	}
	return dates;
}


//Вызываем функцию, результат заносим в переменную
let arrs = createArr(firstDayMonth, lastDayMonth);

//Создаем таблицу
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
document.getElementById('body').appendChild(table);

function createTable(el) {
  for (let i = 0, row; i < el.length; i++) {
    if (i % 7 === 0) {
      row = document.createElement('tr');
      thead.appendChild(row);
    }
    const cell = document.createElement('td');
    cell.innerHTML = el[i];
    row.appendChild(cell);
  }
}

createTable(arrs);