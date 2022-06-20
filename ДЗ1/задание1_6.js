//задание6

//forEach
function dateweek() {
  const days1 = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  let myDate = new Date();
  let fullDate = days1[myDate.getDay()]
  days1.forEach (function(days2) {
    if(days2 == fullDate) {
      document.writeln('<i>' + days2 + '</i>' +'<p>');
    } else { 
        document.writeln(days2+'<p>');
      }
  });
}

//for

/*let days1 = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let myDate = new Date();
let fullDate = days1[myDate.getDay()]
for (let i = 0; i <= days1.length - 1; i++) {
    if(days1[i] == fullDate) {
        document.writeln('<i>' + days1[i]+ '</i>' +'<p>');
    } else { 
        document.writeln(days1[i]+'<p>');}
}*/
