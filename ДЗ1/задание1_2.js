//задание2

const days = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];
function saturdaySunday() {
  for (let i = 0; i < days.length; i++) {
    if (i == 4 || i == 5) {
      document.writeln(days[i] + '<b>');
      } else {
        document.writeln(days[i]);
      }
    }
}