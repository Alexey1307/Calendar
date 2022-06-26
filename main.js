const monthsName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let months = document.querySelector('.months');
let years = document.querySelector('.years');

let curentDate = new Date();
let curentYear = curentDate.getFullYear();
let curentMonth = curentDate.getMonth();

function createCalendar(elem, year, month){
  let mon = month - 1;
      let d = new Date(year, mon);

      for(let i =0; i<=curentYear; i++){
        if(i==curentYear){
           years.innerHTML = curentYear;
        }
      }

      for(let i =0; i<=monthsName.length; i++){
        if(i == curentMonth){
          months.innerHTML = monthsName[i];      
      }  
    }

      let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

      // пробелы для первого ряда
      // с понедельника до первого дня месяца
      for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }

      // <td> ячейки календаря с датами
      while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
          table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
      }

      // добить таблицу пустыми ячейками, если нужно
      // 29 30 31 * * * *
      if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }

      // закрыть таблицу
      table += '</tr></table>';

      elem.innerHTML = table;
}

function getDay(date){
  let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
}

createCalendar(calendar, curentYear, curentMonth-1);


//реализация переключения стрелок
function switchMounth(){
  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');
  
  prev.addEventListener('click', ()=>{
    for(let i =0; i<=monthsName.length; i++){
      if(i == curentMonth){
        let a = i-1;
        
        //Проблемное место - сделай чтоб с текущего месяца а не минус 1???
        if (curentMonth == curentDate.getMonth()){
            prev.disabled = true;
          }
        else if (curentYear > 2022 && curentMonth == 0) {
          curentYear -= 1;
          curentMonth = 13;

          createCalendar(calendar, curentYear, curentMonth);
          months.innerHTML = monthsName[i];
          years.innerHTML = curentYear;
        }
          else{
          createCalendar(calendar, curentYear, curentMonth);
          }

        -- curentMonth;
        console.log(curentMonth);
        months.innerHTML = monthsName[a];
          }  
      }  
  })

    next.addEventListener('click', ()=>{
    curentMonth++;
      prev.disabled = false;

    for(let i =monthsName.length; i>=0; i--){
      if(i == curentMonth){
        createCalendar(calendar, curentYear, curentMonth);
        console.log(curentMonth);
        console.log(curentYear);
        months.innerHTML = monthsName[i];
          }  
        else if(curentMonth >11){
            curentYear += 1;
            curentMonth = 0; 
            
            createCalendar(calendar, curentYear, curentMonth);
            months.innerHTML = monthsName[i];
            years.innerHTML = curentYear;
          }
      }  
  })
}

switchMounth();