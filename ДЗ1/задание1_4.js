//задание4 !!!

function vegetablestring() {
  const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка', 1, 2, 3];
  function stringArr(arr) {
    return arr.toString();
  }
  const stringvegetables = stringArr(vegetables);
  alert(stringvegetables);
//
  const vegetables1 = ['Капуста', 'Репа', 'Редиска', 'Морковка', 1, 2, 3];
  function stringArr1(arr1) {
    return arr1.join();
  }
  const stringvegetables1 = stringArr1(vegetables1);
  alert(stringvegetables1); 
}
///
/*const vegetables2 = ['Капуста', 'Репа', 'Редиска', 'Морковка', 1, 2, 3];
function stringArr2(arr2) {
  for (let i=0; i < vegetables2.length; i++);
  return arr2.toString();
}
const stringvegetables2 = stringArr2(vegetables2);
alert(stringvegetables2);*/