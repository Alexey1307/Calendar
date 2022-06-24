let arr = [ 1,2,3,4,5,6,7,8,9,10,11,12];
let table2 = document.querySelector('#table');

function devideArr(arr){
	for(let elem of arr){
		if(elem<=7){
			let tr = document.createElement('tr');
			let td = document.createElement('td');

			td.innerHTML = elem;
			tr.appendChild(td);
			table2.appendChild(tr);
		}
		else if(elem>7 && elem<=14){
			let tr2 = document.createElement('tr');
			let td = document.createElement('td');

			td.innerHTML = elem;
			tr2.appendChild(td);
			table2.appendChild(tr2);
		}
		
	}
}

devideArr(arr);
	



// for(let subArr of arr){
// 	let tr = document.createElement('tr');

// 	for(let elem of subArr){
// 		let td = document.createElement('td');
// 		td.innerHTML = elem;
// 		tr.appendChild(td);
// 	}
// 	table2.appendChild(tr);
// }